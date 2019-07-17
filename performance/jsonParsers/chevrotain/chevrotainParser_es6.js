// ----------------- Lexer -----------------
const Token = chevrotain.Token;
const createToken = chevrotain.createToken;
const ChevrotainLexer = chevrotain.Lexer;

const True = createToken({ name: "True", pattern: "true" });
const False = createToken({ name: "False", pattern: "false" });
const Null = createToken({ name: "Null", pattern: "null" });
const LCurly = createToken({ name: "LCurly", pattern: "{" });
const RCurly = createToken({ name: "RCurly", pattern: "}" });
const LSquare = createToken({ name: "LSquare", pattern: "[" });
const RSquare = createToken({ name: "RSquare", pattern: "]" });
const Comma = createToken({ name: "Comma", pattern: "," });
const Colon = createToken({ name: "Colon", pattern: ":" });

const stringLiteralPattern = /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/
const StringLiteral = createToken({ name: "StringLiteral", pattern: stringLiteralPattern });
const NumberLiteral = createToken({ name: "NumberLiteral", pattern: /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/ });
const WhiteSpace = createToken({ name: "WhiteSpace", pattern: /[ \t\n\r]+/, group: ChevrotainLexer.SKIPPED });

const jsonTokens = [WhiteSpace, StringLiteral, NumberLiteral, Comma, Colon, LCurly, RCurly, LSquare, RSquare, True, False, Null];
// Tracking only the offset provides a small speed boost.
const ChevJsonLexer = new ChevrotainLexer(jsonTokens, { positionTracking: "onlyOffset" });


// ----------------- parser -----------------

// https://github.com/SAP/chevrotain/blob/master/docs/faq.md#Q6
// (Do not create a new Parser instance for each new input.)
const ChevrotainParser = chevrotain.Parser;

class ChevrotainJsonParser extends ChevrotainParser {
    constructor(options) {
        super(jsonTokens, options);

        const $ = this;

        $.RULE("json", function() {
            $.OR([
                { ALT: function() { $.SUBRULE($.object) } },
                { ALT: function() { $.SUBRULE($.array) } }
            ]);
        });

        $.RULE("object", function() {
            $.CONSUME(LCurly);
            $.OPTION(function() {
                $.SUBRULE($.objectItem);
                $.MANY(function() {
                    $.CONSUME(Comma);
                    $.SUBRULE2($.objectItem);
                });
            });
            $.CONSUME(RCurly);
        });

        $.RULE("objectItem", function() {
            $.CONSUME(StringLiteral);
            $.CONSUME(Colon);
            $.SUBRULE($.value);
        });

        $.RULE("array", function() {
            $.CONSUME(LSquare);
            $.OPTION(function() {
                $.SUBRULE($.value);
                $.MANY(function() {
                    $.CONSUME(Comma);
                    $.SUBRULE2($.value);
                });
            });
            $.CONSUME(RSquare);
        });

        $.RULE("value", function() {
            // Perf boost: https://github.com/SAP/chevrotain/blob/master/docs/faq.md#PERFORMANCE
            // See "Avoid reinitializing large arrays of alternatives." section
            $.OR($.c1 || ($.c1 = [
                { ALT: function() { $.CONSUME(StringLiteral) } },
                { ALT: function() { $.CONSUME(NumberLiteral) } },
                { ALT: function() { $.SUBRULE($.object) } },
                { ALT: function() { $.SUBRULE($.array) } },
                { ALT: function() { $.CONSUME(True) } },
                { ALT: function() { $.CONSUME(False) } },
                { ALT: function() { $.CONSUME(Null) } }
            ]));
        });

        // very important to call this after all the rules have been setup.
        // otherwise the parser may not work correctly as it will lack information
        // derived from the self analysis.
        super.performSelfAnalysis();
    }
}
