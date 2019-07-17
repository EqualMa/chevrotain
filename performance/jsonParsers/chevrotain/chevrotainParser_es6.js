'use strict';
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

        this.RULE("json", () => {
            this.OR([
                { ALT: () => { this.SUBRULE(this.object) } },
                { ALT: () => { this.SUBRULE(this.array) } }
            ]);
        });

        this.RULE("object", () => {
            this.CONSUME(LCurly);
            this.OPTION(() => {
                this.SUBRULE(this.objectItem);
                this.MANY(() => {
                    this.CONSUME(Comma);
                    this.SUBRULE2(this.objectItem);
                });
            });
            this.CONSUME(RCurly);
        });

        this.RULE("objectItem", () => {
            this.CONSUME(StringLiteral);
            this.CONSUME(Colon);
            this.SUBRULE(this.value);
        });

        this.RULE("array", () => {
            this.CONSUME(LSquare);
            this.OPTION(() => {
                this.SUBRULE(this.value);
                this.MANY(() => {
                    this.CONSUME(Comma);
                    this.SUBRULE2(this.value);
                });
            });
            this.CONSUME(RSquare);
        });

        this.RULE("value", () => {
            // Perf boost: https://github.com/SAP/chevrotain/blob/master/docs/faq.md#PERFORMANCE
            // See "Avoid reinitializing large arrays of alternatives." section
            this.OR(this.c1 || (this.c1 = [
                { ALT: () => { this.CONSUME(StringLiteral) } },
                { ALT: () => { this.CONSUME(NumberLiteral) } },
                { ALT: () => { this.SUBRULE(this.object) } },
                { ALT: () => { this.SUBRULE(this.array) } },
                { ALT: () => { this.CONSUME(True) } },
                { ALT: () => { this.CONSUME(False) } },
                { ALT: () => { this.CONSUME(Null) } }
            ]));
        });

        // very important to call this after all the rules have been setup.
        // otherwise the parser may not work correctly as it will lack information
        // derived from the self analysis.
        super.performSelfAnalysis();
    }
}
