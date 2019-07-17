/*! chevrotain - v4.8.1 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("chevrotain", [], factory);
	else if(typeof exports === 'object')
		exports["chevrotain"] = factory();
	else
		root["chevrotain"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return dropRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return reject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cloneArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return cloneObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return sortBy; });
/* unused harmony export zipObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return assign; });
/* unused harmony export assignNoOverwrite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NOOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IDENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return packArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PRINT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PRINT_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return isES2015MapSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return applyMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return toFastProperties; });
/*
 Utils using lodash style API. (not necessarily 100% compliant) for functional and other utils.
 These utils should replace usage of lodash in the production code base. not because they are any better...
 but for the purpose of being a dependency free library.

 The hotspots in the code are already written in imperative style for performance reasons.
 so writing several dozen utils which may be slower than the original lodash, does not matter as much
 considering they will not be invoked in hotspots...
 */
function isEmpty(arr) {
    return arr && arr.length === 0;
}
function keys(obj) {
    if (obj === undefined || obj === null) {
        return [];
    }
    return Object.keys(obj);
}
function values(obj) {
    let vals = [];
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        vals.push(obj[keys[i]]);
    }
    return vals;
}
function mapValues(obj, callback) {
    let result = [];
    let objKeys = keys(obj);
    for (let idx = 0; idx < objKeys.length; idx++) {
        let currKey = objKeys[idx];
        result.push(callback.call(null, obj[currKey], currKey));
    }
    return result;
}
function map(arr, callback) {
    let result = [];
    for (let idx = 0; idx < arr.length; idx++) {
        result.push(callback.call(null, arr[idx], idx));
    }
    return result;
}
function flatten(arr) {
    let result = [];
    for (let idx = 0; idx < arr.length; idx++) {
        let currItem = arr[idx];
        if (Array.isArray(currItem)) {
            result = result.concat(flatten(currItem));
        }
        else {
            result.push(currItem);
        }
    }
    return result;
}
function first(arr) {
    return isEmpty(arr) ? undefined : arr[0];
}
function last(arr) {
    let len = arr && arr.length;
    return len ? arr[len - 1] : undefined;
}
function forEach(collection, iteratorCallback) {
    /* istanbul ignore else */
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            iteratorCallback.call(null, collection[i], i);
        }
    }
    else if (isObject(collection)) {
        let colKeys = keys(collection);
        for (let i = 0; i < colKeys.length; i++) {
            let key = colKeys[i];
            let value = collection[key];
            iteratorCallback.call(null, value, key);
        }
    }
    else {
        throw Error("non exhaustive match");
    }
}
function isString(item) {
    return typeof item === "string";
}
function isUndefined(item) {
    return item === undefined;
}
function isFunction(item) {
    return item instanceof Function;
}
function drop(arr, howMuch = 1) {
    return arr.slice(howMuch, arr.length);
}
function dropRight(arr, howMuch = 1) {
    return arr.slice(0, arr.length - howMuch);
}
function filter(arr, predicate) {
    let result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (predicate.call(null, item)) {
                result.push(item);
            }
        }
    }
    return result;
}
function reject(arr, predicate) {
    return filter(arr, item => !predicate(item));
}
function pick(obj, predicate) {
    let keys = Object.keys(obj);
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        let currKey = keys[i];
        let currItem = obj[currKey];
        if (predicate(currItem)) {
            result[currKey] = currItem;
        }
    }
    return result;
}
function has(obj, prop) {
    if (isObject(obj)) {
        return obj.hasOwnProperty(prop);
    }
    return false;
}
function contains(arr, item) {
    return find(arr, currItem => currItem === item) !== undefined ? true : false;
}
/**
 * shallow clone
 */
function cloneArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
/**
 * shallow clone
 */
function cloneObj(obj) {
    let clonedObj = {};
    for (let key in obj) {
        /* istanbul ignore else */
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = obj[key];
        }
    }
    return clonedObj;
}
function find(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (predicate.call(null, item)) {
            return item;
        }
    }
    return undefined;
}
function findAll(arr, predicate) {
    let found = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (predicate.call(null, item)) {
            found.push(item);
        }
    }
    return found;
}
function reduce(arrOrObj, iterator, initial) {
    const isArr = Array.isArray(arrOrObj);
    let vals = isArr ? arrOrObj : values(arrOrObj);
    let objKeys = isArr ? [] : keys(arrOrObj);
    let accumulator = initial;
    for (let i = 0; i < vals.length; i++) {
        accumulator = iterator.call(null, accumulator, vals[i], isArr ? i : objKeys[i]);
    }
    return accumulator;
}
function compact(arr) {
    return reject(arr, item => item === null || item === undefined);
}
function uniq(arr, identity = item => item) {
    let identities = [];
    return reduce(arr, (result, currItem) => {
        let currIdentity = identity(currItem);
        if (contains(identities, currIdentity)) {
            return result;
        }
        else {
            identities.push(currIdentity);
            return result.concat(currItem);
        }
    }, []);
}
function partial(func, ...restArgs) {
    let firstArg = [null];
    let allArgs = firstArg.concat(restArgs);
    return Function.bind.apply(func, allArgs);
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isRegExp(obj) {
    return obj instanceof RegExp;
}
function isObject(obj) {
    return obj instanceof Object;
}
function every(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i], i)) {
            return false;
        }
    }
    return true;
}
function difference(arr, values) {
    return reject(arr, item => contains(values, item));
}
function some(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            return true;
        }
    }
    return false;
}
function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
function sortBy(arr, orderFunc) {
    let result = cloneArr(arr);
    result.sort((a, b) => orderFunc(a) - orderFunc(b));
    return result;
}
function zipObject(keys, values) {
    if (keys.length !== values.length) {
        throw Error("can't zipObject with different number of keys and values!");
    }
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}
/**
 * mutates! (and returns) target
 */
function assign(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
        let curSource = sources[i];
        let currSourceKeys = keys(curSource);
        for (let j = 0; j < currSourceKeys.length; j++) {
            let currKey = currSourceKeys[j];
            target[currKey] = curSource[currKey];
        }
    }
    return target;
}
/**
 * mutates! (and returns) target
 */
function assignNoOverwrite(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
        let curSource = sources[i];
        if (isUndefined(curSource)) {
            continue;
        }
        let currSourceKeys = keys(curSource);
        for (let j = 0; j < currSourceKeys.length; j++) {
            let currKey = currSourceKeys[j];
            if (!has(target, currKey)) {
                target[currKey] = curSource[currKey];
            }
        }
    }
    return target;
}
function defaults(...sources) {
    return assignNoOverwrite.apply(null, [{}].concat(sources));
}
function groupBy(arr, groupKeyFunc) {
    let result = {};
    forEach(arr, item => {
        let currGroupKey = groupKeyFunc(item);
        let currGroupArr = result[currGroupKey];
        if (currGroupArr) {
            currGroupArr.push(item);
        }
        else {
            result[currGroupKey] = [item];
        }
    });
    return result;
}
/**
 * Merge obj2 into obj1.
 * Will overwrite existing properties with the same name
 */
function merge(obj1, obj2) {
    let result = cloneObj(obj1);
    let keys2 = keys(obj2);
    for (let i = 0; i < keys2.length; i++) {
        let key = keys2[i];
        let value = obj2[key];
        result[key] = value;
    }
    return result;
}
function NOOP() { }
function IDENTITY(item) {
    return item;
}
/**
 * Will return a new packed array with same values.
 */
function packArray(holeyArr) {
    const result = [];
    for (let i = 0; i < holeyArr.length; i++) {
        const orgValue = holeyArr[i];
        result.push(orgValue !== undefined ? orgValue : undefined);
    }
    return result;
}
function PRINT_ERROR(msg) {
    /* istanbul ignore else - can't override global.console in node.js */
    if (console && console.error) {
        console.error(`Error: ${msg}`);
    }
}
function PRINT_WARNING(msg) {
    /* istanbul ignore else - can't override global.console in node.js*/
    if (console && console.warn) {
        // TODO: modify docs accordingly
        console.warn(`Warning: ${msg}`);
    }
}
function isES2015MapSupported() {
    return typeof Map === "function";
}
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        const baseProto = baseCtor.prototype;
        Object.getOwnPropertyNames(baseProto).forEach(propName => {
            if (propName === "constructor") {
                return;
            }
            const basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
            // Handle Accessors
            if (basePropDescriptor &&
                (basePropDescriptor.get || basePropDescriptor.set)) {
                Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
            }
            else {
                derivedCtor.prototype[propName] = baseCtor.prototype[propName];
            }
        });
    });
}
// base on: https://github.com/petkaantonov/bluebird/blob/b97c0d2d487e8c5076e8bd897e0dcd4622d31846/src/util.js#L201-L216
function toFastProperties(toBecomeFast) {
    function FakeConstructor() { }
    // If our object is used as a constructor it would receive
    FakeConstructor.prototype = toBecomeFast;
    const fakeInstance = new FakeConstructor();
    function fakeAccess() {
        return typeof fakeInstance.bar;
    }
    // help V8 understand this is a "real" prototype by actually using
    // the fake instance.
    fakeAccess();
    fakeAccess();
    return toBecomeFast;
    // Eval prevents optimization of this method (even though this is dead code)
    /* istanbul ignore next */
    // tslint:disable-next-line
    eval(toBecomeFast);
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) {
    // istanbul ignore next
    if (true) {
        // istanbul ignore next
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else {}
})(
    typeof self !== "undefined"
        ? // istanbul ignore next
          self
        : this,
    function() {
        // references
        // https://hackernoon.com/the-madness-of-parsing-real-world-javascript-regexps-d9ee336df983
        // https://www.ecma-international.org/ecma-262/8.0/index.html#prod-Pattern
        function RegExpParser() {}

        RegExpParser.prototype.saveState = function() {
            return {
                idx: this.idx,
                input: this.input,
                groupIdx: this.groupIdx
            }
        }

        RegExpParser.prototype.restoreState = function(newState) {
            this.idx = newState.idx
            this.input = newState.input
            this.groupIdx = newState.groupIdx
        }

        RegExpParser.prototype.pattern = function(input) {
            // parser state
            this.idx = 0
            this.input = input
            this.groupIdx = 0

            this.consumeChar("/")
            var value = this.disjunction()
            this.consumeChar("/")

            var flags = {
                type: "Flags",
                global: false,
                ignoreCase: false,
                multiLine: false,
                unicode: false,
                sticky: false
            }

            while (this.isRegExpFlag()) {
                switch (this.popChar()) {
                    case "g":
                        addFlag(flags, "global")
                        break
                    case "i":
                        addFlag(flags, "ignoreCase")
                        break
                    case "m":
                        addFlag(flags, "multiLine")
                        break
                    case "u":
                        addFlag(flags, "unicode")
                        break
                    case "y":
                        addFlag(flags, "sticky")
                        break
                }
            }

            if (this.idx !== this.input.length) {
                throw Error(
                    "Redundant input: " + this.input.substring(this.idx)
                )
            }
            return { type: "Pattern", flags: flags, value: value }
        }

        RegExpParser.prototype.disjunction = function() {
            var alts = []
            alts.push(this.alternative())

            while (this.peekChar() === "|") {
                this.consumeChar("|")
                alts.push(this.alternative())
            }

            return { type: "Disjunction", value: alts }
        }

        RegExpParser.prototype.alternative = function() {
            var terms = []

            while (this.isTerm()) {
                terms.push(this.term())
            }

            return { type: "Alternative", value: terms }
        }

        RegExpParser.prototype.term = function() {
            if (this.isAssertion()) {
                return this.assertion()
            } else {
                return this.atom()
            }
        }

        RegExpParser.prototype.assertion = function() {
            switch (this.popChar()) {
                case "^":
                    return { type: "StartAnchor" }
                case "$":
                    return { type: "EndAnchor" }
                // '\b' or '\B'
                case "\\":
                    switch (this.popChar()) {
                        case "b":
                            return { type: "WordBoundary" }
                        case "B":
                            return { type: "NonWordBoundary" }
                    }
                    // istanbul ignore next
                    throw Error("Invalid Assertion Escape")
                // '(?=' or '(?!'
                case "(":
                    this.consumeChar("?")

                    var type
                    switch (this.popChar()) {
                        case "=":
                            type = "Lookahead"
                            break
                        case "!":
                            type = "NegativeLookahead"
                            break
                    }
                    ASSERT_EXISTS(type)

                    var disjunction = this.disjunction()

                    this.consumeChar(")")

                    return { type: type, value: disjunction }
            }
            // istanbul ignore next
            ASSERT_NEVER_REACH_HERE()
        }

        RegExpParser.prototype.quantifier = function(isBacktracking) {
            var range
            switch (this.popChar()) {
                case "*":
                    range = {
                        atLeast: 0,
                        atMost: Infinity
                    }
                    break
                case "+":
                    range = {
                        atLeast: 1,
                        atMost: Infinity
                    }
                    break
                case "?":
                    range = {
                        atLeast: 0,
                        atMost: 1
                    }
                    break
                case "{":
                    var atLeast = this.integerIncludingZero()
                    switch (this.popChar()) {
                        case "}":
                            range = {
                                atLeast: atLeast,
                                atMost: atLeast
                            }
                            break
                        case ",":
                            var atMost
                            if (this.isDigit()) {
                                atMost = this.integerIncludingZero()
                                range = {
                                    atLeast: atLeast,
                                    atMost: atMost
                                }
                            } else {
                                range = {
                                    atLeast: atLeast,
                                    atMost: Infinity
                                }
                            }
                            this.consumeChar("}")
                            break
                    }
                    // throwing exceptions from "ASSERT_EXISTS" during backtracking
                    // causes severe performance degradations
                    if (isBacktracking === true && range === undefined) {
                        return undefined
                    }
                    ASSERT_EXISTS(range)
                    break
            }

            // throwing exceptions from "ASSERT_EXISTS" during backtracking
            // causes severe performance degradations
            if (isBacktracking === true && range === undefined) {
                return undefined
            }

            ASSERT_EXISTS(range)

            if (this.peekChar(0) === "?") {
                this.consumeChar("?")
                range.greedy = false
            } else {
                range.greedy = true
            }

            range.type = "Quantifier"
            return range
        }

        RegExpParser.prototype.atom = function() {
            var atom
            switch (this.peekChar()) {
                case ".":
                    atom = this.dotAll()
                    break
                case "\\":
                    atom = this.atomEscape()
                    break
                case "[":
                    atom = this.characterClass()
                    break
                case "(":
                    atom = this.group()
                    break
            }

            if (atom === undefined && this.isPatternCharacter()) {
                atom = this.patternCharacter()
            }

            ASSERT_EXISTS(atom)

            if (this.isQuantifier()) {
                atom.quantifier = this.quantifier()
            }

            return atom
        }

        RegExpParser.prototype.dotAll = function() {
            this.consumeChar(".")
            return {
                type: "Set",
                complement: true,
                value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
            }
        }

        RegExpParser.prototype.atomEscape = function() {
            this.consumeChar("\\")

            switch (this.peekChar()) {
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    return this.decimalEscapeAtom()
                case "d":
                case "D":
                case "s":
                case "S":
                case "w":
                case "W":
                    return this.characterClassEscape()
                case "f":
                case "n":
                case "r":
                case "t":
                case "v":
                    return this.controlEscapeAtom()
                case "c":
                    return this.controlLetterEscapeAtom()
                case "0":
                    return this.nulCharacterAtom()
                case "x":
                    return this.hexEscapeSequenceAtom()
                case "u":
                    return this.regExpUnicodeEscapeSequenceAtom()
                default:
                    return this.identityEscapeAtom()
            }
        }

        RegExpParser.prototype.decimalEscapeAtom = function() {
            var value = this.positiveInteger()

            return { type: "GroupBackReference", value: value }
        }

        RegExpParser.prototype.characterClassEscape = function() {
            var set
            var complement = false
            switch (this.popChar()) {
                case "d":
                    set = digitsCharCodes
                    break
                case "D":
                    set = digitsCharCodes
                    complement = true
                    break
                case "s":
                    set = whitespaceCodes
                    break
                case "S":
                    set = whitespaceCodes
                    complement = true
                    break
                case "w":
                    set = wordCharCodes
                    break
                case "W":
                    set = wordCharCodes
                    complement = true
                    break
            }

            ASSERT_EXISTS(set)

            return { type: "Set", value: set, complement: complement }
        }

        RegExpParser.prototype.controlEscapeAtom = function() {
            var escapeCode
            switch (this.popChar()) {
                case "f":
                    escapeCode = cc("\f")
                    break
                case "n":
                    escapeCode = cc("\n")
                    break
                case "r":
                    escapeCode = cc("\r")
                    break
                case "t":
                    escapeCode = cc("\t")
                    break
                case "v":
                    escapeCode = cc("\v")
                    break
            }
            ASSERT_EXISTS(escapeCode)

            return { type: "Character", value: escapeCode }
        }

        RegExpParser.prototype.controlLetterEscapeAtom = function() {
            this.consumeChar("c")
            var letter = this.popChar()
            if (/[a-zA-Z]/.test(letter) === false) {
                throw Error("Invalid ")
            }

            var letterCode = letter.toUpperCase().charCodeAt(0) - 64
            return { type: "Character", value: letterCode }
        }

        RegExpParser.prototype.nulCharacterAtom = function() {
            // TODO implement '[lookahead ∉ DecimalDigit]'
            // TODO: for the deprecated octal escape sequence
            this.consumeChar("0")
            return { type: "Character", value: cc("\0") }
        }

        RegExpParser.prototype.hexEscapeSequenceAtom = function() {
            this.consumeChar("x")
            return this.parseHexDigits(2)
        }

        RegExpParser.prototype.regExpUnicodeEscapeSequenceAtom = function() {
            this.consumeChar("u")
            return this.parseHexDigits(4)
        }

        RegExpParser.prototype.identityEscapeAtom = function() {
            // TODO: implement "SourceCharacter but not UnicodeIDContinue"
            // // http://unicode.org/reports/tr31/#Specific_Character_Adjustments
            var escapedChar = this.popChar()
            return { type: "Character", value: cc(escapedChar) }
        }

        RegExpParser.prototype.classPatternCharacterAtom = function() {
            switch (this.peekChar()) {
                // istanbul ignore next
                case "\n":
                // istanbul ignore next
                case "\r":
                // istanbul ignore next
                case "\u2028":
                // istanbul ignore next
                case "\u2029":
                // istanbul ignore next
                case "\\":
                // istanbul ignore next
                case "]":
                    throw Error("TBD")
                default:
                    var nextChar = this.popChar()
                    return { type: "Character", value: cc(nextChar) }
            }
        }

        RegExpParser.prototype.characterClass = function() {
            var set = []
            var complement = false
            this.consumeChar("[")
            if (this.peekChar(0) === "^") {
                this.consumeChar("^")
                complement = true
            }

            while (this.isClassAtom()) {
                var from = this.classAtom()
                var isFromSingleChar = from.type === "Character"
                if (isFromSingleChar && this.isRangeDash()) {
                    this.consumeChar("-")
                    var to = this.classAtom()
                    var isToSingleChar = to.type === "Character"

                    // a range can only be used when both sides are single characters
                    if (isToSingleChar) {
                        if (to.value < from.value) {
                            throw Error("Range out of order in character class")
                        }
                        set.push({ from: from.value, to: to.value })
                    } else {
                        // literal dash
                        insertToSet(from.value, set)
                        set.push(cc("-"))
                        insertToSet(to.value, set)
                    }
                } else {
                    insertToSet(from.value, set)
                }
            }

            this.consumeChar("]")

            return { type: "Set", complement: complement, value: set }
        }

        RegExpParser.prototype.classAtom = function() {
            switch (this.peekChar()) {
                // istanbul ignore next
                case "]":
                // istanbul ignore next
                case "\n":
                // istanbul ignore next
                case "\r":
                // istanbul ignore next
                case "\u2028":
                // istanbul ignore next
                case "\u2029":
                    throw Error("TBD")
                case "\\":
                    return this.classEscape()
                default:
                    return this.classPatternCharacterAtom()
            }
        }

        RegExpParser.prototype.classEscape = function() {
            this.consumeChar("\\")
            switch (this.peekChar()) {
                // Matches a backspace.
                // (Not to be confused with \b word boundary outside characterClass)
                case "b":
                    this.consumeChar("b")
                    return { type: "Character", value: cc("\u0008") }
                case "d":
                case "D":
                case "s":
                case "S":
                case "w":
                case "W":
                    return this.characterClassEscape()
                case "f":
                case "n":
                case "r":
                case "t":
                case "v":
                    return this.controlEscapeAtom()
                case "c":
                    return this.controlLetterEscapeAtom()
                case "0":
                    return this.nulCharacterAtom()
                case "x":
                    return this.hexEscapeSequenceAtom()
                case "u":
                    return this.regExpUnicodeEscapeSequenceAtom()
                default:
                    return this.identityEscapeAtom()
            }
        }

        RegExpParser.prototype.group = function() {
            var capturing = true
            this.consumeChar("(")
            switch (this.peekChar(0)) {
                case "?":
                    this.consumeChar("?")
                    this.consumeChar(":")
                    capturing = false
                    break
                default:
                    this.groupIdx++
                    break
            }
            var value = this.disjunction()
            this.consumeChar(")")

            var groupAst = {
                type: "Group",
                capturing: capturing,
                value: value
            }

            if (capturing) {
                groupAst.idx = this.groupIdx
            }

            return groupAst
        }

        RegExpParser.prototype.positiveInteger = function() {
            var number = this.popChar()

            // istanbul ignore next - can't ever get here due to previous lookahead checks
            // still implementing this error checking in case this ever changes.
            if (decimalPatternNoZero.test(number) === false) {
                throw Error("Expecting a positive integer")
            }

            while (decimalPattern.test(this.peekChar(0))) {
                number += this.popChar()
            }

            return parseInt(number, 10)
        }

        RegExpParser.prototype.integerIncludingZero = function() {
            var number = this.popChar()
            if (decimalPattern.test(number) === false) {
                throw Error("Expecting an integer")
            }

            while (decimalPattern.test(this.peekChar(0))) {
                number += this.popChar()
            }

            return parseInt(number, 10)
        }

        RegExpParser.prototype.patternCharacter = function() {
            var nextChar = this.popChar()
            switch (nextChar) {
                // istanbul ignore next
                case "\n":
                // istanbul ignore next
                case "\r":
                // istanbul ignore next
                case "\u2028":
                // istanbul ignore next
                case "\u2029":
                // istanbul ignore next
                case "^":
                // istanbul ignore next
                case "$":
                // istanbul ignore next
                case "\\":
                // istanbul ignore next
                case ".":
                // istanbul ignore next
                case "*":
                // istanbul ignore next
                case "+":
                // istanbul ignore next
                case "?":
                // istanbul ignore next
                case "(":
                // istanbul ignore next
                case ")":
                // istanbul ignore next
                case "[":
                // istanbul ignore next
                case "|":
                    // istanbul ignore next
                    throw Error("TBD")
                default:
                    return { type: "Character", value: cc(nextChar) }
            }
        }
        RegExpParser.prototype.isRegExpFlag = function() {
            switch (this.peekChar(0)) {
                case "g":
                case "i":
                case "m":
                case "u":
                case "y":
                    return true
                default:
                    return false
            }
        }

        RegExpParser.prototype.isRangeDash = function() {
            return this.peekChar() === "-" && this.isClassAtom(1)
        }

        RegExpParser.prototype.isDigit = function() {
            return decimalPattern.test(this.peekChar(0))
        }

        RegExpParser.prototype.isClassAtom = function(howMuch) {
            if (howMuch === undefined) {
                howMuch = 0
            }

            switch (this.peekChar(howMuch)) {
                case "]":
                case "\n":
                case "\r":
                case "\u2028":
                case "\u2029":
                    return false
                default:
                    return true
            }
        }

        RegExpParser.prototype.isTerm = function() {
            return this.isAtom() || this.isAssertion()
        }

        RegExpParser.prototype.isAtom = function() {
            if (this.isPatternCharacter()) {
                return true
            }

            switch (this.peekChar(0)) {
                case ".":
                case "\\": // atomEscape
                case "[": // characterClass
                // TODO: isAtom must be called before isAssertion - disambiguate
                case "(": // group
                    return true
                default:
                    return false
            }
        }

        RegExpParser.prototype.isAssertion = function() {
            switch (this.peekChar(0)) {
                case "^":
                case "$":
                    return true
                // '\b' or '\B'
                case "\\":
                    switch (this.peekChar(1)) {
                        case "b":
                        case "B":
                            return true
                        default:
                            return false
                    }
                // '(?=' or '(?!'
                case "(":
                    return (
                        this.peekChar(1) === "?" &&
                        (this.peekChar(2) === "=" || this.peekChar(2) === "!")
                    )
                default:
                    return false
            }
        }

        RegExpParser.prototype.isQuantifier = function() {
            var prevState = this.saveState()
            try {
                return this.quantifier(true) !== undefined
            } catch (e) {
                return false
            } finally {
                this.restoreState(prevState)
            }
        }

        RegExpParser.prototype.isPatternCharacter = function() {
            switch (this.peekChar()) {
                case "^":
                case "$":
                case "\\":
                case ".":
                case "*":
                case "+":
                case "?":
                case "(":
                case ")":
                case "[":
                case "|":
                case "/":
                case "\n":
                case "\r":
                case "\u2028":
                case "\u2029":
                    return false
                default:
                    return true
            }
        }

        RegExpParser.prototype.parseHexDigits = function(howMany) {
            var hexString = ""
            for (var i = 0; i < howMany; i++) {
                var hexChar = this.popChar()
                if (hexDigitPattern.test(hexChar) === false) {
                    throw Error("Expecting a HexDecimal digits")
                }
                hexString += hexChar
            }
            var charCode = parseInt(hexString, 16)
            return { type: "Character", value: charCode }
        }

        RegExpParser.prototype.peekChar = function(howMuch) {
            if (howMuch === undefined) {
                howMuch = 0
            }
            return this.input[this.idx + howMuch]
        }

        RegExpParser.prototype.popChar = function() {
            var nextChar = this.peekChar(0)
            this.consumeChar()
            return nextChar
        }

        RegExpParser.prototype.consumeChar = function(char) {
            if (char !== undefined && this.input[this.idx] !== char) {
                throw Error(
                    "Expected: '" +
                        char +
                        "' but found: '" +
                        this.input[this.idx] +
                        "' at offset: " +
                        this.idx
                )
            }

            if (this.idx >= this.input.length) {
                throw Error("Unexpected end of input")
            }
            this.idx++
        }

        // consts and utilities
        var hexDigitPattern = /[0-9a-fA-F]/
        var decimalPattern = /[0-9]/
        var decimalPatternNoZero = /[1-9]/

        function cc(char) {
            return char.charCodeAt(0)
        }

        function insertToSet(item, set) {
            if (item.length !== undefined) {
                item.forEach(function(subItem) {
                    set.push(subItem)
                })
            } else {
                set.push(item)
            }
        }

        function addFlag(flagObj, flagKey) {
            if (flagObj[flagKey] === true) {
                throw "duplicate flag " + flagKey
            }

            flagObj[flagKey] = true
        }

        function ASSERT_EXISTS(obj) {
            // istanbul ignore next
            if (obj === undefined) {
                throw Error("Internal Error - Should never get here!")
            }
        }

        // istanbul ignore next
        function ASSERT_NEVER_REACH_HERE() {
            throw Error("Internal Error - Should never get here!")
        }

        var i
        var digitsCharCodes = []
        for (i = cc("0"); i <= cc("9"); i++) {
            digitsCharCodes.push(i)
        }

        var wordCharCodes = [cc("_")].concat(digitsCharCodes)
        for (i = cc("a"); i <= cc("z"); i++) {
            wordCharCodes.push(i)
        }

        for (i = cc("A"); i <= cc("Z"); i++) {
            wordCharCodes.push(i)
        }

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes
        var whitespaceCodes = [
            cc(" "),
            cc("\f"),
            cc("\n"),
            cc("\r"),
            cc("\t"),
            cc("\v"),
            cc("\t"),
            cc("\u00a0"),
            cc("\u1680"),
            cc("\u2000"),
            cc("\u2001"),
            cc("\u2002"),
            cc("\u2003"),
            cc("\u2004"),
            cc("\u2005"),
            cc("\u2006"),
            cc("\u2007"),
            cc("\u2008"),
            cc("\u2009"),
            cc("\u200a"),
            cc("\u2028"),
            cc("\u2029"),
            cc("\u202f"),
            cc("\u205f"),
            cc("\u3000"),
            cc("\ufeff")
        ]

        function BaseRegExpVisitor() {}

        BaseRegExpVisitor.prototype.visitChildren = function(node) {
            for (var key in node) {
                var child = node[key]
                /* istanbul ignore else */
                if (node.hasOwnProperty(key)) {
                    if (child.type !== undefined) {
                        this.visit(child)
                    } else if (Array.isArray(child)) {
                        child.forEach(function(subChild) {
                            this.visit(subChild)
                        }, this)
                    }
                }
            }
        }

        BaseRegExpVisitor.prototype.visit = function(node) {
            switch (node.type) {
                case "Pattern":
                    this.visitPattern(node)
                    break
                case "Flags":
                    this.visitFlags(node)
                    break
                case "Disjunction":
                    this.visitDisjunction(node)
                    break
                case "Alternative":
                    this.visitAlternative(node)
                    break
                case "StartAnchor":
                    this.visitStartAnchor(node)
                    break
                case "EndAnchor":
                    this.visitEndAnchor(node)
                    break
                case "WordBoundary":
                    this.visitWordBoundary(node)
                    break
                case "NonWordBoundary":
                    this.visitNonWordBoundary(node)
                    break
                case "Lookahead":
                    this.visitLookahead(node)
                    break
                case "NegativeLookahead":
                    this.visitNegativeLookahead(node)
                    break
                case "Character":
                    this.visitCharacter(node)
                    break
                case "Set":
                    this.visitSet(node)
                    break
                case "Group":
                    this.visitGroup(node)
                    break
                case "GroupBackReference":
                    this.visitGroupBackReference(node)
                    break
                case "Quantifier":
                    this.visitQuantifier(node)
                    break
            }

            this.visitChildren(node)
        }

        BaseRegExpVisitor.prototype.visitPattern = function(node) {}

        BaseRegExpVisitor.prototype.visitFlags = function(node) {}

        BaseRegExpVisitor.prototype.visitDisjunction = function(node) {}

        BaseRegExpVisitor.prototype.visitAlternative = function(node) {}

        // Assertion
        BaseRegExpVisitor.prototype.visitStartAnchor = function(node) {}

        BaseRegExpVisitor.prototype.visitEndAnchor = function(node) {}

        BaseRegExpVisitor.prototype.visitWordBoundary = function(node) {}

        BaseRegExpVisitor.prototype.visitNonWordBoundary = function(node) {}

        BaseRegExpVisitor.prototype.visitLookahead = function(node) {}

        BaseRegExpVisitor.prototype.visitNegativeLookahead = function(node) {}

        // atoms
        BaseRegExpVisitor.prototype.visitCharacter = function(node) {}

        BaseRegExpVisitor.prototype.visitSet = function(node) {}

        BaseRegExpVisitor.prototype.visitGroup = function(node) {}

        BaseRegExpVisitor.prototype.visitGroupBackReference = function(node) {}

        BaseRegExpVisitor.prototype.visitQuantifier = function(node) {}

        return {
            RegExpParser: RegExpParser,
            BaseRegExpVisitor: BaseRegExpVisitor,
            VERSION: "0.4.0"
        }
    }
)


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./es6/src/version.js
// needs a separate module as this is required inside chevrotain productive code
// and also in the entry point for webpack(api.ts).
// A separate file avoids cyclic dependencies and webpack errors.
const VERSION = "4.8.1";
//# sourceMappingURL=version.js.map
// EXTERNAL MODULE: ./es6/src/utils/utils.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./es6/src/lang/lang_extensions.js

function classNameFromInstance(instance) {
    return functionName(instance.constructor);
}
const FUNC_NAME_REGEXP = /^\s*function\s*(\S*)\s*\(/;
const NAME = "name";
/* istanbul ignore next too many hacks for IE/old versions of node.js here*/
function functionName(func) {
    // Engines that support Function.prototype.name OR the nth (n>1) time after
    // the name has been computed in the following else block.
    let existingNameProp = func.name;
    if (existingNameProp) {
        return existingNameProp;
    }
    // hack for IE and engines that do not support Object.defineProperty on function.name (Node.js 0.10 && 0.12)
    let computedName = func.toString().match(FUNC_NAME_REGEXP)[1];
    return computedName;
}
/**
 * @returns {boolean} - has the property been successfully defined
 */
function defineNameProp(obj, nameValue) {
    let namePropDescriptor = Object.getOwnPropertyDescriptor(obj, NAME);
    /* istanbul ignore else -> will only run in old versions of node.js */
    if (Object(utils["F" /* isUndefined */])(namePropDescriptor) || namePropDescriptor.configurable) {
        Object.defineProperty(obj, NAME, {
            enumerable: false,
            configurable: true,
            writable: false,
            value: nameValue
        });
        return true;
    }
    /* istanbul ignore next -> will only run in old versions of node.js */
    return false;
}
/**
 * simple Hashtable between a string and some generic value
 * this should be removed once typescript supports ES6 style Hashtable
 */
class lang_extensions_HashTable {
    constructor() {
        this._state = {};
    }
    keys() {
        return Object(utils["G" /* keys */])(this._state);
    }
    values() {
        return Object(utils["U" /* values */])(this._state);
    }
    put(key, value) {
        this._state[key] = value;
    }
    putAll(other) {
        this._state = Object(utils["f" /* assign */])(this._state, other._state);
    }
    get(key) {
        // To avoid edge case with a key called "hasOwnProperty" we need to perform the commented out check below
        // -> if (Object.prototype.hasOwnProperty.call(this._state, key)) { ... } <-
        // however this costs nearly 25% of the parser's runtime.
        // if someone decides to name their Parser class "hasOwnProperty" they deserve what they will get :)
        return this._state[key];
    }
    containsKey(key) {
        return Object(utils["w" /* has */])(this._state, key);
    }
    clear() {
        this._state = {};
    }
}
//# sourceMappingURL=lang_extensions.js.map
// EXTERNAL MODULE: /workspace/chevrotain/node_modules/regexp-to-ast/lib/regexp-to-ast.js
var regexp_to_ast = __webpack_require__(1);

// CONCATENATED MODULE: ./es6/src/scan/reg_exp.js


const regExpParser = new regexp_to_ast["RegExpParser"]();
const complementErrorMessage = "Complement Sets are not supported for first char optimization";
const failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
function getStartCodes(regExp, ensureOptimizations = false) {
    try {
        const ast = regExpParser.pattern(regExp.toString());
        let firstChars = firstChar(ast.value);
        if (ast.flags.ignoreCase) {
            firstChars = applyIgnoreCase(firstChars);
        }
        return firstChars;
    }
    catch (e) {
        /* istanbul ignore next */
        // Testing this relies on the regexp-to-ast library having a bug... */
        // TODO: only the else branch needs to be ignored, try to fix with newer prettier / tsc
        if (e.message === complementErrorMessage) {
            if (ensureOptimizations) {
                Object(utils["d" /* PRINT_WARNING */])(`${failedOptimizationPrefixMsg}` +
                    `\tUnable to optimize: < ${regExp.toString()} >\n` +
                    "\tComplement Sets cannot be automatically optimized.\n" +
                    "\tThis will disable the lexer's first char optimizations.\n" +
                    "\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
            }
        }
        else {
            let msgSuffix = "";
            if (ensureOptimizations) {
                msgSuffix =
                    "\n\tThis will disable the lexer's first char optimizations.\n" +
                        "\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
            }
            Object(utils["c" /* PRINT_ERROR */])(`${failedOptimizationPrefixMsg}\n` +
                `\tFailed parsing: < ${regExp.toString()} >\n` +
                `\tUsing the regexp-to-ast library version: ${regexp_to_ast["VERSION"]}\n` +
                "\tPlease open an issue at: https://github.com/bd82/regexp-to-ast/issues" +
                msgSuffix);
        }
    }
    return [];
}
function firstChar(ast) {
    switch (ast.type) {
        case "Disjunction":
            return Object(utils["t" /* flatten */])(Object(utils["I" /* map */])(ast.value, firstChar));
        case "Alternative":
            const startChars = [];
            const terms = ast.value;
            for (let i = 0; i < terms.length; i++) {
                const term = terms[i];
                if (Object(utils["j" /* contains */])([
                    // A group back reference cannot affect potential starting char.
                    // because if a back reference is the first production than automatically
                    // the group being referenced has had to come BEFORE so its codes have already been added
                    "GroupBackReference",
                    // assertions do not affect potential starting codes
                    "Lookahead",
                    "NegativeLookahead",
                    "StartAnchor",
                    "EndAnchor",
                    "WordBoundary",
                    "NonWordBoundary"
                ], term.type)) {
                    continue;
                }
                const atom = term;
                switch (atom.type) {
                    case "Character":
                        startChars.push(atom.value);
                        break;
                    case "Set":
                        if (atom.complement === true) {
                            throw Error(complementErrorMessage);
                        }
                        // TODO: this may still be slow when there are many codes
                        Object(utils["u" /* forEach */])(atom.value, code => {
                            if (typeof code === "number") {
                                startChars.push(code);
                            }
                            else {
                                //range
                                const range = code;
                                for (let rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                                    startChars.push(rangeCode);
                                }
                            }
                        });
                        break;
                    case "Group":
                        const groupCodes = firstChar(atom.value);
                        Object(utils["u" /* forEach */])(groupCodes, code => startChars.push(code));
                        break;
                    /* istanbul ignore next */
                    default:
                        throw Error("Non Exhaustive Match");
                }
                // reached a mandatory production, no more **start** codes can be found on this alternative
                const isOptionalQuantifier = atom.quantifier !== undefined &&
                    atom.quantifier.atLeast === 0;
                if (
                // A group may be optional due to empty contents /(?:)/
                // or if everything inside it is optional /((a)?)/
                (atom.type === "Group" &&
                    isWholeOptional(atom) === false) ||
                    // If this term is not a group it may only be optional if it has an optional quantifier
                    (atom.type !== "Group" && isOptionalQuantifier === false)) {
                    break;
                }
            }
            return startChars;
        /* istanbul ignore next */
        default:
            throw Error("non exhaustive match!");
    }
}
function applyIgnoreCase(firstChars) {
    const firstCharsCase = [];
    Object(utils["u" /* forEach */])(firstChars, charCode => {
        firstCharsCase.push(charCode);
        const char = String.fromCharCode(charCode);
        /* istanbul ignore else */
        if (char.toUpperCase() !== char) {
            firstCharsCase.push(char.toUpperCase().charCodeAt(0));
        }
        else if (char.toLowerCase() !== char) {
            firstCharsCase.push(char.toLowerCase().charCodeAt(0));
        }
    });
    return firstCharsCase;
}
function findCode(setNode, targetCharCodes) {
    return Object(utils["q" /* find */])(setNode.value, codeOrRange => {
        if (typeof codeOrRange === "number") {
            return Object(utils["j" /* contains */])(targetCharCodes, codeOrRange);
        }
        else {
            // range
            const range = codeOrRange;
            return (Object(utils["q" /* find */])(targetCharCodes, targetCode => range.from <= targetCode && targetCode <= range.to) !== undefined);
        }
    });
}
function isWholeOptional(ast) {
    if (ast.quantifier && ast.quantifier.atLeast === 0) {
        return true;
    }
    if (!ast.value) {
        return false;
    }
    return Object(utils["y" /* isArray */])(ast.value)
        ? Object(utils["o" /* every */])(ast.value, isWholeOptional)
        : isWholeOptional(ast.value);
}
class reg_exp_CharCodeFinder extends regexp_to_ast["BaseRegExpVisitor"] {
    constructor(targetCharCodes) {
        super();
        this.targetCharCodes = targetCharCodes;
        this.found = false;
    }
    visitChildren(node) {
        // switch lookaheads as they do not actually consume any characters thus
        // finding a charCode at lookahead context does not mean that regexp can actually contain it in a match.
        switch (node.type) {
            case "Lookahead":
                this.visitLookahead(node);
                return;
            case "NegativeLookahead":
                this.visitNegativeLookahead(node);
                return;
        }
        super.visitChildren(node);
    }
    visitCharacter(node) {
        if (Object(utils["j" /* contains */])(this.targetCharCodes, node.value)) {
            this.found = true;
        }
    }
    visitSet(node) {
        if (node.complement) {
            if (findCode(node, this.targetCharCodes) === undefined) {
                this.found = true;
            }
        }
        else {
            if (findCode(node, this.targetCharCodes) !== undefined) {
                this.found = true;
            }
        }
    }
}
function canMatchCharCode(charCodes, pattern) {
    if (pattern instanceof RegExp) {
        const ast = regExpParser.pattern(pattern.toString());
        const charCodeFinder = new reg_exp_CharCodeFinder(charCodes);
        charCodeFinder.visit(ast);
        return charCodeFinder.found;
    }
    else {
        return (Object(utils["q" /* find */])(pattern, char => {
            return Object(utils["j" /* contains */])(charCodes, char.charCodeAt(0));
        }) !== undefined);
    }
}
//# sourceMappingURL=reg_exp.js.map
// CONCATENATED MODULE: ./es6/src/scan/lexer.js





const lexer_regExpParser = new regexp_to_ast["RegExpParser"]();
const PATTERN = "PATTERN";
const DEFAULT_MODE = "defaultMode";
const MODES = "modes";
let SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
function disableSticky() {
    SUPPORT_STICKY = false;
}
function enableSticky() {
    SUPPORT_STICKY = true;
}
function analyzeTokenTypes(tokenTypes, options) {
    options = Object(utils["k" /* defaults */])(options, {
        useSticky: SUPPORT_STICKY,
        debug: false,
        safeMode: false,
        positionTracking: "full",
        lineTerminatorCharacters: ["\r", "\n"]
    });
    let onlyRelevantTypes = Object(utils["P" /* reject */])(tokenTypes, currType => {
        return currType[PATTERN] === lexer_public_Lexer.NA;
    });
    let hasCustom = false;
    let allTransformedPatterns = Object(utils["I" /* map */])(onlyRelevantTypes, currType => {
        let currPattern = currType[PATTERN];
        /* istanbul ignore else */
        if (Object(utils["D" /* isRegExp */])(currPattern)) {
            let regExpSource = currPattern.source;
            if (regExpSource.length === 1 &&
                // only these regExp meta characters which can appear in a length one regExp
                regExpSource !== "^" &&
                regExpSource !== "$" &&
                regExpSource !== ".") {
                return regExpSource;
            }
            else if (regExpSource.length === 2 &&
                regExpSource[0] === "\\" &&
                // not a meta character
                !Object(utils["j" /* contains */])([
                    "d",
                    "D",
                    "s",
                    "S",
                    "t",
                    "r",
                    "n",
                    "t",
                    "0",
                    "c",
                    "b",
                    "B",
                    "f",
                    "v",
                    "w",
                    "W"
                ], regExpSource[1])) {
                // escaped meta Characters: /\+/ /\[/
                // or redundant escaping: /\a/
                // without the escaping "\"
                return regExpSource[1];
            }
            else {
                return options.useSticky
                    ? addStickyFlag(currPattern)
                    : addStartOfInput(currPattern);
            }
        }
        else if (Object(utils["B" /* isFunction */])(currPattern)) {
            hasCustom = true;
            // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
            return { exec: currPattern };
        }
        else if (Object(utils["w" /* has */])(currPattern, "exec")) {
            hasCustom = true;
            // ICustomPattern
            return currPattern;
        }
        else if (typeof currPattern === "string") {
            // IGNORE ABOVE ELSE
            if (currPattern.length === 1) {
                return currPattern;
            }
            else {
                let escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
                let wrappedRegExp = new RegExp(escapedRegExpString);
                return options.useSticky
                    ? addStickyFlag(wrappedRegExp)
                    : addStartOfInput(wrappedRegExp);
            }
        }
        else {
            throw Error("non exhaustive match");
        }
    });
    let patternIdxToType = Object(utils["I" /* map */])(onlyRelevantTypes, currType => currType.tokenTypeIdx);
    let patternIdxToGroup = Object(utils["I" /* map */])(onlyRelevantTypes, (clazz) => {
        let groupName = clazz.GROUP;
        /* istanbul ignore next */
        if (groupName === lexer_public_Lexer.SKIPPED) {
            return undefined;
        }
        else if (Object(utils["E" /* isString */])(groupName)) {
            return groupName;
        }
        else if (Object(utils["F" /* isUndefined */])(groupName)) {
            return false;
        }
        else {
            throw Error("non exhaustive match");
        }
    });
    let patternIdxToLongerAltIdx = Object(utils["I" /* map */])(onlyRelevantTypes, (clazz) => {
        let longerAltType = clazz.LONGER_ALT;
        if (longerAltType) {
            let longerAltIdx = Object(utils["x" /* indexOf */])(onlyRelevantTypes, longerAltType);
            return longerAltIdx;
        }
    });
    let patternIdxToPushMode = Object(utils["I" /* map */])(onlyRelevantTypes, (clazz) => clazz.PUSH_MODE);
    let patternIdxToPopMode = Object(utils["I" /* map */])(onlyRelevantTypes, (clazz) => Object(utils["w" /* has */])(clazz, "POP_MODE"));
    const lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
    let patternIdxToCanLineTerminator = Object(utils["I" /* map */])(onlyRelevantTypes, tokType => false);
    if (options.positionTracking !== "onlyOffset") {
        patternIdxToCanLineTerminator = Object(utils["I" /* map */])(onlyRelevantTypes, tokType => {
            if (Object(utils["w" /* has */])(tokType, "LINE_BREAKS")) {
                return tokType.LINE_BREAKS;
            }
            else {
                if (checkLineBreaksIssues(tokType, lineTerminatorCharCodes) ===
                    false) {
                    return canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
                }
            }
        });
    }
    let patternIdxToIsCustom = Object(utils["I" /* map */])(onlyRelevantTypes, isCustomPattern);
    let patternIdxToShort = Object(utils["I" /* map */])(allTransformedPatterns, isShortPattern);
    let emptyGroups = Object(utils["O" /* reduce */])(onlyRelevantTypes, (acc, clazz) => {
        let groupName = clazz.GROUP;
        if (Object(utils["E" /* isString */])(groupName) && !(groupName === lexer_public_Lexer.SKIPPED)) {
            acc[groupName] = [];
        }
        return acc;
    }, {});
    let patternIdxToConfig = Object(utils["I" /* map */])(allTransformedPatterns, (x, idx) => {
        return {
            pattern: allTransformedPatterns[idx],
            longerAlt: patternIdxToLongerAltIdx[idx],
            canLineTerminator: patternIdxToCanLineTerminator[idx],
            isCustom: patternIdxToIsCustom[idx],
            short: patternIdxToShort[idx],
            group: patternIdxToGroup[idx],
            push: patternIdxToPushMode[idx],
            pop: patternIdxToPopMode[idx],
            tokenTypeIdx: patternIdxToType[idx],
            tokenType: onlyRelevantTypes[idx]
        };
    });
    function addToMapOfArrays(map, key, value) {
        if (map[key] === undefined) {
            map[key] = [];
        }
        map[key].push(value);
    }
    let canBeOptimized = true;
    let charCodeToPatternIdxToConfig = [];
    if (!options.safeMode) {
        charCodeToPatternIdxToConfig = Object(utils["O" /* reduce */])(onlyRelevantTypes, (result, currTokType, idx) => {
            if (typeof currTokType.PATTERN === "string") {
                const key = currTokType.PATTERN.charCodeAt(0);
                addToMapOfArrays(result, key, patternIdxToConfig[idx]);
            }
            else if (Object(utils["y" /* isArray */])(currTokType.START_CHARS_HINT)) {
                Object(utils["u" /* forEach */])(currTokType.START_CHARS_HINT, charOrInt => {
                    const key = typeof charOrInt === "string"
                        ? charOrInt.charCodeAt(0)
                        : charOrInt;
                    addToMapOfArrays(result, key, patternIdxToConfig[idx]);
                });
            }
            else if (Object(utils["D" /* isRegExp */])(currTokType.PATTERN)) {
                if (currTokType.PATTERN.unicode) {
                    canBeOptimized = false;
                    if (options.ensureOptimizations) {
                        Object(utils["c" /* PRINT_ERROR */])(`${failedOptimizationPrefixMsg}` +
                            `\tUnable to analyze < ${currTokType.PATTERN.toString()} > pattern.\n` +
                            "\tThe regexp unicode flag is not currently supported by the regexp-to-ast library.\n" +
                            "\tThis will disable the lexer's first char optimizations.\n" +
                            "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
                    }
                }
                else {
                    const startCodes = getStartCodes(currTokType.PATTERN, options.ensureOptimizations);
                    /* istanbul ignore if */
                    // start code will only be empty given an empty regExp or failure of regexp-to-ast library
                    // the first should be a different validation and the second cannot be tested.
                    if (Object(utils["A" /* isEmpty */])(startCodes)) {
                        // we cannot understand what codes may start possible matches
                        // The optimization correctness requires knowing start codes for ALL patterns.
                        // Not actually sure this is an error, no debug message
                        canBeOptimized = false;
                    }
                    Object(utils["u" /* forEach */])(startCodes, code => {
                        addToMapOfArrays(result, code, patternIdxToConfig[idx]);
                    });
                }
            }
            else {
                if (options.ensureOptimizations) {
                    Object(utils["c" /* PRINT_ERROR */])(`${failedOptimizationPrefixMsg}` +
                        `\tTokenType: <${tokens_public_tokenName(currTokType)}> is using a custom token pattern without providing <start_chars_hint> parameter.\n` +
                        "\tThis will disable the lexer's first char optimizations.\n" +
                        "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE");
                }
                canBeOptimized = false;
            }
            return result;
        }, []);
    }
    if (canBeOptimized && charCodeToPatternIdxToConfig.length < 65536) {
        charCodeToPatternIdxToConfig = Object(utils["L" /* packArray */])(charCodeToPatternIdxToConfig);
    }
    return {
        emptyGroups: emptyGroups,
        patternIdxToConfig: patternIdxToConfig,
        charCodeToPatternIdxToConfig: charCodeToPatternIdxToConfig,
        hasCustom: hasCustom,
        canBeOptimized: canBeOptimized
    };
}
function validatePatterns(tokenTypes, validModesNames) {
    let errors = [];
    let missingResult = findMissingPatterns(tokenTypes);
    errors = errors.concat(missingResult.errors);
    let invalidResult = findInvalidPatterns(missingResult.valid);
    let validTokenTypes = invalidResult.valid;
    errors = errors.concat(invalidResult.errors);
    errors = errors.concat(validateRegExpPattern(validTokenTypes));
    errors = errors.concat(findInvalidGroupType(validTokenTypes));
    errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
    errors = errors.concat(findUnreachablePatterns(validTokenTypes));
    return errors;
}
function validateRegExpPattern(tokenTypes) {
    let errors = [];
    let withRegExpPatterns = Object(utils["p" /* filter */])(tokenTypes, currTokType => Object(utils["D" /* isRegExp */])(currTokType[PATTERN]));
    errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
    errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
    errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
    return errors;
}
function findMissingPatterns(tokenTypes) {
    let tokenTypesWithMissingPattern = Object(utils["p" /* filter */])(tokenTypes, currType => {
        return !Object(utils["w" /* has */])(currType, PATTERN);
    });
    let errors = Object(utils["I" /* map */])(tokenTypesWithMissingPattern, currType => {
        return {
            message: "Token Type: ->" +
                tokens_public_tokenName(currType) +
                "<- missing static 'PATTERN' property",
            type: LexerDefinitionErrorType.MISSING_PATTERN,
            tokenTypes: [currType]
        };
    });
    let valid = Object(utils["l" /* difference */])(tokenTypes, tokenTypesWithMissingPattern);
    return { errors, valid };
}
function findInvalidPatterns(tokenTypes) {
    let tokenTypesWithInvalidPattern = Object(utils["p" /* filter */])(tokenTypes, currType => {
        let pattern = currType[PATTERN];
        return (!Object(utils["D" /* isRegExp */])(pattern) &&
            !Object(utils["B" /* isFunction */])(pattern) &&
            !Object(utils["w" /* has */])(pattern, "exec") &&
            !Object(utils["E" /* isString */])(pattern));
    });
    let errors = Object(utils["I" /* map */])(tokenTypesWithInvalidPattern, currType => {
        return {
            message: "Token Type: ->" +
                tokens_public_tokenName(currType) +
                "<- static 'PATTERN' can only be a RegExp, a" +
                " Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
            type: LexerDefinitionErrorType.INVALID_PATTERN,
            tokenTypes: [currType]
        };
    });
    let valid = Object(utils["l" /* difference */])(tokenTypes, tokenTypesWithInvalidPattern);
    return { errors, valid };
}
const end_of_input = /[^\\][\$]/;
function findEndOfInputAnchor(tokenTypes) {
    class EndAnchorFinder extends regexp_to_ast["BaseRegExpVisitor"] {
        constructor() {
            super(...arguments);
            this.found = false;
        }
        visitEndAnchor(node) {
            this.found = true;
        }
    }
    let invalidRegex = Object(utils["p" /* filter */])(tokenTypes, currType => {
        const pattern = currType[PATTERN];
        try {
            const regexpAst = lexer_regExpParser.pattern(pattern.toString());
            const endAnchorVisitor = new EndAnchorFinder();
            endAnchorVisitor.visit(regexpAst);
            return endAnchorVisitor.found;
        }
        catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/
            return end_of_input.test(pattern.source);
        }
    });
    let errors = Object(utils["I" /* map */])(invalidRegex, currType => {
        return {
            message: "Unexpected RegExp Anchor Error:\n" +
                "\tToken Type: ->" +
                tokens_public_tokenName(currType) +
                "<- static 'PATTERN' cannot contain end of input anchor '$'\n" +
                "\tSee sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS" +
                "\tfor details.",
            type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
            tokenTypes: [currType]
        };
    });
    return errors;
}
function findEmptyMatchRegExps(tokenTypes) {
    let matchesEmptyString = Object(utils["p" /* filter */])(tokenTypes, currType => {
        let pattern = currType[PATTERN];
        return pattern.test("");
    });
    let errors = Object(utils["I" /* map */])(matchesEmptyString, currType => {
        return {
            message: "Token Type: ->" +
                tokens_public_tokenName(currType) +
                "<- static 'PATTERN' must not match an empty string",
            type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
            tokenTypes: [currType]
        };
    });
    return errors;
}
const start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(tokenTypes) {
    class StartAnchorFinder extends regexp_to_ast["BaseRegExpVisitor"] {
        constructor() {
            super(...arguments);
            this.found = false;
        }
        visitStartAnchor(node) {
            this.found = true;
        }
    }
    let invalidRegex = Object(utils["p" /* filter */])(tokenTypes, currType => {
        const pattern = currType[PATTERN];
        try {
            const regexpAst = lexer_regExpParser.pattern(pattern.toString());
            const startAnchorVisitor = new StartAnchorFinder();
            startAnchorVisitor.visit(regexpAst);
            return startAnchorVisitor.found;
        }
        catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/
            return start_of_input.test(pattern.source);
        }
    });
    let errors = Object(utils["I" /* map */])(invalidRegex, currType => {
        return {
            message: "Unexpected RegExp Anchor Error:\n" +
                "\tToken Type: ->" +
                tokens_public_tokenName(currType) +
                "<- static 'PATTERN' cannot contain start of input anchor '^'\n" +
                "\tSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS" +
                "\tfor details.",
            type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
            tokenTypes: [currType]
        };
    });
    return errors;
}
function findUnsupportedFlags(tokenTypes) {
    let invalidFlags = Object(utils["p" /* filter */])(tokenTypes, currType => {
        let pattern = currType[PATTERN];
        return (pattern instanceof RegExp && (pattern.multiline || pattern.global));
    });
    let errors = Object(utils["I" /* map */])(invalidFlags, currType => {
        return {
            message: "Token Type: ->" +
                tokens_public_tokenName(currType) +
                "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
            type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
            tokenTypes: [currType]
        };
    });
    return errors;
}
// This can only test for identical duplicate RegExps, not semantically equivalent ones.
function findDuplicatePatterns(tokenTypes) {
    let found = [];
    let identicalPatterns = Object(utils["I" /* map */])(tokenTypes, (outerType) => {
        return Object(utils["O" /* reduce */])(tokenTypes, (result, innerType) => {
            if (outerType.PATTERN.source === innerType.PATTERN.source &&
                !Object(utils["j" /* contains */])(found, innerType) &&
                innerType.PATTERN !== lexer_public_Lexer.NA) {
                // this avoids duplicates in the result, each Token Type may only appear in one "set"
                // in essence we are creating Equivalence classes on equality relation.
                found.push(innerType);
                result.push(innerType);
                return result;
            }
            return result;
        }, []);
    });
    identicalPatterns = Object(utils["i" /* compact */])(identicalPatterns);
    let duplicatePatterns = Object(utils["p" /* filter */])(identicalPatterns, currIdenticalSet => {
        return currIdenticalSet.length > 1;
    });
    let errors = Object(utils["I" /* map */])(duplicatePatterns, (setOfIdentical) => {
        let tokenTypeNames = Object(utils["I" /* map */])(setOfIdentical, (currType) => {
            return tokens_public_tokenName(currType);
        });
        let dupPatternSrc = Object(utils["s" /* first */])(setOfIdentical).PATTERN;
        return {
            message: `The same RegExp pattern ->${dupPatternSrc}<-` +
                `has been used in all of the following Token Types: ${tokenTypeNames.join(", ")} <-`,
            type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
            tokenTypes: setOfIdentical
        };
    });
    return errors;
}
function findInvalidGroupType(tokenTypes) {
    let invalidTypes = Object(utils["p" /* filter */])(tokenTypes, (clazz) => {
        if (!Object(utils["w" /* has */])(clazz, "GROUP")) {
            return false;
        }
        let group = clazz.GROUP;
        return group !== lexer_public_Lexer.SKIPPED && group !== lexer_public_Lexer.NA && !Object(utils["E" /* isString */])(group);
    });
    let errors = Object(utils["I" /* map */])(invalidTypes, currType => {
        return {
            message: "Token Type: ->" +
                tokens_public_tokenName(currType) +
                "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
            type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
            tokenTypes: [currType]
        };
    });
    return errors;
}
function findModesThatDoNotExist(tokenTypes, validModes) {
    let invalidModes = Object(utils["p" /* filter */])(tokenTypes, (clazz) => {
        return (clazz.PUSH_MODE !== undefined &&
            !Object(utils["j" /* contains */])(validModes, clazz.PUSH_MODE));
    });
    let errors = Object(utils["I" /* map */])(invalidModes, clazz => {
        let msg = `Token Type: ->${tokens_public_tokenName(clazz)}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${clazz.PUSH_MODE}<-` + `which does not exist`;
        return {
            message: msg,
            type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
            tokenTypes: [clazz]
        };
    });
    return errors;
}
function findUnreachablePatterns(tokenTypes) {
    const errors = [];
    const canBeTested = Object(utils["O" /* reduce */])(tokenTypes, (result, tokType, idx) => {
        const pattern = tokType.PATTERN;
        if (pattern === lexer_public_Lexer.NA) {
            return result;
        }
        // a more comprehensive validation for all forms of regExps would require
        // deeper regExp analysis capabilities
        if (Object(utils["E" /* isString */])(pattern)) {
            result.push({ str: pattern, idx, tokenType: tokType });
        }
        else if (Object(utils["D" /* isRegExp */])(pattern) && noMetaChar(pattern)) {
            result.push({ str: pattern.source, idx, tokenType: tokType });
        }
        return result;
    }, []);
    Object(utils["u" /* forEach */])(tokenTypes, (tokType, testIdx) => {
        Object(utils["u" /* forEach */])(canBeTested, ({ str, idx, tokenType }) => {
            if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
                let msg = `Token: ->${tokens_public_tokenName(tokenType)}<- can never be matched.\n` +
                    `Because it appears AFTER the Token Type ->${tokens_public_tokenName(tokType)}<-` +
                    `in the lexer's definition.\n` +
                    `See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
                errors.push({
                    message: msg,
                    type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
                    tokenTypes: [tokType, tokenType]
                });
            }
        });
    });
    return errors;
}
function testTokenType(str, pattern) {
    /* istanbul ignore else */
    if (Object(utils["D" /* isRegExp */])(pattern)) {
        const regExpArray = pattern.exec(str);
        return regExpArray !== null && regExpArray.index === 0;
    }
    else if (Object(utils["B" /* isFunction */])(pattern)) {
        // maintain the API of custom patterns
        return pattern(str, 0, [], {});
    }
    else if (Object(utils["w" /* has */])(pattern, "exec")) {
        // maintain the API of custom patterns
        return pattern.exec(str, 0, [], {});
    }
    else if (typeof pattern === "string") {
        return pattern === str;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function noMetaChar(regExp) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const metaChars = [
        ".",
        "\\",
        "[",
        "]",
        "|",
        "^",
        "$",
        "(",
        ")",
        "?",
        "*",
        "+",
        "{"
    ];
    return (Object(utils["q" /* find */])(metaChars, char => regExp.source.indexOf(char) !== -1) ===
        undefined);
}
function addStartOfInput(pattern) {
    let flags = pattern.ignoreCase ? "i" : "";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp(`^(?:${pattern.source})`, flags);
}
function addStickyFlag(pattern) {
    let flags = pattern.ignoreCase ? "iy" : "y";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp(`${pattern.source}`, flags);
}
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    let errors = [];
    // some run time checks to help the end users.
    if (!Object(utils["w" /* has */])(lexerDefinition, DEFAULT_MODE)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" +
                DEFAULT_MODE +
                "> property in its definition\n",
            type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
        });
    }
    if (!Object(utils["w" /* has */])(lexerDefinition, MODES)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" +
                MODES +
                "> property in its definition\n",
            type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
        });
    }
    if (Object(utils["w" /* has */])(lexerDefinition, MODES) &&
        Object(utils["w" /* has */])(lexerDefinition, DEFAULT_MODE) &&
        !Object(utils["w" /* has */])(lexerDefinition.modes, lexerDefinition.defaultMode)) {
        errors.push({
            message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${lexerDefinition.defaultMode}>` + `which does not exist\n`,
            type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
        });
    }
    if (Object(utils["w" /* has */])(lexerDefinition, MODES)) {
        Object(utils["u" /* forEach */])(lexerDefinition.modes, (currModeValue, currModeName) => {
            Object(utils["u" /* forEach */])(currModeValue, (currTokType, currIdx) => {
                if (Object(utils["F" /* isUndefined */])(currTokType)) {
                    errors.push({
                        message: `A Lexer cannot be initialized using an undefined Token Type. Mode:` +
                            `<${currModeName}> at index: <${currIdx}>\n`,
                        type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
                    });
                }
            });
        });
    }
    return errors;
}
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    const warnings = [];
    let hasAnyLineBreak = false;
    const allTokenTypes = Object(utils["i" /* compact */])(Object(utils["t" /* flatten */])(Object(utils["J" /* mapValues */])(lexerDefinition.modes, tokTypes => tokTypes)));
    const concreteTokenTypes = Object(utils["P" /* reject */])(allTokenTypes, currType => currType[PATTERN] === lexer_public_Lexer.NA);
    const terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
    if (trackLines) {
        Object(utils["u" /* forEach */])(concreteTokenTypes, tokType => {
            const currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
            if (currIssue !== false) {
                const message = buildLineBreakIssueMessage(tokType, currIssue);
                const warningDescriptor = {
                    message,
                    type: currIssue.issue,
                    tokenType: tokType
                };
                warnings.push(warningDescriptor);
            }
            else {
                // we don't want to attempt to scan if the user explicitly specified the line_breaks option.
                if (Object(utils["w" /* has */])(tokType, "LINE_BREAKS")) {
                    if (tokType.LINE_BREAKS === true) {
                        hasAnyLineBreak = true;
                    }
                }
                else {
                    if (canMatchCharCode(terminatorCharCodes, tokType.PATTERN)) {
                        hasAnyLineBreak = true;
                    }
                }
            }
        });
    }
    if (trackLines && !hasAnyLineBreak) {
        warnings.push({
            message: "Warning: No LINE_BREAKS Found.\n" +
                "\tThis Lexer has been defined to track line and column information,\n" +
                "\tBut none of the Token Types can be identified as matching a line terminator.\n" +
                "\tSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n" +
                "\tfor details.",
            type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
        });
    }
    return warnings;
}
function cloneEmptyGroups(emptyGroups) {
    let clonedResult = {};
    let groupKeys = Object(utils["G" /* keys */])(emptyGroups);
    Object(utils["u" /* forEach */])(groupKeys, currKey => {
        let currGroupValue = emptyGroups[currKey];
        /* istanbul ignore else */
        if (Object(utils["y" /* isArray */])(currGroupValue)) {
            clonedResult[currKey] = [];
        }
        else {
            throw Error("non exhaustive match");
        }
    });
    return clonedResult;
}
// TODO: refactor to avoid duplication
function isCustomPattern(tokenType) {
    let pattern = tokenType.PATTERN;
    /* istanbul ignore else */
    if (Object(utils["D" /* isRegExp */])(pattern)) {
        return false;
    }
    else if (Object(utils["B" /* isFunction */])(pattern)) {
        // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
        return true;
    }
    else if (Object(utils["w" /* has */])(pattern, "exec")) {
        // ICustomPattern
        return true;
    }
    else if (Object(utils["E" /* isString */])(pattern)) {
        return false;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function isShortPattern(pattern) {
    if (Object(utils["E" /* isString */])(pattern) && pattern.length === 1) {
        return pattern.charCodeAt(0);
    }
    else {
        return false;
    }
}
/**
 * Faster than using a RegExp for default newline detection during lexing.
 */
const LineTerminatorOptimizedTester = {
    // implements /\n|\r\n?/g.test
    test: function (text) {
        let len = text.length;
        for (let i = this.lastIndex; i < len; i++) {
            let c = text.charCodeAt(i);
            if (c === 10) {
                this.lastIndex = i + 1;
                return true;
            }
            else if (c === 13) {
                if (text.charCodeAt(i + 1) === 10) {
                    this.lastIndex = i + 2;
                }
                else {
                    this.lastIndex = i + 1;
                }
                return true;
            }
        }
        return false;
    },
    lastIndex: 0
};
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
    if (Object(utils["w" /* has */])(tokType, "LINE_BREAKS")) {
        // if the user explicitly declared the line_breaks option we will respect their choice
        // and assume it is correct.
        return false;
    }
    else {
        /* istanbul ignore else */
        if (Object(utils["D" /* isRegExp */])(tokType.PATTERN)) {
            try {
                canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
            }
            catch (e) {
                /* istanbul ignore next - to test this we would have to mock <canMatchCharCode> to throw an error */
                return {
                    issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
                    errMsg: e.message
                };
            }
            return false;
        }
        else if (Object(utils["E" /* isString */])(tokType.PATTERN)) {
            // string literal patterns can always be analyzed to detect line terminator usage
            return false;
        }
        else if (isCustomPattern(tokType)) {
            // custom token types
            return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
        }
        else {
            throw Error("non exhaustive match");
        }
    }
}
function buildLineBreakIssueMessage(tokType, details) {
    /* istanbul ignore else */
    if (details.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {
        return ("Warning: unable to identify line terminator usage in pattern.\n" +
            `\tThe problem is in the <${tokType.name}> Token Type\n` +
            `\t Root cause: ${details.errMsg}.\n` +
            "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR");
    }
    else if (details.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {
        return ("Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" +
            `\tThe problem is in the <${tokType.name}> Token Type\n` +
            "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK");
    }
    else {
        throw Error("non exhaustive match");
    }
}
function getCharCodes(charsOrCodes) {
    const charCodes = Object(utils["I" /* map */])(charsOrCodes, numOrString => {
        if (Object(utils["E" /* isString */])(numOrString) && numOrString.length > 0) {
            return numOrString.charCodeAt(0);
        }
        else {
            return numOrString;
        }
    });
    return charCodes;
}
//# sourceMappingURL=lexer.js.map
// CONCATENATED MODULE: ./es6/src/scan/tokens.js



function tokenStructuredMatcher(tokInstance, tokConstructor) {
    const instanceType = tokInstance.tokenTypeIdx;
    if (instanceType === tokConstructor.tokenTypeIdx) {
        return true;
    }
    else {
        return (tokConstructor.isParent === true &&
            tokConstructor.categoryMatchesMap[instanceType] === true);
    }
}
// Optimized tokenMatcher in case our grammar does not use token categories
// Being so tiny it is much more likely to be in-lined and this avoid the function call overhead
function tokenStructuredMatcherNoCategories(token, tokType) {
    return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
let tokenShortNameIdx = 1;
const tokenIdxToClass = new lang_extensions_HashTable();
function augmentTokenTypes(tokenTypes) {
    // collect the parent Token Types as well.
    let tokenTypesAndParents = expandCategories(tokenTypes);
    // add required tokenType and categoryMatches properties
    assignTokenDefaultProps(tokenTypesAndParents);
    // fill up the categoryMatches
    assignCategoriesMapProp(tokenTypesAndParents);
    assignCategoriesTokensProp(tokenTypesAndParents);
    Object(utils["u" /* forEach */])(tokenTypesAndParents, tokType => {
        tokType.isParent = tokType.categoryMatches.length > 0;
    });
}
function expandCategories(tokenTypes) {
    let result = Object(utils["g" /* cloneArr */])(tokenTypes);
    let categories = tokenTypes;
    let searching = true;
    while (searching) {
        categories = Object(utils["i" /* compact */])(Object(utils["t" /* flatten */])(Object(utils["I" /* map */])(categories, currTokType => currTokType.CATEGORIES)));
        let newCategories = Object(utils["l" /* difference */])(categories, result);
        result = result.concat(newCategories);
        if (Object(utils["A" /* isEmpty */])(newCategories)) {
            searching = false;
        }
        else {
            categories = newCategories;
        }
    }
    return result;
}
function assignTokenDefaultProps(tokenTypes) {
    Object(utils["u" /* forEach */])(tokenTypes, currTokType => {
        if (!hasShortKeyProperty(currTokType)) {
            tokenIdxToClass.put(tokenShortNameIdx, currTokType);
            currTokType.tokenTypeIdx = tokenShortNameIdx++;
        }
        // CATEGORIES? : TokenType | TokenType[]
        if (hasCategoriesProperty(currTokType) &&
            !Object(utils["y" /* isArray */])(currTokType.CATEGORIES)
        // &&
        // !isUndefined(currTokType.CATEGORIES.PATTERN)
        ) {
            currTokType.CATEGORIES = [currTokType.CATEGORIES];
        }
        if (!hasCategoriesProperty(currTokType)) {
            currTokType.CATEGORIES = [];
        }
        if (!hasExtendingTokensTypesProperty(currTokType)) {
            currTokType.categoryMatches = [];
        }
        if (!hasExtendingTokensTypesMapProperty(currTokType)) {
            currTokType.categoryMatchesMap = {};
        }
        if (!hasTokenNameProperty(currTokType)) {
            // saved for fast access during CST building.
            currTokType.tokenName = tokens_public_tokenName(currTokType);
        }
    });
}
function assignCategoriesTokensProp(tokenTypes) {
    Object(utils["u" /* forEach */])(tokenTypes, currTokType => {
        // avoid duplications
        currTokType.categoryMatches = [];
        Object(utils["u" /* forEach */])(currTokType.categoryMatchesMap, (val, key) => {
            currTokType.categoryMatches.push(tokenIdxToClass.get(key).tokenTypeIdx);
        });
    });
}
function assignCategoriesMapProp(tokenTypes) {
    Object(utils["u" /* forEach */])(tokenTypes, currTokType => {
        singleAssignCategoriesToksMap([], currTokType);
    });
}
function singleAssignCategoriesToksMap(path, nextNode) {
    Object(utils["u" /* forEach */])(path, pathNode => {
        nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
    });
    Object(utils["u" /* forEach */])(nextNode.CATEGORIES, nextCategory => {
        const newPath = path.concat(nextNode);
        // avoids infinite loops due to cyclic categories.
        if (!Object(utils["j" /* contains */])(newPath, nextCategory)) {
            singleAssignCategoriesToksMap(newPath, nextCategory);
        }
    });
}
function hasShortKeyProperty(tokType) {
    return Object(utils["w" /* has */])(tokType, "tokenTypeIdx");
}
function hasCategoriesProperty(tokType) {
    return Object(utils["w" /* has */])(tokType, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(tokType) {
    return Object(utils["w" /* has */])(tokType, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(tokType) {
    return Object(utils["w" /* has */])(tokType, "categoryMatchesMap");
}
function hasTokenNameProperty(tokType) {
    return Object(utils["w" /* has */])(tokType, "tokenName");
}
function isTokenType(tokType) {
    return Object(utils["w" /* has */])(tokType, "tokenTypeIdx");
}
//# sourceMappingURL=tokens.js.map
// CONCATENATED MODULE: ./es6/src/scan/lexer_errors_public.js
const defaultLexerErrorProvider = {
    buildUnableToPopLexerModeMessage(token) {
        return `Unable to pop Lexer Mode after encountering Token ->${token.image}<- The Mode Stack is empty`;
    },
    buildUnexpectedCharactersMessage(fullText, startOffset, length, line, column) {
        return (`unexpected character: ->${fullText.charAt(startOffset)}<- at offset: ${startOffset},` + ` skipped ${length} characters.`);
    }
};
//# sourceMappingURL=lexer_errors_public.js.map
// CONCATENATED MODULE: ./es6/src/scan/lexer_public.js




var LexerDefinitionErrorType;
(function (LexerDefinitionErrorType) {
    LexerDefinitionErrorType[LexerDefinitionErrorType["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
    LexerDefinitionErrorType[LexerDefinitionErrorType["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
    LexerDefinitionErrorType[LexerDefinitionErrorType["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
})(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
const DEFAULT_LEXER_CONFIG = {
    deferDefinitionErrorsHandling: false,
    positionTracking: "full",
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: ["\n", "\r"],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: defaultLexerErrorProvider
};
Object.freeze(DEFAULT_LEXER_CONFIG);
class lexer_public_Lexer {
    constructor(lexerDefinition, config = DEFAULT_LEXER_CONFIG) {
        this.lexerDefinition = lexerDefinition;
        this.lexerDefinitionErrors = [];
        this.lexerDefinitionWarning = [];
        this.patternIdxToConfig = {};
        this.charCodeToPatternIdxToConfig = {};
        this.modes = [];
        this.emptyGroups = {};
        this.config = undefined;
        this.trackStartLines = true;
        this.trackEndLines = true;
        this.hasCustom = false;
        this.canModeBeOptimized = {};
        if (typeof config === "boolean") {
            throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\n" +
                "a boolean 2nd argument is no longer supported");
        }
        // todo: defaults func?
        this.config = Object(utils["K" /* merge */])(DEFAULT_LEXER_CONFIG, config);
        if (this.config.lineTerminatorsPattern ===
            DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
            // optimized built-in implementation for the defaults definition of lineTerminators
            this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
        }
        else {
            if (this.config.lineTerminatorCharacters ===
                DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
                throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n" +
                    "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
            }
        }
        if (config.safeMode && config.ensureOptimizations) {
            throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        }
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);
        this.trackEndLines = /full/i.test(this.config.positionTracking);
        let hasOnlySingleMode = true;
        let actualDefinition;
        // Convert SingleModeLexerDefinition into a IMultiModeLexerDefinition.
        if (Object(utils["y" /* isArray */])(lexerDefinition)) {
            actualDefinition = { modes: {} };
            actualDefinition.modes[DEFAULT_MODE] = Object(utils["g" /* cloneArr */])((lexerDefinition));
            actualDefinition[DEFAULT_MODE] = DEFAULT_MODE;
        }
        else {
            // no conversion needed, input should already be a IMultiModeLexerDefinition
            hasOnlySingleMode = false;
            actualDefinition = Object(utils["h" /* cloneObj */])((lexerDefinition));
        }
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(performRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
        // for extra robustness to avoid throwing an none informative error message
        actualDefinition.modes = actualDefinition.modes
            ? actualDefinition.modes
            : {};
        // an error of undefined TokenTypes will be detected in "performRuntimeChecks" above.
        // this transformation is to increase robustness in the case of partially invalid lexer definition.
        Object(utils["u" /* forEach */])(actualDefinition.modes, (currModeValue, currModeName) => {
            actualDefinition.modes[currModeName] = Object(utils["P" /* reject */])(currModeValue, currTokType => Object(utils["F" /* isUndefined */])(currTokType));
        });
        let allModeNames = Object(utils["G" /* keys */])(actualDefinition.modes);
        Object(utils["u" /* forEach */])(actualDefinition.modes, (currModDef, currModName) => {
            this.modes.push(currModName);
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(validatePatterns(currModDef, allModeNames));
            // If definition errors were encountered, the analysis phase may fail unexpectedly/
            // Considering a lexer with definition errors may never be used, there is no point
            // to performing the analysis anyhow...
            if (Object(utils["A" /* isEmpty */])(this.lexerDefinitionErrors)) {
                augmentTokenTypes(currModDef);
                let currAnalyzeResult = analyzeTokenTypes(currModDef, {
                    lineTerminatorCharacters: this.config
                        .lineTerminatorCharacters,
                    positionTracking: config.positionTracking,
                    ensureOptimizations: config.ensureOptimizations,
                    safeMode: config.safeMode
                });
                this.patternIdxToConfig[currModName] =
                    currAnalyzeResult.patternIdxToConfig;
                this.charCodeToPatternIdxToConfig[currModName] =
                    currAnalyzeResult.charCodeToPatternIdxToConfig;
                this.emptyGroups = Object(utils["K" /* merge */])(this.emptyGroups, currAnalyzeResult.emptyGroups);
                this.hasCustom =
                    currAnalyzeResult.hasCustom || this.hasCustom;
                this.canModeBeOptimized[currModName] =
                    currAnalyzeResult.canBeOptimized;
            }
        });
        this.defaultMode = actualDefinition.defaultMode;
        if (!Object(utils["A" /* isEmpty */])(this.lexerDefinitionErrors) &&
            !this.config.deferDefinitionErrorsHandling) {
            let allErrMessages = Object(utils["I" /* map */])(this.lexerDefinitionErrors, error => {
                return error.message;
            });
            let allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Errors detected in definition of Lexer:\n" +
                allErrMessagesString);
        }
        // Only print warning if there are no errors, This will avoid pl
        Object(utils["u" /* forEach */])(this.lexerDefinitionWarning, warningDescriptor => {
            Object(utils["d" /* PRINT_WARNING */])(warningDescriptor.message);
        });
        // Choose the relevant internal implementations for this specific parser.
        // These implementations should be in-lined by the JavaScript engine
        // to provide optimal performance in each scenario.
        if (SUPPORT_STICKY) {
            this.chopInput = utils["a" /* IDENTITY */];
            this.match = this.matchWithTest;
        }
        else {
            this.updateLastIndex = utils["b" /* NOOP */];
            this.match = this.matchWithExec;
        }
        if (hasOnlySingleMode) {
            this.handleModes = utils["b" /* NOOP */];
        }
        if (this.trackStartLines === false) {
            this.computeNewColumn = utils["a" /* IDENTITY */];
        }
        if (this.trackEndLines === false) {
            this.updateTokenEndLineColumnLocation = utils["b" /* NOOP */];
        }
        if (/full/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createFullToken;
        }
        else if (/onlyStart/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createStartOnlyToken;
        }
        else if (/onlyOffset/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createOffsetOnlyToken;
        }
        else {
            throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        }
        if (this.hasCustom) {
            this.addToken = this.addTokenUsingPush;
            this.handlePayload = this.handlePayloadWithCustom;
        }
        else {
            this.addToken = this.addTokenUsingMemberAccess;
            this.handlePayload = this.handlePayloadNoCustom;
        }
        const unOptimizedModes = Object(utils["O" /* reduce */])(this.canModeBeOptimized, (cannotBeOptimized, canBeOptimized, modeName) => {
            if (canBeOptimized === false) {
                cannotBeOptimized.push(modeName);
            }
            return cannotBeOptimized;
        }, []);
        if (config.ensureOptimizations && !Object(utils["A" /* isEmpty */])(unOptimizedModes)) {
            throw Error(`Lexer Modes: < ${unOptimizedModes.join(", ")} > cannot be optimized.\n` +
                '\t Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n' +
                "\t Or inspect the console log for details on how to resolve these issues.");
        }
        Object(utils["S" /* toFastProperties */])(this);
    }
    tokenize(text, initialMode = this.defaultMode) {
        if (!Object(utils["A" /* isEmpty */])(this.lexerDefinitionErrors)) {
            let allErrMessages = Object(utils["I" /* map */])(this.lexerDefinitionErrors, error => {
                return error.message;
            });
            let allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" +
                allErrMessagesString);
        }
        let lexResult = this.tokenizeInternal(text, initialMode);
        return lexResult;
    }
    // There is quite a bit of duplication between this and "tokenizeInternalLazy"
    // This is intentional due to performance considerations.
    tokenizeInternal(text, initialMode) {
        let i, j, matchAltImage, longerAltIdx, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match;
        let orgText = text;
        let orgLength = orgText.length;
        let offset = 0;
        let matchedTokensIndex = 0;
        // initializing the tokensArray to the "guessed" size.
        // guessing too little will still reduce the number of array re-sizes on pushes.
        // guessing too large (Tested by guessing x4 too large) may cost a bit more of memory
        // but would still have a faster runtime by avoiding (All but one) array resizing.
        let guessedNumberOfTokens = this.hasCustom
            ? 0 // will break custom token pattern APIs the matchedTokens array will contain undefined elements.
            : Math.floor(text.length / 10);
        let matchedTokens = new Array(guessedNumberOfTokens);
        let errors = [];
        let line = this.trackStartLines ? 1 : undefined;
        let column = this.trackStartLines ? 1 : undefined;
        let groups = cloneEmptyGroups(this.emptyGroups);
        let trackLines = this.trackStartLines;
        const lineTerminatorPattern = this.config.lineTerminatorsPattern;
        let currModePatternsLength = 0;
        let patternIdxToConfig = [];
        let currCharCodeToPatternIdxToConfig = [];
        let modeStack = [];
        const emptyArray = [];
        Object.freeze(emptyArray);
        let getPossiblePatterns = undefined;
        let pop_mode = popToken => {
            // TODO: perhaps avoid this error in the edge case there is no more input?
            if (modeStack.length === 1 &&
                // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
                // So no error should occur.
                popToken.tokenType.PUSH_MODE === undefined) {
                // if we try to pop the last mode there lexer will no longer have ANY mode.
                // thus the pop is ignored, an error will be created and the lexer will continue parsing in the previous mode.
                let msg = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
                errors.push({
                    offset: popToken.startOffset,
                    line: popToken.startLine !== undefined
                        ? popToken.startLine
                        : undefined,
                    column: popToken.startColumn !== undefined
                        ? popToken.startColumn
                        : undefined,
                    length: popToken.image.length,
                    message: msg
                });
            }
            else {
                modeStack.pop();
                let newMode = Object(utils["H" /* last */])(modeStack);
                patternIdxToConfig = this.patternIdxToConfig[newMode];
                currCharCodeToPatternIdxToConfig = this
                    .charCodeToPatternIdxToConfig[newMode];
                currModePatternsLength = patternIdxToConfig.length;
                const modeCanBeOptimized = this.canModeBeOptimized[newMode] &&
                    this.config.safeMode === false;
                if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                    getPossiblePatterns = function (charCode) {
                        const possiblePatterns = currCharCodeToPatternIdxToConfig[charCode];
                        if (possiblePatterns === undefined) {
                            return emptyArray;
                        }
                        else {
                            return possiblePatterns;
                        }
                    };
                }
                else {
                    getPossiblePatterns = function () {
                        return patternIdxToConfig;
                    };
                }
            }
        };
        function push_mode(newMode) {
            modeStack.push(newMode);
            currCharCodeToPatternIdxToConfig = this
                .charCodeToPatternIdxToConfig[newMode];
            patternIdxToConfig = this.patternIdxToConfig[newMode];
            currModePatternsLength = patternIdxToConfig.length;
            currModePatternsLength = patternIdxToConfig.length;
            const modeCanBeOptimized = this.canModeBeOptimized[newMode] &&
                this.config.safeMode === false;
            if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                getPossiblePatterns = function (charCode) {
                    const possiblePatterns = currCharCodeToPatternIdxToConfig[charCode];
                    if (possiblePatterns === undefined) {
                        return emptyArray;
                    }
                    else {
                        return possiblePatterns;
                    }
                };
            }
            else {
                getPossiblePatterns = function () {
                    return patternIdxToConfig;
                };
            }
        }
        // this pattern seems to avoid a V8 de-optimization, although that de-optimization does not
        // seem to matter performance wise.
        push_mode.call(this, initialMode);
        let currConfig;
        while (offset < orgLength) {
            matchedImage = null;
            let nextCharCode = orgText.charCodeAt(offset);
            const chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
            let chosenPatternsLength = chosenPatternIdxToConfig.length;
            for (i = 0; i < chosenPatternsLength; i++) {
                currConfig = chosenPatternIdxToConfig[i];
                let currPattern = currConfig.pattern;
                payload = null;
                // manually in-lined because > 600 chars won't be in-lined in V8
                let singleCharCode = currConfig.short;
                if (singleCharCode !== false) {
                    if (nextCharCode === singleCharCode) {
                        // single character string
                        matchedImage = currPattern;
                    }
                }
                else if (currConfig.isCustom === true) {
                    match = currPattern.exec(orgText, offset, matchedTokens, groups);
                    if (match !== null) {
                        matchedImage = match[0];
                        if (match.payload !== undefined) {
                            payload = match.payload;
                        }
                    }
                    else {
                        matchedImage = null;
                    }
                }
                else {
                    this.updateLastIndex(currPattern, offset);
                    matchedImage = this.match(currPattern, text, offset);
                }
                if (matchedImage !== null) {
                    // even though this pattern matched we must try a another longer alternative.
                    // this can be used to prioritize keywords over identifiers
                    longerAltIdx = currConfig.longerAlt;
                    if (longerAltIdx !== undefined) {
                        // TODO: micro optimize, avoid extra prop access
                        // by saving/linking longerAlt on the original config?
                        let longerAltConfig = patternIdxToConfig[longerAltIdx];
                        let longerAltPattern = longerAltConfig.pattern;
                        altPayload = null;
                        // single Char can never be a longer alt so no need to test it.
                        // manually in-lined because > 600 chars won't be in-lined in V8
                        if (longerAltConfig.isCustom === true) {
                            match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                            if (match !== null) {
                                matchAltImage = match[0];
                                if (match.payload !== undefined) {
                                    altPayload = match.payload;
                                }
                            }
                            else {
                                matchAltImage = null;
                            }
                        }
                        else {
                            this.updateLastIndex(longerAltPattern, offset);
                            matchAltImage = this.match(longerAltPattern, text, offset);
                        }
                        if (matchAltImage &&
                            matchAltImage.length > matchedImage.length) {
                            matchedImage = matchAltImage;
                            payload = altPayload;
                            currConfig = longerAltConfig;
                        }
                    }
                    break;
                }
            }
            // successful match
            if (matchedImage !== null) {
                imageLength = matchedImage.length;
                group = currConfig.group;
                if (group !== undefined) {
                    tokType = currConfig.tokenTypeIdx;
                    // TODO: "offset + imageLength" and the new column may be computed twice in case of "full" location information inside
                    // createFullToken method
                    newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
                    this.handlePayload(newToken, payload);
                    // TODO: optimize NOOP in case there are no special groups?
                    if (group === false) {
                        matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
                    }
                    else {
                        groups[group].push(newToken);
                    }
                }
                text = this.chopInput(text, imageLength);
                offset = offset + imageLength;
                // TODO: with newlines the column may be assigned twice
                column = this.computeNewColumn(column, imageLength);
                if (trackLines === true &&
                    currConfig.canLineTerminator === true) {
                    let numOfLTsInMatch = 0;
                    let foundTerminator;
                    let lastLTEndOffset;
                    lineTerminatorPattern.lastIndex = 0;
                    do {
                        foundTerminator = lineTerminatorPattern.test(matchedImage);
                        if (foundTerminator === true) {
                            lastLTEndOffset =
                                lineTerminatorPattern.lastIndex - 1;
                            numOfLTsInMatch++;
                        }
                    } while (foundTerminator === true);
                    if (numOfLTsInMatch !== 0) {
                        line = line + numOfLTsInMatch;
                        column = imageLength - lastLTEndOffset;
                        this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
                    }
                }
                // will be NOOP if no modes present
                this.handleModes(currConfig, pop_mode, push_mode, newToken);
            }
            else {
                // error recovery, drop characters until we identify a valid token's start point
                let errorStartOffset = offset;
                let errorLine = line;
                let errorColumn = column;
                let foundResyncPoint = false;
                while (!foundResyncPoint && offset < orgLength) {
                    // drop chars until we succeed in matching something
                    droppedChar = orgText.charCodeAt(offset);
                    // Identity Func (when sticky flag is enabled)
                    text = this.chopInput(text, 1);
                    offset++;
                    for (j = 0; j < currModePatternsLength; j++) {
                        let currConfig = patternIdxToConfig[j];
                        let currPattern = currConfig.pattern;
                        // manually in-lined because > 600 chars won't be in-lined in V8
                        let singleCharCode = currConfig.short;
                        if (singleCharCode !== false) {
                            if (orgText.charCodeAt(offset) === singleCharCode) {
                                // single character string
                                foundResyncPoint = true;
                            }
                        }
                        else if (currConfig.isCustom === true) {
                            foundResyncPoint =
                                currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
                        }
                        else {
                            this.updateLastIndex(currPattern, offset);
                            foundResyncPoint = currPattern.exec(text) !== null;
                        }
                        if (foundResyncPoint === true) {
                            break;
                        }
                    }
                }
                errLength = offset - errorStartOffset;
                // at this point we either re-synced or reached the end of the input text
                msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);
                errors.push({
                    offset: errorStartOffset,
                    line: errorLine,
                    column: errorColumn,
                    length: errLength,
                    message: msg
                });
            }
        }
        // if we do have custom patterns which push directly into the
        // TODO: custom tokens should not push directly??
        if (!this.hasCustom) {
            // if we guessed a too large size for the tokens array this will shrink it to the right size.
            matchedTokens.length = matchedTokensIndex;
        }
        return {
            tokens: matchedTokens,
            groups: groups,
            errors: errors
        };
    }
    handleModes(config, pop_mode, push_mode, newToken) {
        if (config.pop === true) {
            // need to save the PUSH_MODE property as if the mode is popped
            // patternIdxToPopMode is updated to reflect the new mode after popping the stack
            let pushMode = config.push;
            pop_mode(newToken);
            if (pushMode !== undefined) {
                push_mode.call(this, pushMode);
            }
        }
        else if (config.push !== undefined) {
            push_mode.call(this, config.push);
        }
    }
    chopInput(text, length) {
        return text.substring(length);
    }
    updateLastIndex(regExp, newLastIndex) {
        regExp.lastIndex = newLastIndex;
    }
    // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
    updateTokenEndLineColumnLocation(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
        let lastCharIsLT, fixForEndingInLT;
        if (group !== undefined) {
            // a none skipped multi line Token, need to update endLine/endColumn
            lastCharIsLT = lastLTIdx === imageLength - 1;
            fixForEndingInLT = lastCharIsLT ? -1 : 0;
            if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
                // if a token ends in a LT that last LT only affects the line numbering of following Tokens
                newToken.endLine = line + fixForEndingInLT;
                // the last LT in a token does not affect the endColumn either as the [columnStart ... columnEnd)
                // inclusive to exclusive range.
                newToken.endColumn = column - 1 + -fixForEndingInLT;
            }
            // else single LT in the last character of a token, no need to modify the endLine/EndColumn
        }
    }
    computeNewColumn(oldColumn, imageLength) {
        return oldColumn + imageLength;
    }
    // Place holder, will be replaced by the correct variant according to the locationTracking option at runtime.
    /* istanbul ignore next - place holder */
    createTokenInstance(...args) {
        return null;
    }
    createOffsetOnlyToken(image, startOffset, tokenTypeIdx, tokenType) {
        return {
            image,
            startOffset,
            tokenTypeIdx,
            tokenType
        };
    }
    createStartOnlyToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
        return {
            image,
            startOffset,
            startLine,
            startColumn,
            tokenTypeIdx,
            tokenType
        };
    }
    createFullToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
        return {
            image,
            startOffset,
            endOffset: startOffset + imageLength - 1,
            startLine,
            endLine: startLine,
            startColumn,
            endColumn: startColumn + imageLength - 1,
            tokenTypeIdx,
            tokenType
        };
    }
    // Place holder, will be replaced by the correct variant according to the locationTracking option at runtime.
    /* istanbul ignore next - place holder */
    addToken(tokenVector, index, tokenToAdd) {
        return 666;
    }
    addTokenUsingPush(tokenVector, index, tokenToAdd) {
        tokenVector.push(tokenToAdd);
        return index;
    }
    addTokenUsingMemberAccess(tokenVector, index, tokenToAdd) {
        tokenVector[index] = tokenToAdd;
        index++;
        return index;
    }
    // Place holder, will be replaced by the correct variant according to the hasCustom flag option at runtime.
    /* istanbul ignore next - place holder */
    handlePayload(token, payload) { }
    handlePayloadNoCustom(token, payload) { }
    handlePayloadWithCustom(token, payload) {
        if (payload !== null) {
            token.payload = payload;
        }
    }
    /* istanbul ignore next - place holder to be replaced with chosen alternative at runtime */
    match(pattern, text, offset) {
        return null;
    }
    matchWithTest(pattern, text, offset) {
        let found = pattern.test(text);
        if (found === true) {
            return text.substring(offset, pattern.lastIndex);
        }
        return null;
    }
    matchWithExec(pattern, text) {
        let regExpArray = pattern.exec(text);
        return regExpArray !== null ? regExpArray[0] : regExpArray;
    }
}
lexer_public_Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will" +
    "be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
lexer_public_Lexer.NA = /NOT_APPLICABLE/;
//# sourceMappingURL=lexer_public.js.map
// CONCATENATED MODULE: ./es6/src/scan/tokens_public.js




function tokenLabel(clazz) {
    if (hasTokenLabel(clazz)) {
        return clazz.LABEL;
    }
    else {
        return tokens_public_tokenName(clazz);
    }
}
function hasTokenLabel(obj) {
    return Object(utils["E" /* isString */])(obj.LABEL) && obj.LABEL !== "";
}
function tokens_public_tokenName(obj) {
    // The tokenName property is needed under some old versions of node.js (0.10/0.12)
    // where the Function.prototype.name property is not defined as a 'configurable' property
    // enable producing readable error messages.
    /* istanbul ignore if -> will only run in old versions of node.js */
    if (Object(utils["C" /* isObject */])(obj) &&
        obj.hasOwnProperty("tokenName") &&
        Object(utils["E" /* isString */])(obj.tokenName)) {
        return obj.tokenName;
    }
    else {
        return functionName(obj);
    }
}
const PARENT = "parent";
const CATEGORIES = "categories";
const LABEL = "label";
const GROUP = "group";
const PUSH_MODE = "push_mode";
const POP_MODE = "pop_mode";
const LONGER_ALT = "longer_alt";
const LINE_BREAKS = "line_breaks";
const START_CHARS_HINT = "start_chars_hint";
function createToken(config) {
    return createTokenInternal(config);
}
function createTokenInternal(config) {
    let tokenName = config.name;
    let pattern = config.pattern;
    let tokenType = {};
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    /* istanbul ignore if -> will only run in old versions of node.js */
    if (!defineNameProp(tokenType, tokenName)) {
        // hack to save the tokenName in situations where the constructor's name property cannot be reconfigured
        tokenType.tokenName = tokenName;
    }
    if (!Object(utils["F" /* isUndefined */])(pattern)) {
        tokenType.PATTERN = pattern;
    }
    if (Object(utils["w" /* has */])(config, PARENT)) {
        throw "The parent property is no longer supported.\n" +
            "See: https://github.com/SAP/chevrotain/issues/564#issuecomment-349062346 for details.";
    }
    if (Object(utils["w" /* has */])(config, CATEGORIES)) {
        tokenType.CATEGORIES = config[CATEGORIES];
    }
    augmentTokenTypes([tokenType]);
    if (Object(utils["w" /* has */])(config, LABEL)) {
        tokenType.LABEL = config[LABEL];
    }
    if (Object(utils["w" /* has */])(config, GROUP)) {
        tokenType.GROUP = config[GROUP];
    }
    if (Object(utils["w" /* has */])(config, POP_MODE)) {
        tokenType.POP_MODE = config[POP_MODE];
    }
    if (Object(utils["w" /* has */])(config, PUSH_MODE)) {
        tokenType.PUSH_MODE = config[PUSH_MODE];
    }
    if (Object(utils["w" /* has */])(config, LONGER_ALT)) {
        tokenType.LONGER_ALT = config[LONGER_ALT];
    }
    if (Object(utils["w" /* has */])(config, LINE_BREAKS)) {
        tokenType.LINE_BREAKS = config[LINE_BREAKS];
    }
    if (Object(utils["w" /* has */])(config, START_CHARS_HINT)) {
        tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
    }
    return tokenType;
}
const EOF = createToken({ name: "EOF", pattern: lexer_public_Lexer.NA });
augmentTokenTypes([EOF]);
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
    return {
        image,
        startOffset,
        endOffset,
        startLine,
        endLine,
        startColumn,
        endColumn,
        tokenTypeIdx: tokType.tokenTypeIdx,
        tokenType: tokType
    };
}
function tokens_public_tokenMatcher(token, tokType) {
    return tokenStructuredMatcher(token, tokType);
}
//# sourceMappingURL=tokens_public.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/gast/gast_public.js


class gast_public_AbstractProduction {
    constructor(definition) {
        this.definition = definition;
    }
    accept(visitor) {
        visitor.visit(this);
        Object(utils["u" /* forEach */])(this.definition, prod => {
            prod.accept(visitor);
        });
    }
}
class gast_public_NonTerminal extends gast_public_AbstractProduction {
    constructor(options) {
        super([]);
        this.idx = 1;
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
    set definition(definition) {
        // immutable
    }
    get definition() {
        if (this.referencedRule !== undefined) {
            return this.referencedRule.definition;
        }
        return [];
    }
    accept(visitor) {
        visitor.visit(this);
        // don't visit children of a reference, we will get cyclic infinite loops if we do so
    }
}
class gast_public_Rule extends gast_public_AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.orgText = "";
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
}
class gast_public_Flat extends gast_public_AbstractProduction {
    // A named Flat production is used to indicate a Nested Rule in an alternation
    constructor(options) {
        super(options.definition);
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
}
class gast_public_Option extends gast_public_AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
}
class gast_public_RepetitionMandatory extends gast_public_AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
}
class gast_public_RepetitionMandatoryWithSeparator extends gast_public_AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
}
class gast_public_Repetition extends gast_public_AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
}
class gast_public_RepetitionWithSeparator extends gast_public_AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
}
class gast_public_Alternation extends gast_public_AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
}
class gast_public_Terminal {
    constructor(options) {
        this.idx = 1;
        Object(utils["f" /* assign */])(this, Object(utils["N" /* pick */])(options, v => v !== undefined));
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
function serializeGrammar(topRules) {
    return Object(utils["I" /* map */])(topRules, serializeProduction);
}
function serializeProduction(node) {
    function convertDefinition(definition) {
        return Object(utils["I" /* map */])(definition, serializeProduction);
    }
    /* istanbul ignore else */
    if (node instanceof gast_public_NonTerminal) {
        return {
            type: "NonTerminal",
            name: node.nonTerminalName,
            idx: node.idx
        };
    }
    else if (node instanceof gast_public_Flat) {
        return {
            type: "Flat",
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof gast_public_Option) {
        return {
            type: "Option",
            idx: node.idx,
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof gast_public_RepetitionMandatory) {
        return {
            type: "RepetitionMandatory",
            name: node.name,
            idx: node.idx,
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof gast_public_RepetitionMandatoryWithSeparator) {
        return {
            type: "RepetitionMandatoryWithSeparator",
            name: node.name,
            idx: node.idx,
            separator: (serializeProduction(new gast_public_Terminal({ terminalType: node.separator }))),
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof gast_public_RepetitionWithSeparator) {
        return {
            type: "RepetitionWithSeparator",
            name: node.name,
            idx: node.idx,
            separator: (serializeProduction(new gast_public_Terminal({ terminalType: node.separator }))),
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof gast_public_Repetition) {
        return {
            type: "Repetition",
            name: node.name,
            idx: node.idx,
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof gast_public_Alternation) {
        return {
            type: "Alternation",
            name: node.name,
            idx: node.idx,
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof gast_public_Terminal) {
        let serializedTerminal = {
            type: "Terminal",
            name: tokens_public_tokenName(node.terminalType),
            label: tokenLabel(node.terminalType),
            idx: node.idx
        };
        let pattern = node.terminalType.PATTERN;
        if (node.terminalType.PATTERN) {
            serializedTerminal.pattern = Object(utils["D" /* isRegExp */])(pattern)
                ? pattern.source
                : pattern;
        }
        return serializedTerminal;
    }
    else if (node instanceof gast_public_Rule) {
        return {
            type: "Rule",
            name: node.name,
            orgText: node.orgText,
            definition: convertDefinition(node.definition)
        };
    }
    else {
        throw Error("non exhaustive match");
    }
}
//# sourceMappingURL=gast_public.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/rest.js


/**
 *  A Grammar Walker that computes the "remaining" grammar "after" a productions in the grammar.
 */
class rest_RestWalker {
    walk(prod, prevRest = []) {
        Object(utils["u" /* forEach */])(prod.definition, (subProd, index) => {
            let currRest = Object(utils["m" /* drop */])(prod.definition, index + 1);
            /* istanbul ignore else */
            if (subProd instanceof gast_public_NonTerminal) {
                this.walkProdRef(subProd, currRest, prevRest);
            }
            else if (subProd instanceof gast_public_Terminal) {
                this.walkTerminal(subProd, currRest, prevRest);
            }
            else if (subProd instanceof gast_public_Flat) {
                this.walkFlat(subProd, currRest, prevRest);
            }
            else if (subProd instanceof gast_public_Option) {
                this.walkOption(subProd, currRest, prevRest);
            }
            else if (subProd instanceof gast_public_RepetitionMandatory) {
                this.walkAtLeastOne(subProd, currRest, prevRest);
            }
            else if (subProd instanceof gast_public_RepetitionMandatoryWithSeparator) {
                this.walkAtLeastOneSep(subProd, currRest, prevRest);
            }
            else if (subProd instanceof gast_public_RepetitionWithSeparator) {
                this.walkManySep(subProd, currRest, prevRest);
            }
            else if (subProd instanceof gast_public_Repetition) {
                this.walkMany(subProd, currRest, prevRest);
            }
            else if (subProd instanceof gast_public_Alternation) {
                this.walkOr(subProd, currRest, prevRest);
            }
            else {
                throw Error("non exhaustive match");
            }
        });
    }
    walkTerminal(terminal, currRest, prevRest) { }
    walkProdRef(refProd, currRest, prevRest) { }
    walkFlat(flatProd, currRest, prevRest) {
        // ABCDEF => after the D the rest is EF
        let fullOrRest = currRest.concat(prevRest);
        this.walk(flatProd, fullOrRest);
    }
    walkOption(optionProd, currRest, prevRest) {
        // ABC(DE)?F => after the (DE)? the rest is F
        let fullOrRest = currRest.concat(prevRest);
        this.walk(optionProd, fullOrRest);
    }
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        // ABC(DE)+F => after the (DE)+ the rest is (DE)?F
        let fullAtLeastOneRest = [
            new gast_public_Option({ definition: atLeastOneProd.definition })
        ].concat(currRest, prevRest);
        this.walk(atLeastOneProd, fullAtLeastOneRest);
    }
    walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
        // ABC DE(,DE)* F => after the (,DE)+ the rest is (,DE)?F
        let fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
        this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
    }
    walkMany(manyProd, currRest, prevRest) {
        // ABC(DE)*F => after the (DE)* the rest is (DE)?F
        let fullManyRest = [
            new gast_public_Option({ definition: manyProd.definition })
        ].concat(currRest, prevRest);
        this.walk(manyProd, fullManyRest);
    }
    walkManySep(manySepProd, currRest, prevRest) {
        // ABC (DE(,DE)*)? F => after the (,DE)* the rest is (,DE)?F
        let fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
        this.walk(manySepProd, fullManySepRest);
    }
    walkOr(orProd, currRest, prevRest) {
        // ABC(D|E|F)G => when finding the (D|E|F) the rest is G
        let fullOrRest = currRest.concat(prevRest);
        // walk all different alternatives
        Object(utils["u" /* forEach */])(orProd.definition, alt => {
            // wrapping each alternative in a single definition wrapper
            // to avoid errors in computing the rest of that alternative in the invocation to computeInProdFollows
            // (otherwise for OR([alt1,alt2]) alt2 will be considered in 'rest' of alt1
            let prodWrapper = new gast_public_Flat({ definition: [alt] });
            this.walk(prodWrapper, fullOrRest);
        });
    }
}
function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
    let repSepRest = [
        new gast_public_Option({
            definition: [
                new gast_public_Terminal({ terminalType: repSepProd.separator })
            ].concat(repSepProd.definition)
        })
    ];
    let fullRepSepRest = repSepRest.concat(currRest, prevRest);
    return fullRepSepRest;
}
//# sourceMappingURL=rest.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/gast/gast_visitor_public.js

class gast_visitor_public_GAstVisitor {
    visit(node) {
        /* istanbul ignore next */
        if (node instanceof gast_public_NonTerminal) {
            return this.visitNonTerminal(node);
        }
        else if (node instanceof gast_public_Flat) {
            return this.visitFlat(node);
        }
        else if (node instanceof gast_public_Option) {
            return this.visitOption(node);
        }
        else if (node instanceof gast_public_RepetitionMandatory) {
            return this.visitRepetitionMandatory(node);
        }
        else if (node instanceof gast_public_RepetitionMandatoryWithSeparator) {
            return this.visitRepetitionMandatoryWithSeparator(node);
        }
        else if (node instanceof gast_public_RepetitionWithSeparator) {
            return this.visitRepetitionWithSeparator(node);
        }
        else if (node instanceof gast_public_Repetition) {
            return this.visitRepetition(node);
        }
        else if (node instanceof gast_public_Alternation) {
            return this.visitAlternation(node);
        }
        else if (node instanceof gast_public_Terminal) {
            return this.visitTerminal(node);
        }
        else if (node instanceof gast_public_Rule) {
            return this.visitRule(node);
        }
        else {
            throw Error("non exhaustive match");
        }
    }
    visitNonTerminal(node) { }
    visitFlat(node) { }
    visitOption(node) { }
    visitRepetition(node) { }
    visitRepetitionMandatory(node) { }
    visitRepetitionMandatoryWithSeparator(node) { }
    visitRepetitionWithSeparator(node) { }
    visitAlternation(node) { }
    visitTerminal(node) { }
    visitRule(node) { }
}
//# sourceMappingURL=gast_visitor_public.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/gast/gast.js




function isSequenceProd(prod) {
    return (prod instanceof gast_public_Flat ||
        prod instanceof gast_public_Option ||
        prod instanceof gast_public_Repetition ||
        prod instanceof gast_public_RepetitionMandatory ||
        prod instanceof gast_public_RepetitionMandatoryWithSeparator ||
        prod instanceof gast_public_RepetitionWithSeparator ||
        prod instanceof gast_public_Terminal ||
        prod instanceof gast_public_Rule);
}
function isOptionalProd(prod, alreadyVisited = []) {
    let isDirectlyOptional = prod instanceof gast_public_Option ||
        prod instanceof gast_public_Repetition ||
        prod instanceof gast_public_RepetitionWithSeparator;
    if (isDirectlyOptional) {
        return true;
    }
    // note that this can cause infinite loop if one optional empty TOP production has a cyclic dependency with another
    // empty optional top rule
    // may be indirectly optional ((A?B?C?) | (D?E?F?))
    if (prod instanceof gast_public_Alternation) {
        // for OR its enough for just one of the alternatives to be optional
        return Object(utils["Q" /* some */])(prod.definition, (subProd) => {
            return isOptionalProd(subProd, alreadyVisited);
        });
    }
    else if (prod instanceof gast_public_NonTerminal && Object(utils["j" /* contains */])(alreadyVisited, prod)) {
        // avoiding stack overflow due to infinite recursion
        return false;
    }
    else if (prod instanceof gast_public_AbstractProduction) {
        if (prod instanceof gast_public_NonTerminal) {
            alreadyVisited.push(prod);
        }
        return Object(utils["o" /* every */])(prod.definition, (subProd) => {
            return isOptionalProd(subProd, alreadyVisited);
        });
    }
    else {
        return false;
    }
}
function isBranchingProd(prod) {
    return prod instanceof gast_public_Alternation;
}
function getProductionDslName(prod) {
    /* istanbul ignore else */
    if (prod instanceof gast_public_NonTerminal) {
        return "SUBRULE";
    }
    else if (prod instanceof gast_public_Option) {
        return "OPTION";
    }
    else if (prod instanceof gast_public_Alternation) {
        return "OR";
    }
    else if (prod instanceof gast_public_RepetitionMandatory) {
        return "AT_LEAST_ONE";
    }
    else if (prod instanceof gast_public_RepetitionMandatoryWithSeparator) {
        return "AT_LEAST_ONE_SEP";
    }
    else if (prod instanceof gast_public_RepetitionWithSeparator) {
        return "MANY_SEP";
    }
    else if (prod instanceof gast_public_Repetition) {
        return "MANY";
    }
    else if (prod instanceof gast_public_Terminal) {
        return "CONSUME";
    }
    else {
        throw Error("non exhaustive match");
    }
}
class gast_DslMethodsCollectorVisitor extends gast_visitor_public_GAstVisitor {
    constructor() {
        super(...arguments);
        // A minus is never valid in an identifier name
        this.separator = "-";
        this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
    }
    visitTerminal(terminal) {
        const key = tokens_public_tokenName(terminal.terminalType) + this.separator + "Terminal";
        if (!Object(utils["w" /* has */])(this.dslMethods, key)) {
            this.dslMethods[key] = [];
        }
        this.dslMethods[key].push(terminal);
    }
    visitNonTerminal(subrule) {
        const key = subrule.nonTerminalName + this.separator + "Terminal";
        if (!Object(utils["w" /* has */])(this.dslMethods, key)) {
            this.dslMethods[key] = [];
        }
        this.dslMethods[key].push(subrule);
    }
    visitOption(option) {
        this.dslMethods.option.push(option);
    }
    visitRepetitionWithSeparator(manySep) {
        this.dslMethods.repetitionWithSeparator.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.dslMethods.repetitionMandatory.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.dslMethods.repetition.push(many);
    }
    visitAlternation(or) {
        this.dslMethods.alternation.push(or);
    }
}
//# sourceMappingURL=gast.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/first.js



function first(prod) {
    /* istanbul ignore else */
    if (prod instanceof gast_public_NonTerminal) {
        // this could in theory cause infinite loops if
        // (1) prod A refs prod B.
        // (2) prod B refs prod A
        // (3) AB can match the empty set
        // in other words a cycle where everything is optional so the first will keep
        // looking ahead for the next optional part and will never exit
        // currently there is no safeguard for this unique edge case because
        // (1) not sure a grammar in which this can happen is useful for anything (productive)
        return first(prod.referencedRule);
    }
    else if (prod instanceof gast_public_Terminal) {
        return firstForTerminal(prod);
    }
    else if (isSequenceProd(prod)) {
        return firstForSequence(prod);
    }
    else if (isBranchingProd(prod)) {
        return firstForBranching(prod);
    }
    else {
        throw Error("non exhaustive match");
    }
}
function firstForSequence(prod) {
    let firstSet = [];
    let seq = prod.definition;
    let nextSubProdIdx = 0;
    let hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    let currSubProd;
    // so we enter the loop at least once (if the definition is not empty
    let isLastInnerProdOptional = true;
    // scan a sequence until it's end or until we have found a NONE optional production in it
    while (hasInnerProdsRemaining && isLastInnerProdOptional) {
        currSubProd = seq[nextSubProdIdx];
        isLastInnerProdOptional = isOptionalProd(currSubProd);
        firstSet = firstSet.concat(first(currSubProd));
        nextSubProdIdx = nextSubProdIdx + 1;
        hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    }
    return Object(utils["T" /* uniq */])(firstSet);
}
function firstForBranching(prod) {
    let allAlternativesFirsts = Object(utils["I" /* map */])(prod.definition, innerProd => {
        return first(innerProd);
    });
    return Object(utils["T" /* uniq */])(Object(utils["t" /* flatten */])(allAlternativesFirsts));
}
function firstForTerminal(terminal) {
    return [terminal.terminalType];
}
//# sourceMappingURL=first.js.map
// CONCATENATED MODULE: ./es6/src/parse/constants.js
// TODO: can this be removed? where is it used?
let IN = "_~IN~_";
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/follow.js







// This ResyncFollowsWalker computes all of the follows required for RESYNC
// (skipping reference production).
class follow_ResyncFollowsWalker extends rest_RestWalker {
    constructor(topProd) {
        super();
        this.topProd = topProd;
        this.follows = new lang_extensions_HashTable();
    }
    startWalking() {
        this.walk(this.topProd);
        return this.follows;
    }
    walkTerminal(terminal, currRest, prevRest) {
        // do nothing! just like in the public sector after 13:00
    }
    walkProdRef(refProd, currRest, prevRest) {
        let followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) +
            this.topProd.name;
        let fullRest = currRest.concat(prevRest);
        let restProd = new gast_public_Flat({ definition: fullRest });
        let t_in_topProd_follows = first(restProd);
        this.follows.put(followName, t_in_topProd_follows);
    }
}
function computeAllProdsFollows(topProductions) {
    let reSyncFollows = new lang_extensions_HashTable();
    Object(utils["u" /* forEach */])(topProductions, topProd => {
        let currRefsFollow = new follow_ResyncFollowsWalker(topProd).startWalking();
        reSyncFollows.putAll(currRefsFollow);
    });
    return reSyncFollows;
}
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
    return inner.name + occurenceInParent + IN;
}
function buildInProdFollowPrefix(terminal) {
    let terminalName = tokens_public_tokenName(terminal.terminalType);
    return terminalName + terminal.idx + IN;
}
//# sourceMappingURL=follow.js.map
// CONCATENATED MODULE: ./es6/src/text/range.js
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        if (!isValidRange(start, end)) {
            throw new Error("INVALID RANGE");
        }
    }
    contains(num) {
        return this.start <= num && this.end >= num;
    }
    containsRange(other) {
        return this.start <= other.start && this.end >= other.end;
    }
    isContainedInRange(other) {
        return other.containsRange(this);
    }
    strictlyContainsRange(other) {
        return this.start < other.start && this.end > other.end;
    }
    isStrictlyContainedInRange(other) {
        return other.strictlyContainsRange(this);
    }
}
function isValidRange(start, end) {
    return !(start < 0 || end < start);
}
//# sourceMappingURL=range.js.map
// CONCATENATED MODULE: ./es6/src/parse/gast_builder.js



var ProdType;
(function (ProdType) {
    ProdType[ProdType["OPTION"] = 0] = "OPTION";
    ProdType[ProdType["OR"] = 1] = "OR";
    ProdType[ProdType["MANY"] = 2] = "MANY";
    ProdType[ProdType["MANY_SEP"] = 3] = "MANY_SEP";
    ProdType[ProdType["AT_LEAST_ONE"] = 4] = "AT_LEAST_ONE";
    ProdType[ProdType["AT_LEAST_ONE_SEP"] = 5] = "AT_LEAST_ONE_SEP";
    ProdType[ProdType["REF"] = 6] = "REF";
    ProdType[ProdType["TERMINAL"] = 7] = "TERMINAL";
    ProdType[ProdType["FLAT"] = 8] = "FLAT";
})(ProdType || (ProdType = {}));
const namePropRegExp = /(?:\s*{\s*NAME\s*:\s*["'`]([\w$]*)["'`])?/;
const namePropRegExpNoCurlyFirstOfTwo = new RegExp(namePropRegExp.source
    // remove opening curly brackets
    .replace("{", "")
    // add the comma between the NAME prop and the following prop
    .replace(")?", "\\s*,)?"));
const terminalRegEx = /\.\s*CONSUME(\d+)?\s*\(\s*(?:[a-zA-Z_$]\w*\s*\.\s*)*([a-zA-Z_$]\w*)/;
const terminalRegGlobal = new RegExp(terminalRegEx.source, "g");
const refRegEx = /\.\s*SUBRULE(\d+)?\s*\(\s*(?:[a-zA-Z_$]\w*\s*\.\s*)*([a-zA-Z_$]\w*)/;
const refRegExGlobal = new RegExp(refRegEx.source, "g");
const optionPrefixRegEx = /\.\s*OPTION(\d+)?\s*\(/;
const optionRegEx = new RegExp(optionPrefixRegEx.source + namePropRegExp.source);
const optionRegExGlobal = new RegExp(optionPrefixRegEx.source, "g");
const manyPrefixRegEx = /\.\s*MANY(\d+)?\s*\(/;
const manyRegEx = new RegExp(manyPrefixRegEx.source + namePropRegExp.source);
const manyRegExGlobal = new RegExp(manyPrefixRegEx.source, "g");
const sepPropRegEx = /\s*SEP\s*:\s*(?:[a-zA-Z_$]\w*\s*\.\s*)*([a-zA-Z_$]\w*)/;
const manySepPrefixRegEx = /\.\s*MANY_SEP(\d+)?\s*\(\s*{/;
const manyWithSeparatorRegEx = new RegExp(manySepPrefixRegEx.source +
    namePropRegExpNoCurlyFirstOfTwo.source +
    sepPropRegEx.source);
const manyWithSeparatorRegExGlobal = new RegExp(manyWithSeparatorRegEx.source, "g");
const atLeastOneSepPrefixRegEx = /\.\s*AT_LEAST_ONE_SEP(\d+)?\s*\(\s*{/;
const atLeastOneWithSeparatorRegEx = new RegExp(atLeastOneSepPrefixRegEx.source +
    namePropRegExpNoCurlyFirstOfTwo.source +
    sepPropRegEx.source);
const atLeastOneWithSeparatorRegExGlobal = new RegExp(atLeastOneWithSeparatorRegEx.source, "g");
const atLeastOnePrefixRegEx = /\.\s*AT_LEAST_ONE(\d+)?\s*\(/;
const atLeastOneRegEx = new RegExp(atLeastOnePrefixRegEx.source + namePropRegExp.source);
const atLeastOneRegExGlobal = new RegExp(atLeastOnePrefixRegEx.source, "g");
const orPrefixRegEx = /\.\s*OR(\d+)?\s*\(/;
const orRegEx = new RegExp(orPrefixRegEx.source + namePropRegExp.source);
const orRegExGlobal = new RegExp(orPrefixRegEx.source, "g");
const orPartSuffixRegEx = /\s*(ALT)\s*:/;
const orPartRegEx = new RegExp(namePropRegExpNoCurlyFirstOfTwo.source + orPartSuffixRegEx.source);
const orPartRegExGlobal = new RegExp(orPartRegEx.source, "g");
let terminalNameToConstructor = {};
function buildTopProduction(impelText, name, terminals) {
    // pseudo state. so little state does not yet mandate the complexity of wrapping in a class...
    // TODO: this is confusing, might be time to create a class..
    terminalNameToConstructor = terminals;
    // the top most range must strictly contain all the other ranges
    // which is why we prefix the text with " " (curr Range impel is only for positive ranges)
    let spacedImpelText = " " + impelText;
    // TODO: why do we add whitespace twice?
    let txtWithoutComments = removeComments(" " + spacedImpelText);
    let textWithoutCommentsAndStrings = removeStringLiterals(txtWithoutComments);
    let prodRanges = createRanges(textWithoutCommentsAndStrings);
    let topRange = new Range(0, impelText.length + 2);
    let topRule = buildTopLevel(name, topRange, prodRanges, impelText);
    return topRule;
}
function buildTopLevel(name, topRange, allRanges, orgText) {
    let topLevelProd = new gast_public_Rule({
        name: name,
        definition: [],
        orgText: orgText
    });
    return buildAbstractProd(topLevelProd, topRange, allRanges, name);
}
function buildProdGast(prodRange, allRanges, ruleName) {
    switch (prodRange.type) {
        case ProdType.AT_LEAST_ONE:
            return buildAtLeastOneProd(prodRange, allRanges, ruleName);
        case ProdType.AT_LEAST_ONE_SEP:
            return buildAtLeastOneSepProd(prodRange, allRanges, ruleName);
        case ProdType.MANY_SEP:
            return buildManySepProd(prodRange, allRanges, ruleName);
        case ProdType.MANY:
            return buildManyProd(prodRange, allRanges, ruleName);
        case ProdType.OPTION:
            return buildOptionProd(prodRange, allRanges, ruleName);
        case ProdType.OR:
            return buildOrProd(prodRange, allRanges, ruleName);
        case ProdType.FLAT:
            return buildFlatProd(prodRange, allRanges, ruleName);
        case ProdType.REF:
            return buildRefProd(prodRange);
        case ProdType.TERMINAL:
            return buildTerminalProd(prodRange, ruleName);
        /* istanbul ignore next */
        default:
            throw Error("non exhaustive match");
    }
}
function buildRefProd(prodRange) {
    let reResult = refRegEx.exec(prodRange.text);
    let isImplicitOccurrenceIdx = reResult[1] === undefined;
    let refOccurrence = isImplicitOccurrenceIdx ? 0 : parseInt(reResult[1], 10);
    let refProdName = reResult[2];
    let newRef = new gast_public_NonTerminal({
        nonTerminalName: refProdName,
        idx: refOccurrence
    });
    return newRef;
}
function buildTerminalProd(prodRange, ruleName) {
    let reResult = terminalRegEx.exec(prodRange.text);
    let isImplicitOccurrenceIdx = reResult[1] === undefined;
    let terminalOccurrence = isImplicitOccurrenceIdx
        ? 0
        : parseInt(reResult[1], 10);
    let terminalName = reResult[2];
    let terminalType = terminalNameToConstructor[terminalName];
    if (!terminalType) {
        throw Error(`Terminal Token name: <${terminalName}> not found in rule: <${ruleName}>  \n` +
            "\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#TERMINAL_NAME_NOT_FOUND\n" +
            "\tFor Further details.");
    }
    let newTerminal = new gast_public_Terminal({
        terminalType: terminalType,
        idx: terminalOccurrence
    });
    return newTerminal;
}
function buildProdWithOccurrence(regEx, prodInstance, prodRange, allRanges, ruleName) {
    let reResult = regEx.exec(prodRange.text);
    let isImplicitOccurrenceIdx = reResult[1] === undefined;
    prodInstance.idx = isImplicitOccurrenceIdx ? 0 : parseInt(reResult[1], 10);
    let nestedName = reResult[2];
    if (!Object(utils["F" /* isUndefined */])(nestedName)) {
        ;
        prodInstance.name = nestedName;
    }
    return buildAbstractProd(prodInstance, prodRange.range, allRanges, ruleName);
}
function buildAtLeastOneProd(prodRange, allRanges, ruleName) {
    return buildProdWithOccurrence(atLeastOneRegEx, new gast_public_RepetitionMandatory({ definition: [] }), prodRange, allRanges, ruleName);
}
function buildAtLeastOneSepProd(prodRange, allRanges, ruleName) {
    return buildRepetitionWithSep(prodRange, allRanges, gast_public_RepetitionMandatoryWithSeparator, atLeastOneWithSeparatorRegEx, ruleName);
}
function buildManyProd(prodRange, allRanges, ruleName) {
    return buildProdWithOccurrence(manyRegEx, new gast_public_Repetition({ definition: [] }), prodRange, allRanges, ruleName);
}
function buildManySepProd(prodRange, allRanges, ruleName) {
    return buildRepetitionWithSep(prodRange, allRanges, gast_public_RepetitionWithSeparator, manyWithSeparatorRegEx, ruleName);
}
function buildRepetitionWithSep(prodRange, allRanges, repConstructor, regExp, ruleName) {
    let reResult = regExp.exec(prodRange.text);
    let isImplicitOccurrenceIdx = reResult[1] === undefined;
    let occurrenceIdx = isImplicitOccurrenceIdx ? 0 : parseInt(reResult[1], 10);
    let sepName = reResult[3];
    let separatorType = terminalNameToConstructor[sepName];
    if (!separatorType) {
        throw Error("Separator Terminal Token name: " + sepName + " not found");
    }
    let repetitionInstance = new repConstructor({
        definition: [],
        separator: separatorType,
        idx: occurrenceIdx
    });
    let nestedName = reResult[2];
    if (!Object(utils["F" /* isUndefined */])(nestedName)) {
        ;
        repetitionInstance.name = nestedName;
    }
    return (buildAbstractProd(repetitionInstance, prodRange.range, allRanges, ruleName));
}
function buildOptionProd(prodRange, allRanges, ruleName) {
    return buildProdWithOccurrence(optionRegEx, new gast_public_Option({ definition: [] }), prodRange, allRanges, ruleName);
}
function buildOrProd(prodRange, allRanges, ruleName) {
    return buildProdWithOccurrence(orRegEx, new gast_public_Alternation({ definition: [] }), prodRange, allRanges, ruleName);
}
function buildFlatProd(prodRange, allRanges, ruleName) {
    let prodInstance = new gast_public_Flat({ definition: [] });
    let reResult = orPartRegEx.exec(prodRange.text);
    let nestedName = reResult[1];
    if (!Object(utils["F" /* isUndefined */])(nestedName)) {
        ;
        prodInstance.name = nestedName;
    }
    return buildAbstractProd(prodInstance, prodRange.range, allRanges, ruleName);
}
function buildAbstractProd(prod, topLevelRange, allRanges, ruleName) {
    let secondLevelProds = getDirectlyContainedRanges(topLevelRange, allRanges);
    let secondLevelInOrder = Object(utils["R" /* sortBy */])(secondLevelProds, prodRng => {
        return prodRng.range.start;
    });
    let definition = [];
    Object(utils["u" /* forEach */])(secondLevelInOrder, prodRng => {
        definition.push(buildProdGast(prodRng, allRanges, ruleName));
    });
    prod.definition = definition;
    return prod;
}
function getDirectlyContainedRanges(y, prodRanges) {
    return Object(utils["p" /* filter */])(prodRanges, (x) => {
        let isXDescendantOfY = y.strictlyContainsRange(x.range);
        let xDoesNotHaveAnyAncestorWhichIsDecendantOfY = Object(utils["o" /* every */])(prodRanges, (maybeAnotherParent) => {
            let isParentOfX = maybeAnotherParent.range.strictlyContainsRange(x.range);
            let isChildOfY = maybeAnotherParent.range.isStrictlyContainedInRange(y);
            return !(isParentOfX && isChildOfY);
        });
        return isXDescendantOfY && xDoesNotHaveAnyAncestorWhichIsDecendantOfY;
    });
}
let singleLineCommentRegEx = /\/\/.*/g;
let multiLineCommentRegEx = /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g;
let doubleQuoteStringLiteralRegEx = /(NAME\s*:\s*)?"([^\\"]|\\([bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/g;
let singleQuoteStringLiteralRegEx = /(NAME\s*:\s*)?'([^\\']|\\([bfnrtv'\\/]|u[0-9a-fA-F]{4}))*'/g;
function removeComments(text) {
    let noSingleLine = text.replace(singleLineCommentRegEx, "");
    let noComments = noSingleLine.replace(multiLineCommentRegEx, "");
    return noComments;
}
function replaceWithEmptyStringExceptNestedRules(match, nestedRuleGroup) {
    // do not replace with empty string if a nest rule (NAME:"bamba") was detected
    if (nestedRuleGroup !== undefined) {
        return match;
    }
    return "";
}
function removeStringLiterals(text) {
    let noDoubleQuotes = text.replace(doubleQuoteStringLiteralRegEx, replaceWithEmptyStringExceptNestedRules);
    let noSingleQuotes = noDoubleQuotes.replace(singleQuoteStringLiteralRegEx, replaceWithEmptyStringExceptNestedRules);
    return noSingleQuotes;
}
function createRanges(text) {
    let terminalRanges = createTerminalRanges(text);
    let refsRanges = createRefsRanges(text);
    let atLeastOneRanges = createAtLeastOneRanges(text);
    let atLeastOneSepRanges = createAtLeastOneSepRanges(text);
    let manyRanges = createManyRanges(text);
    let manySepRanges = createManySepRanges(text);
    let optionRanges = createOptionRanges(text);
    let orRanges = createOrRanges(text);
    return [].concat(terminalRanges, refsRanges, atLeastOneRanges, atLeastOneSepRanges, manyRanges, manySepRanges, optionRanges, orRanges);
}
function createTerminalRanges(text) {
    return createRefOrTerminalProdRangeInternal(text, ProdType.TERMINAL, terminalRegGlobal);
}
function createRefsRanges(text) {
    return createRefOrTerminalProdRangeInternal(text, ProdType.REF, refRegExGlobal);
}
function createAtLeastOneRanges(text) {
    return createOperatorProdRangeParenthesis(text, ProdType.AT_LEAST_ONE, atLeastOneRegExGlobal);
}
function createAtLeastOneSepRanges(text) {
    return createOperatorProdRangeParenthesis(text, ProdType.AT_LEAST_ONE_SEP, atLeastOneWithSeparatorRegExGlobal);
}
function createManyRanges(text) {
    return createOperatorProdRangeParenthesis(text, ProdType.MANY, manyRegExGlobal);
}
function createManySepRanges(text) {
    return createOperatorProdRangeParenthesis(text, ProdType.MANY_SEP, manyWithSeparatorRegExGlobal);
}
function createOptionRanges(text) {
    return createOperatorProdRangeParenthesis(text, ProdType.OPTION, optionRegExGlobal);
}
function createOrRanges(text) {
    let orRanges = createOperatorProdRangeParenthesis(text, ProdType.OR, orRegExGlobal);
    // have to split up the OR cases into separate FLAT productions
    // (A |BB | CDE) ==> or.def[0] --> FLAT(A) , or.def[1] --> FLAT(BB) , or.def[2] --> FLAT(CCDE)
    let orSubPartsRanges = createOrPartRanges(orRanges);
    return orRanges.concat(orSubPartsRanges);
}
let findClosingCurly = (Object(utils["M" /* partial */])(findClosingOffset, "{", "}"));
let findClosingParen = (Object(utils["M" /* partial */])(findClosingOffset, "(", ")"));
function createOrPartRanges(orRanges) {
    let orPartRanges = [];
    Object(utils["u" /* forEach */])(orRanges, orRange => {
        let currOrParts = createOperatorProdRangeInternal(orRange.text, ProdType.FLAT, orPartRegExGlobal, findClosingCurly);
        let currOrRangeStart = orRange.range.start;
        // fix offsets as we are working on a subset of the text
        Object(utils["u" /* forEach */])(currOrParts, orPart => {
            orPart.range.start += currOrRangeStart;
            orPart.range.end += currOrRangeStart;
        });
        orPartRanges = orPartRanges.concat(currOrParts);
    });
    let uniqueOrPartRanges = Object(utils["T" /* uniq */])(orPartRanges, (prodRange) => {
        // using "~" as a separator for the identify function as its not a valid char in javascript
        return (prodRange.type +
            "~" +
            prodRange.range.start +
            "~" +
            prodRange.range.end +
            "~" +
            prodRange.text);
    });
    return uniqueOrPartRanges;
}
function createRefOrTerminalProdRangeInternal(text, prodType, pattern) {
    let prodRanges = [];
    let matched;
    while ((matched = pattern.exec(text))) {
        let start = matched.index;
        let stop = pattern.lastIndex;
        let currRange = new Range(start, stop);
        let currText = matched[0];
        prodRanges.push({
            range: currRange,
            text: currText,
            type: prodType
        });
    }
    return prodRanges;
}
function createOperatorProdRangeParenthesis(text, prodType, pattern) {
    return createOperatorProdRangeInternal(text, prodType, pattern, findClosingParen);
}
function createOperatorProdRangeInternal(text, prodType, pattern, findTerminatorOffSet) {
    let operatorRanges = [];
    let matched;
    while ((matched = pattern.exec(text))) {
        let start = matched.index;
        // note that (start + matched[0].length) is the first character AFTER the match
        let stop = findTerminatorOffSet(start + matched[0].length, text);
        let currRange = new Range(start, stop);
        let currText = text.substr(start, stop - start + 1);
        operatorRanges.push({
            range: currRange,
            text: currText,
            type: prodType
        });
    }
    return operatorRanges;
}
function findClosingOffset(opening, closing, start, text) {
    let parenthesisStack = [1];
    let i = -1;
    while (!Object(utils["A" /* isEmpty */])(parenthesisStack) && i + start < text.length) {
        i++;
        let nextChar = text.charAt(start + i);
        if (nextChar === opening) {
            parenthesisStack.push(1);
        }
        else if (nextChar === closing) {
            parenthesisStack.pop();
        }
    }
    // valid termination of the search loop
    if (Object(utils["A" /* isEmpty */])(parenthesisStack)) {
        return i + start;
    }
    else {
        throw new Error("INVALID INPUT TEXT, UNTERMINATED PARENTHESIS");
    }
}
function deserializeGrammar(grammar, terminals) {
    return Object(utils["I" /* map */])(grammar, production => deserializeProduction(production, terminals));
}
function deserializeProduction(node, terminals) {
    switch (node.type) {
        case "NonTerminal":
            return new gast_public_NonTerminal({
                nonTerminalName: node.name,
                idx: node.idx
            });
        case "Flat":
            return new gast_public_Flat({
                name: node.name,
                definition: deserializeGrammar(node.definition, terminals)
            });
        case "Option":
            return new gast_public_Option({
                name: node.name,
                idx: node.idx,
                definition: deserializeGrammar(node.definition, terminals)
            });
        case "RepetitionMandatory":
            return new gast_public_RepetitionMandatory({
                name: node.name,
                idx: node.idx,
                definition: deserializeGrammar(node.definition, terminals)
            });
        case "RepetitionMandatoryWithSeparator":
            return new gast_public_RepetitionMandatoryWithSeparator({
                name: node.name,
                idx: node.idx,
                separator: terminals[node.separator.name],
                definition: deserializeGrammar(node.definition, terminals)
            });
        case "RepetitionWithSeparator":
            return new gast_public_RepetitionWithSeparator({
                name: node.name,
                idx: node.idx,
                separator: terminals[node.separator.name],
                definition: deserializeGrammar(node.definition, terminals)
            });
        case "Repetition":
            return new gast_public_Repetition({
                name: node.name,
                idx: node.idx,
                definition: deserializeGrammar(node.definition, terminals)
            });
        case "Alternation":
            return new gast_public_Alternation({
                name: node.name,
                idx: node.idx,
                definition: deserializeGrammar(node.definition, terminals)
            });
        case "Terminal":
            return new gast_public_Terminal({
                terminalType: terminals[node.name],
                idx: node.idx
            });
        case "Rule":
            return new gast_public_Rule({
                name: node.name,
                orgText: node.orgText,
                definition: deserializeGrammar(node.definition, terminals)
            });
        /* istanbul ignore next */
        default:
            const _never = node;
    }
}
//# sourceMappingURL=gast_builder.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/keys.js
// Lookahead keys are 32Bit integers in the form
// TTTTTTTTT-ZZZZZZZZZZZZZZZ-YYYY-XXXX
// XXXX -> Occurrence Index bitmap.
// YYYY -> DSL Method Name bitmap.
// ZZZZZZZZZZZZZZZ -> Rule short Index bitmap.
// TTTTTTTTT -> alternation alternative index bitmap
const BITS_FOR_METHOD_IDX = 4;
const BITS_FOR_OCCURRENCE_IDX = 4;
const BITS_FOR_RULE_IDX = 24;
// TODO: validation, this means that there may at most 2^8 --> 256 alternatives for an alternation.
const BITS_FOR_ALT_IDX = 8;
// short string used as part of mapping keys.
// being short improves the performance when composing KEYS for maps out of these
// The 5 - 8 bits (16 possible values, are reserved for the DSL method indices)
/* tslint:disable */
const OR_IDX = 1 << BITS_FOR_METHOD_IDX;
const OPTION_IDX = 2 << BITS_FOR_METHOD_IDX;
const MANY_IDX = 3 << BITS_FOR_METHOD_IDX;
const AT_LEAST_ONE_IDX = 4 << BITS_FOR_METHOD_IDX;
const MANY_SEP_IDX = 5 << BITS_FOR_METHOD_IDX;
const AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_METHOD_IDX;
/* tslint:enable */
// this actually returns a number, but it is always used as a string (object prop key)
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
    /* tslint:disable */
    return occurrence | dslMethodIdx | ruleIdx;
    /* tslint:enable */
}
const BITS_START_FOR_ALT_IDX = 32 - BITS_FOR_ALT_IDX;
function getKeyForAltIndex(ruleIdx, dslMethodIdx, occurrence, altIdx) {
    /* tslint:disable */
    // alternative indices are zero based, thus must always add one (turn on one bit) to guarantee uniqueness.
    let altIdxBitMap = (altIdx + 1) << BITS_START_FOR_ALT_IDX;
    return (getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) |
        altIdxBitMap);
    /* tslint:enable */
}
//# sourceMappingURL=keys.js.map
// CONCATENATED MODULE: ./es6/src/parse/cst/cst.js





/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */
function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (both start/end offsets exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    }
    // Once the startOffset has been updated with a valid number it should never receive
    // any farther updates as the Token vector is sorted.
    // We still have to check this this condition for every new possible location info
    // because with error recovery enabled we may encounter invalid tokens (NaN location props)
    else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    }
}
/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */
function setNodeLocationFull(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (all start/end props exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.startColumn = newLocationInfo.startColumn;
        currNodeLocation.startLine = newLocationInfo.startLine;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    }
    // Once the start props has been updated with a valid number it should never receive
    // any farther updates as the Token vector is sorted.
    // We still have to check this this condition for every new possible location info
    // because with error recovery enabled we may encounter invalid tokens (NaN location props)
    else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    }
}
function addTerminalToCst(node, token, tokenTypeName) {
    if (node.children[tokenTypeName] === undefined) {
        node.children[tokenTypeName] = [token];
    }
    else {
        node.children[tokenTypeName].push(token);
    }
}
function addNoneTerminalToCst(node, ruleName, ruleResult) {
    if (node.children[ruleName] === undefined) {
        node.children[ruleName] = [ruleResult];
    }
    else {
        node.children[ruleName].push(ruleResult);
    }
}
class cst_NamedDSLMethodsCollectorVisitor extends gast_visitor_public_GAstVisitor {
    constructor(ruleIdx) {
        super();
        this.result = [];
        this.ruleIdx = ruleIdx;
    }
    collectNamedDSLMethod(node, newNodeConstructor, methodIdx) {
        // TODO: better hack to copy what we need here...
        if (!Object(utils["F" /* isUndefined */])(node.name)) {
            // copy without name so this will indeed be processed later.
            let nameLessNode;
            /* istanbul ignore else */
            if (node instanceof gast_public_Option ||
                node instanceof gast_public_Repetition ||
                node instanceof gast_public_RepetitionMandatory ||
                node instanceof gast_public_Alternation) {
                nameLessNode = new newNodeConstructor({
                    definition: node.definition,
                    idx: node.idx
                });
            }
            else if (node instanceof gast_public_RepetitionMandatoryWithSeparator ||
                node instanceof gast_public_RepetitionWithSeparator) {
                nameLessNode = new newNodeConstructor({
                    definition: node.definition,
                    idx: node.idx,
                    separator: node.separator
                });
            }
            else {
                throw Error("non exhaustive match");
            }
            let def = [nameLessNode];
            let key = getKeyForAutomaticLookahead(this.ruleIdx, methodIdx, node.idx);
            this.result.push({ def, key, name: node.name, orgProd: node });
        }
    }
    visitOption(node) {
        this.collectNamedDSLMethod(node, gast_public_Option, OPTION_IDX);
    }
    visitRepetition(node) {
        this.collectNamedDSLMethod(node, gast_public_Repetition, MANY_IDX);
    }
    visitRepetitionMandatory(node) {
        this.collectNamedDSLMethod(node, gast_public_RepetitionMandatory, AT_LEAST_ONE_IDX);
    }
    visitRepetitionMandatoryWithSeparator(node) {
        this.collectNamedDSLMethod(node, gast_public_RepetitionMandatoryWithSeparator, AT_LEAST_ONE_SEP_IDX);
    }
    visitRepetitionWithSeparator(node) {
        this.collectNamedDSLMethod(node, gast_public_RepetitionWithSeparator, MANY_SEP_IDX);
    }
    visitAlternation(node) {
        this.collectNamedDSLMethod(node, gast_public_Alternation, OR_IDX);
        const hasMoreThanOneAlternative = node.definition.length > 1;
        Object(utils["u" /* forEach */])(node.definition, (currFlatAlt, altIdx) => {
            if (!Object(utils["F" /* isUndefined */])(currFlatAlt.name)) {
                let def = currFlatAlt.definition;
                if (hasMoreThanOneAlternative) {
                    def = [new gast_public_Option({ definition: currFlatAlt.definition })];
                }
                else {
                    // mandatory
                    def = currFlatAlt.definition;
                }
                let key = getKeyForAltIndex(this.ruleIdx, OR_IDX, node.idx, altIdx);
                this.result.push({
                    def,
                    key,
                    name: currFlatAlt.name,
                    orgProd: currFlatAlt
                });
            }
        });
    }
}
function analyzeCst(topRules, fullToShortName) {
    let result = {
        dictDef: new lang_extensions_HashTable(),
        allRuleNames: []
    };
    Object(utils["u" /* forEach */])(topRules, currTopRule => {
        let currTopRuleShortName = fullToShortName.get(currTopRule.name);
        result.allRuleNames.push(currTopRule.name);
        let namedCollectorVisitor = new cst_NamedDSLMethodsCollectorVisitor(currTopRuleShortName);
        currTopRule.accept(namedCollectorVisitor);
        Object(utils["u" /* forEach */])(namedCollectorVisitor.result, ({ def, key, name }) => {
            result.allRuleNames.push(currTopRule.name + name);
        });
    });
    return result;
}
//# sourceMappingURL=cst.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/interpreter.js





class interpreter_AbstractNextPossibleTokensWalker extends rest_RestWalker {
    constructor(topProd, path) {
        super();
        this.topProd = topProd;
        this.path = path;
        this.possibleTokTypes = [];
        this.nextProductionName = "";
        this.nextProductionOccurrence = 0;
        this.found = false;
        this.isAtEndOfPath = false;
    }
    startWalking() {
        this.found = false;
        if (this.path.ruleStack[0] !== this.topProd.name) {
            throw Error("The path does not start with the walker's top Rule!");
        }
        // immutable for the win
        this.ruleStack = Object(utils["g" /* cloneArr */])(this.path.ruleStack).reverse(); // intelij bug requires assertion
        this.occurrenceStack = Object(utils["g" /* cloneArr */])(this.path.occurrenceStack).reverse(); // intelij bug requires assertion
        // already verified that the first production is valid, we now seek the 2nd production
        this.ruleStack.pop();
        this.occurrenceStack.pop();
        this.updateExpectedNext();
        this.walk(this.topProd);
        return this.possibleTokTypes;
    }
    walk(prod, prevRest = []) {
        // stop scanning once we found the path
        if (!this.found) {
            super.walk(prod, prevRest);
        }
    }
    walkProdRef(refProd, currRest, prevRest) {
        // found the next production, need to keep walking in it
        if (refProd.referencedRule.name === this.nextProductionName &&
            refProd.idx === this.nextProductionOccurrence) {
            let fullRest = currRest.concat(prevRest);
            this.updateExpectedNext();
            this.walk(refProd.referencedRule, fullRest);
        }
    }
    updateExpectedNext() {
        // need to consume the Terminal
        if (Object(utils["A" /* isEmpty */])(this.ruleStack)) {
            // must reset nextProductionXXX to avoid walking down another Top Level production while what we are
            // really seeking is the last Terminal...
            this.nextProductionName = "";
            this.nextProductionOccurrence = 0;
            this.isAtEndOfPath = true;
        }
        else {
            this.nextProductionName = this.ruleStack.pop();
            this.nextProductionOccurrence = this.occurrenceStack.pop();
        }
    }
}
class interpreter_NextAfterTokenWalker extends interpreter_AbstractNextPossibleTokensWalker {
    constructor(topProd, path) {
        super(topProd, path);
        this.path = path;
        this.nextTerminalName = "";
        this.nextTerminalOccurrence = 0;
        this.nextTerminalName = tokens_public_tokenName(this.path.lastTok);
        this.nextTerminalOccurrence = this.path.lastTokOccurrence;
    }
    walkTerminal(terminal, currRest, prevRest) {
        if (this.isAtEndOfPath &&
            tokens_public_tokenName(terminal.terminalType) === this.nextTerminalName &&
            terminal.idx === this.nextTerminalOccurrence &&
            !this.found) {
            let fullRest = currRest.concat(prevRest);
            let restProd = new gast_public_Flat({ definition: fullRest });
            this.possibleTokTypes = first(restProd);
            this.found = true;
        }
    }
}
/**
 * This walker only "walks" a single "TOP" level in the Grammar Ast, this means
 * it never "follows" production refs
 */
class interpreter_AbstractNextTerminalAfterProductionWalker extends rest_RestWalker {
    constructor(topRule, occurrence) {
        super();
        this.topRule = topRule;
        this.occurrence = occurrence;
        this.result = {
            token: undefined,
            occurrence: undefined,
            isEndOfRule: undefined
        };
    }
    startWalking() {
        this.walk(this.topRule);
        return this.result;
    }
}
class interpreter_NextTerminalAfterManyWalker extends interpreter_AbstractNextTerminalAfterProductionWalker {
    walkMany(manyProd, currRest, prevRest) {
        if (manyProd.idx === this.occurrence) {
            let firstAfterMany = Object(utils["s" /* first */])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterMany === undefined;
            if (firstAfterMany instanceof gast_public_Terminal) {
                this.result.token = firstAfterMany.terminalType;
                this.result.occurrence = firstAfterMany.idx;
            }
        }
        else {
            super.walkMany(manyProd, currRest, prevRest);
        }
    }
}
class interpreter_NextTerminalAfterManySepWalker extends interpreter_AbstractNextTerminalAfterProductionWalker {
    walkManySep(manySepProd, currRest, prevRest) {
        if (manySepProd.idx === this.occurrence) {
            let firstAfterManySep = Object(utils["s" /* first */])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterManySep === undefined;
            if (firstAfterManySep instanceof gast_public_Terminal) {
                this.result.token = firstAfterManySep.terminalType;
                this.result.occurrence = firstAfterManySep.idx;
            }
        }
        else {
            super.walkManySep(manySepProd, currRest, prevRest);
        }
    }
}
class interpreter_NextTerminalAfterAtLeastOneWalker extends interpreter_AbstractNextTerminalAfterProductionWalker {
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        if (atLeastOneProd.idx === this.occurrence) {
            let firstAfterAtLeastOne = Object(utils["s" /* first */])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterAtLeastOne === undefined;
            if (firstAfterAtLeastOne instanceof gast_public_Terminal) {
                this.result.token = firstAfterAtLeastOne.terminalType;
                this.result.occurrence = firstAfterAtLeastOne.idx;
            }
        }
        else {
            super.walkAtLeastOne(atLeastOneProd, currRest, prevRest);
        }
    }
}
// TODO: reduce code duplication in the AfterWalkers
class interpreter_NextTerminalAfterAtLeastOneSepWalker extends interpreter_AbstractNextTerminalAfterProductionWalker {
    walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest) {
        if (atleastOneSepProd.idx === this.occurrence) {
            let firstAfterfirstAfterAtLeastOneSep = Object(utils["s" /* first */])(currRest.concat(prevRest));
            this.result.isEndOfRule =
                firstAfterfirstAfterAtLeastOneSep === undefined;
            if (firstAfterfirstAfterAtLeastOneSep instanceof gast_public_Terminal) {
                this.result.token =
                    firstAfterfirstAfterAtLeastOneSep.terminalType;
                this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
            }
        }
        else {
            super.walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest);
        }
    }
}
function possiblePathsFrom(targetDef, maxLength, currPath = []) {
    // avoid side effects
    currPath = Object(utils["g" /* cloneArr */])(currPath);
    let result = [];
    let i = 0;
    function remainingPathWith(nextDef) {
        return nextDef.concat(Object(utils["m" /* drop */])(targetDef, i + 1));
    }
    function getAlternativesForProd(definition) {
        let alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
        return result.concat(alternatives);
    }
    /**
     * Mandatory productions will halt the loop as the paths computed from their recursive calls will already contain the
     * following (rest) of the targetDef.
     *
     * For optional productions (Option/Repetition/...) the loop will continue to represent the paths that do not include the
     * the optional production.
     */
    while (currPath.length < maxLength && i < targetDef.length) {
        let prod = targetDef[i];
        /* istanbul ignore else */
        if (prod instanceof gast_public_Flat) {
            return getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof gast_public_NonTerminal) {
            return getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof gast_public_Option) {
            result = getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof gast_public_RepetitionMandatory) {
            const newDef = prod.definition.concat([
                new gast_public_Repetition({
                    definition: prod.definition
                })
            ]);
            return getAlternativesForProd(newDef);
        }
        else if (prod instanceof gast_public_RepetitionMandatoryWithSeparator) {
            const newDef = [
                new gast_public_Flat({ definition: prod.definition }),
                new gast_public_Repetition({
                    definition: [
                        new gast_public_Terminal({ terminalType: prod.separator })
                    ].concat(prod.definition)
                })
            ];
            return getAlternativesForProd(newDef);
        }
        else if (prod instanceof gast_public_RepetitionWithSeparator) {
            const newDef = prod.definition.concat([
                new gast_public_Repetition({
                    definition: [
                        new gast_public_Terminal({ terminalType: prod.separator })
                    ].concat(prod.definition)
                })
            ]);
            result = getAlternativesForProd(newDef);
        }
        else if (prod instanceof gast_public_Repetition) {
            const newDef = prod.definition.concat([
                new gast_public_Repetition({
                    definition: prod.definition
                })
            ]);
            result = getAlternativesForProd(newDef);
        }
        else if (prod instanceof gast_public_Alternation) {
            Object(utils["u" /* forEach */])(prod.definition, currAlt => {
                result = getAlternativesForProd(currAlt.definition);
            });
            return result;
        }
        else if (prod instanceof gast_public_Terminal) {
            currPath.push(prod.terminalType);
        }
        else {
            throw Error("non exhaustive match");
        }
        i++;
    }
    result.push({
        partialPath: currPath,
        suffixDef: Object(utils["m" /* drop */])(targetDef, i)
    });
    return result;
}
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
    const EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
    // to avoid creating a new Array each time.
    const EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
    const EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
    let foundCompletePath = false;
    const tokenVectorLength = tokenVector.length;
    let minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
    let result = [];
    let possiblePaths = [];
    possiblePaths.push({
        idx: -1,
        def: initialDef,
        ruleStack: [],
        occurrenceStack: []
    });
    while (!Object(utils["A" /* isEmpty */])(possiblePaths)) {
        let currPath = possiblePaths.pop();
        // skip alternatives if no more results can be found (assuming deterministic grammar with fixed lookahead)
        if (currPath === EXIT_ALTERNATIVE) {
            if (foundCompletePath &&
                Object(utils["H" /* last */])(possiblePaths).idx <= minimalAlternativesIndex) {
                // remove irrelevant alternative
                possiblePaths.pop();
            }
            continue;
        }
        let currDef = currPath.def;
        let currIdx = currPath.idx;
        let currRuleStack = currPath.ruleStack;
        let currOccurrenceStack = currPath.occurrenceStack;
        // For Example: an empty path could exist in a valid grammar in the case of an EMPTY_ALT
        if (Object(utils["A" /* isEmpty */])(currDef)) {
            continue;
        }
        let prod = currDef[0];
        /* istanbul ignore else */
        if (prod === EXIT_NON_TERMINAL) {
            let nextPath = {
                idx: currIdx,
                def: Object(utils["m" /* drop */])(currDef),
                ruleStack: Object(utils["n" /* dropRight */])(currRuleStack),
                occurrenceStack: Object(utils["n" /* dropRight */])(currOccurrenceStack)
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof gast_public_Terminal) {
            /* istanbul ignore else */
            if (currIdx < tokenVectorLength - 1) {
                let nextIdx = currIdx + 1;
                let actualToken = tokenVector[nextIdx];
                if (tokMatcher(actualToken, prod.terminalType)) {
                    let nextPath = {
                        idx: nextIdx,
                        def: Object(utils["m" /* drop */])(currDef),
                        ruleStack: currRuleStack,
                        occurrenceStack: currOccurrenceStack
                    };
                    possiblePaths.push(nextPath);
                }
                // end of the line
            }
            else if (currIdx === tokenVectorLength - 1) {
                // IGNORE ABOVE ELSE
                result.push({
                    nextTokenType: prod.terminalType,
                    nextTokenOccurrence: prod.idx,
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack
                });
                foundCompletePath = true;
            }
            else {
                throw Error("non exhaustive match");
            }
        }
        else if (prod instanceof gast_public_NonTerminal) {
            let newRuleStack = Object(utils["g" /* cloneArr */])(currRuleStack);
            newRuleStack.push(prod.nonTerminalName);
            let newOccurrenceStack = Object(utils["g" /* cloneArr */])(currOccurrenceStack);
            newOccurrenceStack.push(prod.idx);
            let nextPath = {
                idx: currIdx,
                def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, Object(utils["m" /* drop */])(currDef)),
                ruleStack: newRuleStack,
                occurrenceStack: newOccurrenceStack
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof gast_public_Option) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            let nextPathWithout = {
                idx: currIdx,
                def: Object(utils["m" /* drop */])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            let nextPathWith = {
                idx: currIdx,
                def: prod.definition.concat(Object(utils["m" /* drop */])(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof gast_public_RepetitionMandatory) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            let secondIteration = new gast_public_Repetition({
                definition: prod.definition,
                idx: prod.idx
            });
            let nextDef = prod.definition.concat([secondIteration], Object(utils["m" /* drop */])(currDef));
            let nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof gast_public_RepetitionMandatoryWithSeparator) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            let separatorGast = new gast_public_Terminal({
                terminalType: prod.separator
            });
            let secondIteration = new gast_public_Repetition({
                definition: [separatorGast].concat(prod.definition),
                idx: prod.idx
            });
            let nextDef = prod.definition.concat([secondIteration], Object(utils["m" /* drop */])(currDef));
            let nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof gast_public_RepetitionWithSeparator) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            let nextPathWithout = {
                idx: currIdx,
                def: Object(utils["m" /* drop */])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            let separatorGast = new gast_public_Terminal({
                terminalType: prod.separator
            });
            let nthRepetition = new gast_public_Repetition({
                definition: [separatorGast].concat(prod.definition),
                idx: prod.idx
            });
            let nextDef = prod.definition.concat([nthRepetition], Object(utils["m" /* drop */])(currDef));
            let nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof gast_public_Repetition) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            let nextPathWithout = {
                idx: currIdx,
                def: Object(utils["m" /* drop */])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            // TODO: an empty repetition will cause infinite loops here, will the parser detect this in selfAnalysis?
            let nthRepetition = new gast_public_Repetition({
                definition: prod.definition,
                idx: prod.idx
            });
            let nextDef = prod.definition.concat([nthRepetition], Object(utils["m" /* drop */])(currDef));
            let nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof gast_public_Alternation) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            for (let i = prod.definition.length - 1; i >= 0; i--) {
                let currAlt = prod.definition[i];
                let currAltPath = {
                    idx: currIdx,
                    def: currAlt.definition.concat(Object(utils["m" /* drop */])(currDef)),
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack
                };
                possiblePaths.push(currAltPath);
                possiblePaths.push(EXIT_ALTERNATIVE);
            }
        }
        else if (prod instanceof gast_public_Flat) {
            possiblePaths.push({
                idx: currIdx,
                def: prod.definition.concat(Object(utils["m" /* drop */])(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            });
        }
        else if (prod instanceof gast_public_Rule) {
            // last because we should only encounter at most a single one of these per invocation.
            possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
        }
        else {
            throw Error("non exhaustive match");
        }
    }
    return result;
}
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
    let newRuleStack = Object(utils["g" /* cloneArr */])(currRuleStack);
    newRuleStack.push(topRule.name);
    let newCurrOccurrenceStack = Object(utils["g" /* cloneArr */])(currOccurrenceStack);
    // top rule is always assumed to have been called with occurrence index 1
    newCurrOccurrenceStack.push(1);
    return {
        idx: currIdx,
        def: topRule.definition,
        ruleStack: newRuleStack,
        occurrenceStack: newCurrOccurrenceStack
    };
}
//# sourceMappingURL=interpreter.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/lookahead.js






var PROD_TYPE;
(function (PROD_TYPE) {
    PROD_TYPE[PROD_TYPE["OPTION"] = 0] = "OPTION";
    PROD_TYPE[PROD_TYPE["REPETITION"] = 1] = "REPETITION";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["ALTERNATION"] = 5] = "ALTERNATION";
})(PROD_TYPE || (PROD_TYPE = {}));
function getProdType(prod) {
    /* istanbul ignore else */
    if (prod instanceof gast_public_Option) {
        return PROD_TYPE.OPTION;
    }
    else if (prod instanceof gast_public_Repetition) {
        return PROD_TYPE.REPETITION;
    }
    else if (prod instanceof gast_public_RepetitionMandatory) {
        return PROD_TYPE.REPETITION_MANDATORY;
    }
    else if (prod instanceof gast_public_RepetitionMandatoryWithSeparator) {
        return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
    }
    else if (prod instanceof gast_public_RepetitionWithSeparator) {
        return PROD_TYPE.REPETITION_WITH_SEPARATOR;
    }
    else if (prod instanceof gast_public_Alternation) {
        return PROD_TYPE.ALTERNATION;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function buildLookaheadFuncForOr(occurrence, ruleGrammar, k, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
    let lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, k);
    const tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths)
        ? tokenStructuredMatcherNoCategories
        : tokenStructuredMatcher;
    return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher, dynamicTokensEnabled);
}
/**
 *  When dealing with an Optional production (OPTION/MANY/2nd iteration of AT_LEAST_ONE/...) we need to compare
 *  the lookahead "inside" the production and the lookahead immediately "after" it in the same top level rule (context free).
 *
 *  Example: given a production:
 *  ABC(DE)?DF
 *
 *  The optional '(DE)?' should only be entered if we see 'DE'. a single Token 'D' is not sufficient to distinguish between the two
 *  alternatives.
 *
 *  @returns A Lookahead function which will return true IFF the parser should parse the Optional production.
 */
function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
    let lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
    const tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths)
        ? tokenStructuredMatcherNoCategories
        : tokenStructuredMatcher;
    return lookaheadBuilder(lookAheadPaths[0], tokenMatcher, dynamicTokensEnabled);
}
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
    let numOfAlts = alts.length;
    let areAllOneTokenLookahead = Object(utils["o" /* every */])(alts, currAlt => {
        return Object(utils["o" /* every */])(currAlt, currPath => {
            return currPath.length === 1;
        });
    });
    // This version takes into account the predicates as well.
    if (hasPredicates) {
        /**
         * @returns {number} - The chosen alternative index
         */
        return function (orAlts) {
            // unfortunately the predicates must be extracted every single time
            // as they cannot be cached due to references to parameters(vars) which are no longer valid.
            // note that in the common case of no predicates, no cpu time will be wasted on this (see else block)
            let predicates = Object(utils["I" /* map */])(orAlts, currAlt => currAlt.GATE);
            for (let t = 0; t < numOfAlts; t++) {
                let currAlt = alts[t];
                let currNumOfPaths = currAlt.length;
                let currPredicate = predicates[t];
                if (currPredicate !== undefined &&
                    currPredicate.call(this) === false) {
                    // if the predicate does not match there is no point in checking the paths
                    continue;
                }
                nextPath: for (let j = 0; j < currNumOfPaths; j++) {
                    let currPath = currAlt[j];
                    let currPathLength = currPath.length;
                    for (let i = 0; i < currPathLength; i++) {
                        let nextToken = this.LA(i + 1);
                        if (tokenMatcher(nextToken, currPath[i]) === false) {
                            // mismatch in current path
                            // try the next pth
                            continue nextPath;
                        }
                    }
                    // found a full path that matches.
                    // this will also work for an empty ALT as the loop will be skipped
                    return t;
                }
                // none of the paths for the current alternative matched
                // try the next alternative
            }
            // none of the alternatives could be matched
            return undefined;
        };
    }
    else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        // optimized (common) case of all the lookaheads paths requiring only
        // a single token lookahead. These Optimizations cannot work if dynamically defined Tokens are used.
        let singleTokenAlts = Object(utils["I" /* map */])(alts, currAlt => {
            return Object(utils["t" /* flatten */])(currAlt);
        });
        let choiceToAlt = Object(utils["O" /* reduce */])(singleTokenAlts, (result, currAlt, idx) => {
            Object(utils["u" /* forEach */])(currAlt, currTokType => {
                if (!Object(utils["w" /* has */])(result, currTokType.tokenTypeIdx)) {
                    result[currTokType.tokenTypeIdx] = idx;
                }
                Object(utils["u" /* forEach */])(currTokType.categoryMatches, currExtendingType => {
                    if (!Object(utils["w" /* has */])(result, currExtendingType)) {
                        result[currExtendingType] = idx;
                    }
                });
            });
            return result;
        }, []);
        /**
         * @returns {number} - The chosen alternative index
         */
        return function () {
            let nextToken = this.LA(1);
            return choiceToAlt[nextToken.tokenTypeIdx];
        };
    }
    else {
        // optimized lookahead without needing to check the predicates at all.
        // this causes code duplication which is intentional to improve performance.
        /**
         * @returns {number} - The chosen alternative index
         */
        return function () {
            for (let t = 0; t < numOfAlts; t++) {
                let currAlt = alts[t];
                let currNumOfPaths = currAlt.length;
                nextPath: for (let j = 0; j < currNumOfPaths; j++) {
                    let currPath = currAlt[j];
                    let currPathLength = currPath.length;
                    for (let i = 0; i < currPathLength; i++) {
                        let nextToken = this.LA(i + 1);
                        if (tokenMatcher(nextToken, currPath[i]) === false) {
                            // mismatch in current path
                            // try the next pth
                            continue nextPath;
                        }
                    }
                    // found a full path that matches.
                    // this will also work for an empty ALT as the loop will be skipped
                    return t;
                }
                // none of the paths for the current alternative matched
                // try the next alternative
            }
            // none of the alternatives could be matched
            return undefined;
        };
    }
}
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled) {
    let areAllOneTokenLookahead = Object(utils["o" /* every */])(alt, currPath => {
        return currPath.length === 1;
    });
    let numOfPaths = alt.length;
    // optimized (common) case of all the lookaheads paths requiring only
    // a single token lookahead.
    if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        let singleTokensTypes = Object(utils["t" /* flatten */])(alt);
        if (singleTokensTypes.length === 1 &&
            Object(utils["A" /* isEmpty */])(singleTokensTypes[0].categoryMatches)) {
            let expectedTokenType = singleTokensTypes[0];
            let expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
            return function () {
                return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey;
            };
        }
        else {
            let choiceToAlt = Object(utils["O" /* reduce */])(singleTokensTypes, (result, currTokType, idx) => {
                result[currTokType.tokenTypeIdx] = true;
                Object(utils["u" /* forEach */])(currTokType.categoryMatches, currExtendingType => {
                    result[currExtendingType] = true;
                });
                return result;
            }, []);
            return function () {
                let nextToken = this.LA(1);
                return choiceToAlt[nextToken.tokenTypeIdx] === true;
            };
        }
    }
    else {
        return function () {
            nextPath: for (let j = 0; j < numOfPaths; j++) {
                let currPath = alt[j];
                let currPathLength = currPath.length;
                for (let i = 0; i < currPathLength; i++) {
                    let nextToken = this.LA(i + 1);
                    if (tokenMatcher(nextToken, currPath[i]) === false) {
                        // mismatch in current path
                        // try the next pth
                        continue nextPath;
                    }
                }
                // found a full path that matches.
                return true;
            }
            // none of the paths matched
            return false;
        };
    }
}
class lookahead_RestDefinitionFinderWalker extends rest_RestWalker {
    constructor(topProd, targetOccurrence, targetProdType) {
        super();
        this.topProd = topProd;
        this.targetOccurrence = targetOccurrence;
        this.targetProdType = targetProdType;
    }
    startWalking() {
        this.walk(this.topProd);
        return this.restDef;
    }
    checkIsTarget(node, expectedProdType, currRest, prevRest) {
        if (node.idx === this.targetOccurrence &&
            this.targetProdType === expectedProdType) {
            this.restDef = currRest.concat(prevRest);
            return true;
        }
        // performance optimization, do not iterate over the entire Grammar ast after we have found the target
        return false;
    }
    walkOption(optionProd, currRest, prevRest) {
        if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
            super.walkOption(optionProd, currRest, prevRest);
        }
    }
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
            super.walkOption(atLeastOneProd, currRest, prevRest);
        }
    }
    walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
            super.walkOption(atLeastOneSepProd, currRest, prevRest);
        }
    }
    walkMany(manyProd, currRest, prevRest) {
        if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
            super.walkOption(manyProd, currRest, prevRest);
        }
    }
    walkManySep(manySepProd, currRest, prevRest) {
        if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
            super.walkOption(manySepProd, currRest, prevRest);
        }
    }
}
/**
 * Returns the definition of a target production in a top level level rule.
 */
class lookahead_InsideDefinitionFinderVisitor extends gast_visitor_public_GAstVisitor {
    constructor(targetOccurrence, targetProdType) {
        super();
        this.targetOccurrence = targetOccurrence;
        this.targetProdType = targetProdType;
        this.result = [];
    }
    checkIsTarget(node, expectedProdName) {
        if (node.idx === this.targetOccurrence &&
            this.targetProdType === expectedProdName) {
            this.result = node.definition;
        }
    }
    visitOption(node) {
        this.checkIsTarget(node, PROD_TYPE.OPTION);
    }
    visitRepetition(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION);
    }
    visitRepetitionMandatory(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
    }
    visitRepetitionMandatoryWithSeparator(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
    }
    visitRepetitionWithSeparator(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
    }
    visitAlternation(node) {
        this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
    }
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
    function getOtherPaths(pathsAndSuffixes, filterIdx) {
        return Object(utils["O" /* reduce */])(pathsAndSuffixes, (result, currPathsAndSuffixes, currIdx) => {
            if (currIdx !== filterIdx) {
                let currPartialPaths = Object(utils["I" /* map */])(currPathsAndSuffixes, singlePathAndSuffix => singlePathAndSuffix.partialPath);
                return result.concat(currPartialPaths);
            }
            return result;
        }, []);
    }
    function isUniquePrefix(arr, item) {
        return (Object(utils["q" /* find */])(arr, currOtherPath => {
            return Object(utils["o" /* every */])(item, (currPathTok, idx) => {
                return possibleTokenTypeMatch(currPathTok, currOtherPath[idx]);
            });
        }) === undefined);
    }
    function possibleTokenTypeMatch(tokTypeA, tokTypeB) {
        return (tokTypeA === tokTypeB ||
            (tokTypeA &&
                tokTypeB &&
                (tokTypeA.categoryMatchesMap[tokTypeB.tokenTypeIdx] ||
                    tokTypeB.categoryMatchesMap[tokTypeA.tokenTypeIdx])));
    }
    function initializeArrayOfArrays(size) {
        let result = [];
        for (let i = 0; i < size; i++) {
            result.push([]);
        }
        return result;
    }
    let partialAlts = Object(utils["I" /* map */])(altsDefs, currAlt => possiblePathsFrom([currAlt], 1));
    let finalResult = initializeArrayOfArrays(partialAlts.length);
    let newData = partialAlts;
    // maxLookahead loop
    for (let pathLength = 1; pathLength <= k; pathLength++) {
        let currDataset = newData;
        newData = initializeArrayOfArrays(currDataset.length);
        // alternatives loop
        for (let resultIdx = 0; resultIdx < currDataset.length; resultIdx++) {
            let currAltPathsAndSuffixes = currDataset[resultIdx];
            let otherPaths = getOtherPaths(currDataset, resultIdx);
            // paths in current alternative loop
            for (let currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
                let currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
                let suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
                let isUnique = isUniquePrefix(otherPaths, currPathPrefix);
                // even if a path is not unique, but there are no longer alternatives to try
                // or if we have reached the maximum lookahead (k) permitted.
                if (isUnique ||
                    Object(utils["A" /* isEmpty */])(suffixDef) ||
                    currPathPrefix.length === k) {
                    let currAltResult = finalResult[resultIdx];
                    if (!containsPath(currAltResult, currPathPrefix)) {
                        currAltResult.push(currPathPrefix);
                    }
                }
                else {
                    let newPartialPathsAndSuffixes = possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);
                    newData[resultIdx] = newData[resultIdx].concat(newPartialPathsAndSuffixes);
                }
            }
        }
    }
    return finalResult;
}
function getLookaheadPathsForOr(occurrence, ruleGrammar, k) {
    let visitor = new lookahead_InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION);
    ruleGrammar.accept(visitor);
    return lookAheadSequenceFromAlternatives(visitor.result, k);
}
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
    let insideDefVisitor = new lookahead_InsideDefinitionFinderVisitor(occurrence, prodType);
    ruleGrammar.accept(insideDefVisitor);
    let insideDef = insideDefVisitor.result;
    let afterDefWalker = new lookahead_RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
    let afterDef = afterDefWalker.startWalking();
    let insideFlat = new gast_public_Flat({ definition: insideDef });
    let afterFlat = new gast_public_Flat({ definition: afterDef });
    return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
}
function containsPath(alternative, path) {
    let found = Object(utils["q" /* find */])(alternative, otherPath => {
        return (path.length === otherPath.length &&
            Object(utils["o" /* every */])(path, (targetItem, idx) => {
                // TODO: take categories into account here too?
                return (targetItem === otherPath[idx] ||
                    otherPath[idx].categoryMatchesMap[targetItem.tokenTypeIdx]);
            }));
    });
    return found !== undefined;
}
function isStrictPrefixOfPath(prefix, other) {
    return (prefix.length < other.length &&
        Object(utils["o" /* every */])(prefix, (tokType, idx) => {
            const otherTokType = other[idx];
            return (tokType === otherTokType ||
                otherTokType.categoryMatchesMap[tokType.tokenTypeIdx]);
        }));
}
function areTokenCategoriesNotUsed(lookAheadPaths) {
    return Object(utils["o" /* every */])(lookAheadPaths, singleAltPaths => Object(utils["o" /* every */])(singleAltPaths, singlePath => Object(utils["o" /* every */])(singlePath, token => Object(utils["A" /* isEmpty */])(token.categoryMatches))));
}
//# sourceMappingURL=lookahead.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/checks.js










function validateGrammar(topLevels, maxLookahead, tokenTypes, ignoredIssues, errMsgProvider, grammarName) {
    let duplicateErrors = utils["I" /* map */](topLevels, currTopLevel => validateDuplicateProductions(currTopLevel, errMsgProvider));
    let leftRecursionErrors = utils["I" /* map */](topLevels, currTopRule => validateNoLeftRecursion(currTopRule, currTopRule, errMsgProvider));
    let emptyAltErrors = [];
    let ambiguousAltsErrors = [];
    let emptyRepetitionErrors = [];
    // left recursion could cause infinite loops in the following validations.
    // It is safest to first have the user fix the left recursion errors first and only then examine Further issues.
    if (Object(utils["o" /* every */])(leftRecursionErrors, utils["A" /* isEmpty */])) {
        emptyAltErrors = Object(utils["I" /* map */])(topLevels, currTopRule => validateEmptyOrAlternative(currTopRule, errMsgProvider));
        ambiguousAltsErrors = Object(utils["I" /* map */])(topLevels, currTopRule => validateAmbiguousAlternationAlternatives(currTopRule, maxLookahead, ignoredIssues, errMsgProvider));
        emptyRepetitionErrors = validateSomeNonEmptyLookaheadPath(topLevels, maxLookahead, errMsgProvider);
    }
    let termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
    let tokenNameErrors = utils["I" /* map */](tokenTypes, currTokType => validateTokenName(currTokType, errMsgProvider));
    let nestedRulesNameErrors = validateNestedRulesNames(topLevels, errMsgProvider);
    let nestedRulesDuplicateErrors = validateDuplicateNestedRules(topLevels, errMsgProvider);
    const tooManyAltsErrors = Object(utils["I" /* map */])(topLevels, curRule => validateTooManyAlts(curRule, errMsgProvider));
    const ruleNameErrors = Object(utils["I" /* map */])(topLevels, curRule => validateRuleName(curRule, errMsgProvider));
    const duplicateRulesError = Object(utils["I" /* map */])(topLevels, curRule => validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider));
    return (utils["t" /* flatten */](duplicateErrors.concat(tokenNameErrors, nestedRulesNameErrors, nestedRulesDuplicateErrors, emptyRepetitionErrors, leftRecursionErrors, emptyAltErrors, ambiguousAltsErrors, termsNamespaceConflictErrors, tooManyAltsErrors, ruleNameErrors, duplicateRulesError)));
}
function validateNestedRulesNames(topLevels, errMsgProvider) {
    let result = [];
    Object(utils["u" /* forEach */])(topLevels, curTopLevel => {
        let namedCollectorVisitor = new cst_NamedDSLMethodsCollectorVisitor("");
        curTopLevel.accept(namedCollectorVisitor);
        let nestedProds = Object(utils["I" /* map */])(namedCollectorVisitor.result, currItem => currItem.orgProd);
        result.push(Object(utils["I" /* map */])(nestedProds, currNestedProd => validateNestedRuleName(curTopLevel, currNestedProd, errMsgProvider)));
    });
    return Object(utils["t" /* flatten */])(result);
}
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
    let collectorVisitor = new checks_OccurrenceValidationCollector();
    topLevelRule.accept(collectorVisitor);
    let allRuleProductions = collectorVisitor.allProductions;
    let productionGroups = utils["v" /* groupBy */](allRuleProductions, identifyProductionForDuplicates);
    let duplicates = utils["N" /* pick */](productionGroups, currGroup => {
        return currGroup.length > 1;
    });
    let errors = utils["I" /* map */](utils["U" /* values */](duplicates), (currDuplicates) => {
        let firstProd = utils["s" /* first */](currDuplicates);
        let msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
        let dslName = getProductionDslName(firstProd);
        let defError = {
            message: msg,
            type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
            ruleName: topLevelRule.name,
            dslName: dslName,
            occurrence: firstProd.idx
        };
        let param = checks_getExtraProductionArgument(firstProd);
        if (param) {
            defError.parameter = param;
        }
        return defError;
    });
    return errors;
}
function identifyProductionForDuplicates(prod) {
    return `${getProductionDslName(prod)}_#_${prod.idx}_#_${checks_getExtraProductionArgument(prod)}`;
}
function checks_getExtraProductionArgument(prod) {
    if (prod instanceof gast_public_Terminal) {
        return tokens_public_tokenName(prod.terminalType);
    }
    else if (prod instanceof gast_public_NonTerminal) {
        return prod.nonTerminalName;
    }
    else {
        return "";
    }
}
class checks_OccurrenceValidationCollector extends gast_visitor_public_GAstVisitor {
    constructor() {
        super(...arguments);
        this.allProductions = [];
    }
    visitNonTerminal(subrule) {
        this.allProductions.push(subrule);
    }
    visitOption(option) {
        this.allProductions.push(option);
    }
    visitRepetitionWithSeparator(manySep) {
        this.allProductions.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.allProductions.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.allProductions.push(many);
    }
    visitAlternation(or) {
        this.allProductions.push(or);
    }
    visitTerminal(terminal) {
        this.allProductions.push(terminal);
    }
}
const validTermsPattern = /^[a-zA-Z_]\w*$/;
const validNestedRuleName = new RegExp(validTermsPattern.source.replace("^", "^\\$"));
function validateRuleName(rule, errMsgProvider) {
    const errors = [];
    const ruleName = rule.name;
    if (!ruleName.match(validTermsPattern)) {
        errors.push({
            message: errMsgProvider.buildInvalidRuleNameError({
                topLevelRule: rule,
                expectedPattern: validTermsPattern
            }),
            type: ParserDefinitionErrorType.INVALID_RULE_NAME,
            ruleName: ruleName
        });
    }
    return errors;
}
function validateNestedRuleName(topLevel, nestedProd, errMsgProvider) {
    let errors = [];
    let errMsg;
    if (!nestedProd.name.match(validNestedRuleName)) {
        errMsg = errMsgProvider.buildInvalidNestedRuleNameError(topLevel, nestedProd);
        errors.push({
            message: errMsg,
            type: ParserDefinitionErrorType.INVALID_NESTED_RULE_NAME,
            ruleName: topLevel.name
        });
    }
    return errors;
}
function validateTokenName(tokenType, errMsgProvider) {
    const errors = [];
    const tokTypeName = tokens_public_tokenName(tokenType);
    if (!tokTypeName.match(validTermsPattern)) {
        errors.push({
            message: errMsgProvider.buildTokenNameError({
                tokenType: tokenType,
                expectedPattern: validTermsPattern
            }),
            type: ParserDefinitionErrorType.INVALID_TOKEN_NAME
        });
    }
    return errors;
}
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
    let errors = [];
    const occurrences = Object(utils["O" /* reduce */])(allRules, (result, curRule) => {
        if (curRule.name === rule.name) {
            return result + 1;
        }
        return result;
    }, 0);
    if (occurrences > 1) {
        const errMsg = errMsgProvider.buildDuplicateRuleNameError({
            topLevelRule: rule,
            grammarName: className
        });
        errors.push({
            message: errMsg,
            type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
            ruleName: rule.name
        });
    }
    return errors;
}
// TODO: is there anyway to get only the rule names of rules inherited from the super grammars?
// This is not part of the IGrammarErrorProvider because the validation cannot be performed on
// The grammar structure, only at runtime.
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
    let errors = [];
    let errMsg;
    if (!utils["j" /* contains */](definedRulesNames, ruleName)) {
        errMsg =
            `Invalid rule override, rule: ->${ruleName}<- cannot be overridden in the grammar: ->${className}<-` +
                `as it is not defined in any of the super grammars `;
        errors.push({
            message: errMsg,
            type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
            ruleName: ruleName
        });
    }
    return errors;
}
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path = []) {
    let errors = [];
    let nextNonTerminals = getFirstNoneTerminal(currRule.definition);
    if (utils["A" /* isEmpty */](nextNonTerminals)) {
        return [];
    }
    else {
        let ruleName = topRule.name;
        let foundLeftRecursion = utils["j" /* contains */](nextNonTerminals, topRule);
        if (foundLeftRecursion) {
            errors.push({
                message: errMsgProvider.buildLeftRecursionError({
                    topLevelRule: topRule,
                    leftRecursionPath: path
                }),
                type: ParserDefinitionErrorType.LEFT_RECURSION,
                ruleName: ruleName
            });
        }
        // we are only looking for cyclic paths leading back to the specific topRule
        // other cyclic paths are ignored, we still need this difference to avoid infinite loops...
        let validNextSteps = utils["l" /* difference */](nextNonTerminals, path.concat([topRule]));
        let errorsFromNextSteps = utils["I" /* map */](validNextSteps, currRefRule => {
            let newPath = utils["g" /* cloneArr */](path);
            newPath.push(currRefRule);
            return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
        });
        return errors.concat(utils["t" /* flatten */](errorsFromNextSteps));
    }
}
function getFirstNoneTerminal(definition) {
    let result = [];
    if (utils["A" /* isEmpty */](definition)) {
        return result;
    }
    let firstProd = utils["s" /* first */](definition);
    /* istanbul ignore else */
    if (firstProd instanceof gast_public_NonTerminal) {
        result.push(firstProd.referencedRule);
    }
    else if (firstProd instanceof gast_public_Flat ||
        firstProd instanceof gast_public_Option ||
        firstProd instanceof gast_public_RepetitionMandatory ||
        firstProd instanceof gast_public_RepetitionMandatoryWithSeparator ||
        firstProd instanceof gast_public_RepetitionWithSeparator ||
        firstProd instanceof gast_public_Repetition) {
        result = result.concat(getFirstNoneTerminal(firstProd.definition));
    }
    else if (firstProd instanceof gast_public_Alternation) {
        // each sub definition in alternation is a FLAT
        result = utils["t" /* flatten */](utils["I" /* map */](firstProd.definition, currSubDef => getFirstNoneTerminal(currSubDef.definition)));
    }
    else if (firstProd instanceof gast_public_Terminal) {
        // nothing to see, move along
    }
    else {
        throw Error("non exhaustive match");
    }
    let isFirstOptional = isOptionalProd(firstProd);
    let hasMore = definition.length > 1;
    if (isFirstOptional && hasMore) {
        let rest = utils["m" /* drop */](definition);
        return result.concat(getFirstNoneTerminal(rest));
    }
    else {
        return result;
    }
}
class checks_OrCollector extends gast_visitor_public_GAstVisitor {
    constructor() {
        super(...arguments);
        this.alternations = [];
    }
    visitAlternation(node) {
        this.alternations.push(node);
    }
}
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
    let orCollector = new checks_OrCollector();
    topLevelRule.accept(orCollector);
    let ors = orCollector.alternations;
    let errors = utils["O" /* reduce */](ors, (errors, currOr) => {
        let exceptLast = utils["n" /* dropRight */](currOr.definition);
        let currErrors = utils["I" /* map */](exceptLast, (currAlternative, currAltIdx) => {
            const possibleFirstInAlt = nextPossibleTokensAfter([currAlternative], [], null, 1);
            if (utils["A" /* isEmpty */](possibleFirstInAlt)) {
                return {
                    message: errMsgProvider.buildEmptyAlternationError({
                        topLevelRule: topLevelRule,
                        alternation: currOr,
                        emptyChoiceIdx: currAltIdx
                    }),
                    type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
                    ruleName: topLevelRule.name,
                    occurrence: currOr.idx,
                    alternative: currAltIdx + 1
                };
            }
            else {
                return null;
            }
        });
        return errors.concat(utils["i" /* compact */](currErrors));
    }, []);
    return errors;
}
function validateAmbiguousAlternationAlternatives(topLevelRule, maxLookahead, ignoredIssues, errMsgProvider) {
    let orCollector = new checks_OrCollector();
    topLevelRule.accept(orCollector);
    let ors = orCollector.alternations;
    let ignoredIssuesForCurrentRule = ignoredIssues[topLevelRule.name];
    if (ignoredIssuesForCurrentRule) {
        ors = Object(utils["P" /* reject */])(ors, currOr => ignoredIssuesForCurrentRule[getProductionDslName(currOr) +
            (currOr.idx === 0 ? "" : currOr.idx)]);
    }
    let errors = utils["O" /* reduce */](ors, (result, currOr) => {
        let currOccurrence = currOr.idx;
        let alternatives = getLookaheadPathsForOr(currOccurrence, topLevelRule, maxLookahead);
        let altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        let altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        return result.concat(altsAmbiguityErrors, altsPrefixAmbiguityErrors);
    }, []);
    return errors;
}
class checks_RepetionCollector extends gast_visitor_public_GAstVisitor {
    constructor() {
        super(...arguments);
        this.allProductions = [];
    }
    visitRepetitionWithSeparator(manySep) {
        this.allProductions.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.allProductions.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.allProductions.push(many);
    }
}
function validateTooManyAlts(topLevelRule, errMsgProvider) {
    let orCollector = new checks_OrCollector();
    topLevelRule.accept(orCollector);
    let ors = orCollector.alternations;
    let errors = utils["O" /* reduce */](ors, (errors, currOr) => {
        if (currOr.definition.length > 255) {
            errors.push({
                message: errMsgProvider.buildTooManyAlternativesError({
                    topLevelRule: topLevelRule,
                    alternation: currOr
                }),
                type: ParserDefinitionErrorType.TOO_MANY_ALTS,
                ruleName: topLevelRule.name,
                occurrence: currOr.idx
            });
        }
        return errors;
    }, []);
    return errors;
}
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
    let errors = [];
    Object(utils["u" /* forEach */])(topLevelRules, currTopRule => {
        let collectorVisitor = new checks_RepetionCollector();
        currTopRule.accept(collectorVisitor);
        let allRuleProductions = collectorVisitor.allProductions;
        Object(utils["u" /* forEach */])(allRuleProductions, currProd => {
            let prodType = getProdType(currProd);
            let currOccurrence = currProd.idx;
            let paths = getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, maxLookahead);
            let pathsInsideProduction = paths[0];
            if (Object(utils["A" /* isEmpty */])(Object(utils["t" /* flatten */])(pathsInsideProduction))) {
                const errMsg = errMsgProvider.buildEmptyRepetitionError({
                    topLevelRule: currTopRule,
                    repetition: currProd
                });
                errors.push({
                    message: errMsg,
                    type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
                    ruleName: currTopRule.name
                });
            }
        });
    });
    return errors;
}
function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    let foundAmbiguousPaths = [];
    let identicalAmbiguities = Object(utils["O" /* reduce */])(alternatives, (result, currAlt, currAltIdx) => {
        Object(utils["u" /* forEach */])(currAlt, currPath => {
            let altsCurrPathAppearsIn = [currAltIdx];
            Object(utils["u" /* forEach */])(alternatives, (currOtherAlt, currOtherAltIdx) => {
                if (currAltIdx !== currOtherAltIdx &&
                    containsPath(currOtherAlt, currPath)) {
                    altsCurrPathAppearsIn.push(currOtherAltIdx);
                }
            });
            if (altsCurrPathAppearsIn.length > 1 &&
                !containsPath(foundAmbiguousPaths, currPath)) {
                foundAmbiguousPaths.push(currPath);
                result.push({
                    alts: altsCurrPathAppearsIn,
                    path: currPath
                });
            }
        });
        return result;
    }, []);
    let currErrors = utils["I" /* map */](identicalAmbiguities, currAmbDescriptor => {
        let ambgIndices = Object(utils["I" /* map */])(currAmbDescriptor.alts, currAltIdx => currAltIdx + 1);
        const currMessage = errMsgProvider.buildAlternationAmbiguityError({
            topLevelRule: rule,
            alternation: alternation,
            ambiguityIndices: ambgIndices,
            prefixPath: currAmbDescriptor.path
        });
        return {
            message: currMessage,
            type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
            ruleName: rule.name,
            occurrence: alternation.idx,
            alternatives: [currAmbDescriptor.alts]
        };
    });
    return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    let errors = [];
    // flatten
    let pathsAndIndices = Object(utils["O" /* reduce */])(alternatives, (result, currAlt, idx) => {
        let currPathsAndIdx = Object(utils["I" /* map */])(currAlt, currPath => {
            return { idx: idx, path: currPath };
        });
        return result.concat(currPathsAndIdx);
    }, []);
    Object(utils["u" /* forEach */])(pathsAndIndices, currPathAndIdx => {
        let targetIdx = currPathAndIdx.idx;
        let targetPath = currPathAndIdx.path;
        let prefixAmbiguitiesPathsAndIndices = Object(utils["r" /* findAll */])(pathsAndIndices, searchPathAndIdx => {
            // prefix ambiguity can only be created from lower idx (higher priority) path
            return (searchPathAndIdx.idx < targetIdx &&
                // checking for strict prefix because identical lookaheads
                // will be be detected using a different validation.
                isStrictPrefixOfPath(searchPathAndIdx.path, targetPath));
        });
        let currPathPrefixErrors = Object(utils["I" /* map */])(prefixAmbiguitiesPathsAndIndices, currAmbPathAndIdx => {
            let ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
            const occurrence = alternation.idx === 0 ? "" : alternation.idx;
            const message = errMsgProvider.buildAlternationPrefixAmbiguityError({
                topLevelRule: rule,
                alternation: alternation,
                ambiguityIndices: ambgIndices,
                prefixPath: currAmbPathAndIdx.path
            });
            return {
                message: message,
                type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
                ruleName: rule.name,
                occurrence: occurrence,
                alternatives: ambgIndices
            };
        });
        errors = errors.concat(currPathPrefixErrors);
    });
    return errors;
}
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
    let errors = [];
    let tokenNames = Object(utils["I" /* map */])(tokenTypes, currToken => tokens_public_tokenName(currToken));
    Object(utils["u" /* forEach */])(topLevels, currRule => {
        const currRuleName = currRule.name;
        if (Object(utils["j" /* contains */])(tokenNames, currRuleName)) {
            let errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
            errors.push({
                message: errMsg,
                type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
                ruleName: currRuleName
            });
        }
    });
    return errors;
}
function validateDuplicateNestedRules(topLevelRules, errMsgProvider) {
    let errors = [];
    Object(utils["u" /* forEach */])(topLevelRules, currTopRule => {
        let namedCollectorVisitor = new cst_NamedDSLMethodsCollectorVisitor("");
        currTopRule.accept(namedCollectorVisitor);
        let prodsByGroup = Object(utils["v" /* groupBy */])(namedCollectorVisitor.result, item => item.name);
        let duplicates = Object(utils["N" /* pick */])(prodsByGroup, currGroup => {
            return currGroup.length > 1;
        });
        Object(utils["u" /* forEach */])(Object(utils["U" /* values */])(duplicates), (currDupGroup) => {
            const currDupProds = Object(utils["I" /* map */])(currDupGroup, dupGroup => dupGroup.orgProd);
            const errMsg = errMsgProvider.buildDuplicateNestedRuleNameError(currTopRule, currDupProds);
            errors.push({
                message: errMsg,
                type: ParserDefinitionErrorType.DUPLICATE_NESTED_NAME,
                ruleName: currTopRule.name
            });
        });
    });
    return errors;
}
//# sourceMappingURL=checks.js.map
// CONCATENATED MODULE: ./es6/src/parse/errors_public.js








const defaultParserErrorProvider = {
    buildMismatchTokenMessage({ expected, actual, previous, ruleName }) {
        let hasLabel = hasTokenLabel(expected);
        let expectedMsg = hasLabel
            ? `--> ${tokenLabel(expected)} <--`
            : `token of type --> ${tokens_public_tokenName(expected)} <--`;
        let msg = `Expecting ${expectedMsg} but found --> '${actual.image}' <--`;
        return msg;
    },
    buildNotAllInputParsedMessage({ firstRedundant, ruleName }) {
        return ("Redundant input, expecting EOF but found: " + firstRedundant.image);
    },
    buildNoViableAltMessage({ expectedPathsPerAlt, actual, previous, customUserDescription, ruleName }) {
        let errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        let actualText = Object(utils["s" /* first */])(actual).image;
        let errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
        }
        else {
            let allLookAheadPaths = Object(utils["O" /* reduce */])(expectedPathsPerAlt, (result, currAltPaths) => result.concat(currAltPaths), []);
            let nextValidTokenSequences = Object(utils["I" /* map */])(allLookAheadPaths, currPath => `[${Object(utils["I" /* map */])(currPath, currTokenType => tokenLabel(currTokenType)).join(", ")}]`);
            let nextValidSequenceItems = Object(utils["I" /* map */])(nextValidTokenSequences, (itemMsg, idx) => `  ${idx + 1}. ${itemMsg}`);
            let calculatedDescription = `one of these possible Token sequences:\n${nextValidSequenceItems.join("\n")}`;
            return errPrefix + calculatedDescription + errSuffix;
        }
    },
    buildEarlyExitMessage({ expectedIterationPaths, actual, customUserDescription, ruleName }) {
        let errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        let actualText = Object(utils["s" /* first */])(actual).image;
        let errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
        }
        else {
            let nextValidTokenSequences = Object(utils["I" /* map */])(expectedIterationPaths, currPath => `[${Object(utils["I" /* map */])(currPath, currTokenType => tokenLabel(currTokenType)).join(",")}]`);
            let calculatedDescription = `expecting at least one iteration which starts with one of these possible Token sequences::\n  ` +
                `<${nextValidTokenSequences.join(" ,")}>`;
            return errPrefix + calculatedDescription + errSuffix;
        }
    }
};
Object.freeze(defaultParserErrorProvider);
const defaultGrammarResolverErrorProvider = {
    buildRuleNotFoundError(topLevelRule, undefinedRule) {
        const msg = "Invalid grammar, reference to a rule which is not defined: ->" +
            undefinedRule.nonTerminalName +
            "<-\n" +
            "inside top level rule: ->" +
            topLevelRule.name +
            "<-";
        return msg;
    }
};
const defaultGrammarValidatorErrorProvider = {
    buildDuplicateFoundError(topLevelRule, duplicateProds) {
        function getExtraProductionArgument(prod) {
            if (prod instanceof gast_public_Terminal) {
                return tokens_public_tokenName(prod.terminalType);
            }
            else if (prod instanceof gast_public_NonTerminal) {
                return prod.nonTerminalName;
            }
            else {
                return "";
            }
        }
        const topLevelName = topLevelRule.name;
        const duplicateProd = Object(utils["s" /* first */])(duplicateProds);
        const index = duplicateProd.idx;
        const dslName = getProductionDslName(duplicateProd);
        let extraArgument = getExtraProductionArgument(duplicateProd);
        let msg = `->${dslName}<- with numerical suffix: ->${index}<-
                  ${extraArgument ? `and argument: ->${extraArgument}<-` : ""}
                  appears more than once (${duplicateProds.length} times) in the top level rule: ->${topLevelName}<-.
                  ${index === 0
            ? `Also note that numerical suffix 0 means ${dslName} without any suffix.`
            : ""}
                  To fix this make sure each usage of ${dslName} ${extraArgument ? `with the argument: ->${extraArgument}<-` : ""}
                  in the rule ->${topLevelName}<- has a different occurrence index (0-5), as that combination acts as a unique
                  position key in the grammar, which is needed by the parsing engine.
                  
                  For further details see: https://sap.github.io/chevrotain/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
        // white space trimming time! better to trim afterwards as it allows to use WELL formatted multi line template strings...
        msg = msg.replace(/[ \t]+/g, " ");
        msg = msg.replace(/\s\s+/g, "\n");
        return msg;
    },
    buildInvalidNestedRuleNameError(topLevelRule, nestedProd) {
        const msg = `Invalid nested rule name: ->${nestedProd.name}<- inside rule: ->${topLevelRule.name}<-\n` +
            `it must match the pattern: ->${validNestedRuleName.toString()}<-.\n` +
            `Note that this means a nested rule name must start with the '$'(dollar) sign.`;
        return msg;
    },
    buildDuplicateNestedRuleNameError(topLevelRule, nestedProd) {
        const duplicateName = Object(utils["s" /* first */])(nestedProd).name;
        const errMsg = `Duplicate nested rule name: ->${duplicateName}<- inside rule: ->${topLevelRule.name}<-\n` +
            `A nested name must be unique in the scope of a top level grammar rule.`;
        return errMsg;
    },
    buildNamespaceConflictError(rule) {
        const errMsg = `Namespace conflict found in grammar.\n` +
            `The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${rule.name}>.\n` +
            `To resolve this make sure each Terminal and Non-Terminal names are unique\n` +
            `This is easy to accomplish by using the convention that Terminal names start with an uppercase letter\n` +
            `and Non-Terminal names start with a lower case letter.`;
        return errMsg;
    },
    buildAlternationPrefixAmbiguityError(options) {
        const pathMsg = Object(utils["I" /* map */])(options.prefixPath, currTok => tokenLabel(currTok)).join(", ");
        const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        const errMsg = `Ambiguous alternatives: <${options.ambiguityIndices.join(" ,")}> due to common lookahead prefix\n` +
            `in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,\n` +
            `<${pathMsg}> may appears as a prefix path in all these alternatives.\n` +
            `https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\n` +
            `For Further details.`;
        return errMsg;
    },
    buildAlternationAmbiguityError(options) {
        let pathMsg = Object(utils["I" /* map */])(options.prefixPath, currtok => tokenLabel(currtok)).join(", ");
        let occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        let currMessage = `Ambiguous alternatives: <${options.ambiguityIndices.join(" ,")}> in <OR${occurrence}>` +
            ` inside <${options.topLevelRule.name}> Rule,\n` +
            `<${pathMsg}> may appears as a prefix path in all these alternatives.\n`;
        let docs_version = VERSION.replace(/\./g, "_");
        // Should this information be on the error message or in some common errors docs?
        currMessage =
            currMessage +
                "To Resolve this, try one of of the following: \n" +
                `1. Refactor your grammar to be LL(K) for the current value of k (by default k=${DEFAULT_PARSER_CONFIG.maxLookahead}})\n` +
                "2. Increase the value of K for your grammar by providing a larger 'maxLookahead' value in the parser's config\n" +
                "3. This issue can be ignored (if you know what you are doing...), see" +
                " https://sap.github.io/chevrotain/documentation/" +
                docs_version +
                "/interfaces/iparserconfig.html#ignoredissues for more" +
                " details\n";
        return currMessage;
    },
    buildEmptyRepetitionError(options) {
        let dslName = getProductionDslName(options.repetition);
        if (options.repetition.idx !== 0) {
            dslName += options.repetition.idx;
        }
        const errMsg = `The repetition <${dslName}> within Rule <${options.topLevelRule.name}> can never consume any tokens.\n` +
            `This could lead to an infinite loop.`;
        return errMsg;
    },
    buildTokenNameError(options) {
        const tokTypeName = tokens_public_tokenName(options.tokenType);
        const errMsg = `Invalid Grammar Token name: ->${tokTypeName}<- it must match the pattern: ->${options.expectedPattern.toString()}<-`;
        return errMsg;
    },
    buildEmptyAlternationError(options) {
        const errMsg = `Ambiguous empty alternative: <${options.emptyChoiceIdx + 1}>` +
            ` in <OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.\n` +
            `Only the last alternative may be an empty alternative.`;
        return errMsg;
    },
    buildTooManyAlternativesError(options) {
        const errMsg = `An Alternation cannot have more than 256 alternatives:\n` +
            `<OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.\n has ${options.alternation.definition.length +
                1} alternatives.`;
        return errMsg;
    },
    buildLeftRecursionError(options) {
        const ruleName = options.topLevelRule.name;
        let pathNames = utils["I" /* map */](options.leftRecursionPath, currRule => currRule.name);
        let leftRecursivePath = `${ruleName} --> ${pathNames
            .concat([ruleName])
            .join(" --> ")}`;
        let errMsg = `Left Recursion found in grammar.\n` +
            `rule: <${ruleName}> can be invoked from itself (directly or indirectly)\n` +
            `without consuming any Tokens. The grammar path that causes this is: \n ${leftRecursivePath}\n` +
            ` To fix this refactor your grammar to remove the left recursion.\n` +
            `see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;
        return errMsg;
    },
    buildInvalidRuleNameError(options) {
        const ruleName = options.topLevelRule.name;
        const expectedPatternString = options.expectedPattern.toString();
        const errMsg = `Invalid grammar rule name: ->${ruleName}<- it must match the pattern: ->${expectedPatternString}<-`;
        return errMsg;
    },
    buildDuplicateRuleNameError(options) {
        let ruleName;
        if (options.topLevelRule instanceof gast_public_Rule) {
            ruleName = options.topLevelRule.name;
        }
        else {
            ruleName = options.topLevelRule;
        }
        const errMsg = `Duplicate definition, rule: ->${ruleName}<- is already defined in the grammar: ->${options.grammarName}<-`;
        return errMsg;
    }
};
//# sourceMappingURL=errors_public.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/resolver.js



function resolveGrammar(topLevels, errMsgProvider) {
    let refResolver = new resolver_GastRefResolverVisitor(topLevels, errMsgProvider);
    refResolver.resolveRefs();
    return refResolver.errors;
}
class resolver_GastRefResolverVisitor extends gast_visitor_public_GAstVisitor {
    constructor(nameToTopRule, errMsgProvider) {
        super();
        this.nameToTopRule = nameToTopRule;
        this.errMsgProvider = errMsgProvider;
        this.errors = [];
    }
    resolveRefs() {
        Object(utils["u" /* forEach */])(this.nameToTopRule.values(), prod => {
            this.currTopLevel = prod;
            prod.accept(this);
        });
    }
    visitNonTerminal(node) {
        let ref = this.nameToTopRule.get(node.nonTerminalName);
        if (!ref) {
            let msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
            this.errors.push({
                message: msg,
                type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
                ruleName: this.currTopLevel.name,
                unresolvedRefName: node.nonTerminalName
            });
        }
        else {
            node.referencedRule = ref;
        }
    }
}
//# sourceMappingURL=resolver.js.map
// CONCATENATED MODULE: ./es6/src/parse/grammar/gast/gast_resolver_public.js






function gast_resolver_public_resolveGrammar(options) {
    options = Object(utils["k" /* defaults */])(options, {
        errMsgProvider: defaultGrammarResolverErrorProvider
    });
    const topRulesTable = new lang_extensions_HashTable();
    Object(utils["u" /* forEach */])(options.rules, rule => {
        topRulesTable.put(rule.name, rule);
    });
    return resolveGrammar(topRulesTable, options.errMsgProvider);
}
function gast_resolver_public_validateGrammar(options) {
    options = Object(utils["k" /* defaults */])(options, {
        errMsgProvider: defaultGrammarValidatorErrorProvider,
        ignoredIssues: {}
    });
    return validateGrammar(options.rules, options.maxLookahead, options.tokenTypes, options.ignoredIssues, options.errMsgProvider, options.grammarName);
}
function assignOccurrenceIndices(options) {
    Object(utils["u" /* forEach */])(options.rules, currRule => {
        const methodsCollector = new gast_DslMethodsCollectorVisitor();
        currRule.accept(methodsCollector);
        Object(utils["u" /* forEach */])(methodsCollector.dslMethods, methods => {
            Object(utils["u" /* forEach */])(methods, (currMethod, arrIdx) => {
                currMethod.idx = arrIdx + 1;
            });
        });
    });
}
//# sourceMappingURL=gast_resolver_public.js.map
// CONCATENATED MODULE: ./es6/src/parse/exceptions_public.js

const MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
const NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
const EARLY_EXIT_EXCEPTION = "EarlyExitException";
const NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
const RECOGNITION_EXCEPTION_NAMES = [
    MISMATCHED_TOKEN_EXCEPTION,
    NO_VIABLE_ALT_EXCEPTION,
    EARLY_EXIT_EXCEPTION,
    NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
// hacks to bypass no support for custom Errors in javascript/typescript
function isRecognitionException(error) {
    // can't do instanceof on hacked custom js exceptions
    return Object(utils["j" /* contains */])(RECOGNITION_EXCEPTION_NAMES, error.name);
}
function MismatchedTokenException(message, token, previousToken) {
    this.name = MISMATCHED_TOKEN_EXCEPTION;
    this.message = message;
    this.token = token;
    this.previousToken = previousToken;
    this.resyncedTokens = [];
}
// must use the "Error.prototype" instead of "new Error"
// because the stack trace points to where "new Error" was invoked"
MismatchedTokenException.prototype = Error.prototype;
function NoViableAltException(message, token, previousToken) {
    this.name = NO_VIABLE_ALT_EXCEPTION;
    this.message = message;
    this.token = token;
    this.previousToken = previousToken;
    this.resyncedTokens = [];
}
NoViableAltException.prototype = Error.prototype;
function NotAllInputParsedException(message, token) {
    this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
    this.message = message;
    this.token = token;
    this.resyncedTokens = [];
}
NotAllInputParsedException.prototype = Error.prototype;
function EarlyExitException(message, token, previousToken) {
    this.name = EARLY_EXIT_EXCEPTION;
    this.message = message;
    this.token = token;
    this.previousToken = previousToken;
    this.resyncedTokens = [];
}
EarlyExitException.prototype = Error.prototype;
//# sourceMappingURL=exceptions_public.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/traits/recoverable.js






const EOF_FOLLOW_KEY = {};
const IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
function InRuleRecoveryException(message) {
    this.name = IN_RULE_RECOVERY_EXCEPTION;
    this.message = message;
}
InRuleRecoveryException.prototype = Error.prototype;
/**
 * This trait is responsible for the error recovery and fault tolerant logic
 */
class recoverable_Recoverable {
    initRecoverable(config) {
        this.firstAfterRepMap = new lang_extensions_HashTable();
        this.resyncFollows = new lang_extensions_HashTable();
        this.recoveryEnabled = Object(utils["w" /* has */])(config, "recoveryEnabled")
            ? config.recoveryEnabled
            : DEFAULT_PARSER_CONFIG.recoveryEnabled;
        // performance optimization, NOOP will be inlined which
        // effectively means that this optional feature does not exist
        // when not used.
        if (this.recoveryEnabled) {
            this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
        }
    }
    getTokenToInsert(tokType) {
        let tokToInsert = createTokenInstance(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
        tokToInsert.isInsertedInRecovery = true;
        return tokToInsert;
    }
    canTokenTypeBeInsertedInRecovery(tokType) {
        return true;
    }
    tryInRepetitionRecovery(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
        // TODO: can the resyncTokenType be cached?
        let reSyncTokType = this.findReSyncTokenType();
        let savedLexerState = this.exportLexerState();
        let resyncedTokens = [];
        let passedResyncPoint = false;
        let nextTokenWithoutResync = this.LA(1);
        let currToken = this.LA(1);
        let generateErrorMessage = () => {
            let previousToken = this.LA(0);
            // we are preemptively re-syncing before an error has been detected, therefor we must reproduce
            // the error that would have been thrown
            let msg = this.errorMessageProvider.buildMismatchTokenMessage({
                expected: expectedTokType,
                actual: nextTokenWithoutResync,
                previous: previousToken,
                ruleName: this.getCurrRuleFullName()
            });
            let error = new MismatchedTokenException(msg, nextTokenWithoutResync, this.LA(0));
            // the first token here will be the original cause of the error, this is not part of the resyncedTokens property.
            error.resyncedTokens = Object(utils["n" /* dropRight */])(resyncedTokens);
            this.SAVE_ERROR(error);
        };
        while (!passedResyncPoint) {
            // re-synced to a point where we can safely exit the repetition/
            if (this.tokenMatcher(currToken, expectedTokType)) {
                generateErrorMessage();
                return; // must return here to avoid reverting the inputIdx
            }
            else if (lookAheadFunc.call(this)) {
                // we skipped enough tokens so we can resync right back into another iteration of the repetition grammar rule
                generateErrorMessage();
                // recursive invocation in other to support multiple re-syncs in the same top level repetition grammar rule
                grammarRule.apply(this, grammarRuleArgs);
                return; // must return here to avoid reverting the inputIdx
            }
            else if (this.tokenMatcher(currToken, reSyncTokType)) {
                passedResyncPoint = true;
            }
            else {
                currToken = this.SKIP_TOKEN();
                this.addToResyncTokens(currToken, resyncedTokens);
            }
        }
        // we were unable to find a CLOSER point to resync inside the Repetition, reset the state.
        // The parsing exception we were trying to prevent will happen in the NEXT parsing step. it may be handled by
        // "between rules" resync recovery later in the flow.
        this.importLexerState(savedLexerState);
    }
    shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck) {
        // Edge case of arriving from a MANY repetition which is stuck
        // Attempting recovery in this case could cause an infinite loop
        if (notStuck === false) {
            return false;
        }
        // arguments to try and perform resync into the next iteration of the many are missing
        if (expectTokAfterLastMatch === undefined || nextTokIdx === undefined) {
            return false;
        }
        // no need to recover, next token is what we expect...
        if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
            return false;
        }
        // error recovery is disabled during backtracking as it can make the parser ignore a valid grammar path
        // and prefer some backtracking path that includes recovered errors.
        if (this.isBackTracking()) {
            return false;
        }
        // if we can perform inRule recovery (single token insertion or deletion) we always prefer that recovery algorithm
        // because if it works, it makes the least amount of changes to the input stream (greedy algorithm)
        //noinspection RedundantIfStatementJS
        if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
            return false;
        }
        return true;
    }
    // Error Recovery functionality
    getFollowsForInRuleRecovery(tokType, tokIdxInRule) {
        let grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
        let follows = this.getNextPossibleTokenTypes(grammarPath);
        return follows;
    }
    tryInRuleRecovery(expectedTokType, follows) {
        if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
            let tokToInsert = this.getTokenToInsert(expectedTokType);
            return tokToInsert;
        }
        if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
            let nextTok = this.SKIP_TOKEN();
            this.consumeToken();
            return nextTok;
        }
        throw new InRuleRecoveryException("sad sad panda");
    }
    canPerformInRuleRecovery(expectedToken, follows) {
        return (this.canRecoverWithSingleTokenInsertion(expectedToken, follows) ||
            this.canRecoverWithSingleTokenDeletion(expectedToken));
    }
    canRecoverWithSingleTokenInsertion(expectedTokType, follows) {
        if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
            return false;
        }
        // must know the possible following tokens to perform single token insertion
        if (Object(utils["A" /* isEmpty */])(follows)) {
            return false;
        }
        let mismatchedTok = this.LA(1);
        let isMisMatchedTokInFollows = Object(utils["q" /* find */])(follows, (possibleFollowsTokType) => {
            return this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
        }) !== undefined;
        return isMisMatchedTokInFollows;
    }
    canRecoverWithSingleTokenDeletion(expectedTokType) {
        let isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
        return isNextTokenWhatIsExpected;
    }
    isInCurrentRuleReSyncSet(tokenTypeIdx) {
        let followKey = this.getCurrFollowKey();
        let currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
        return Object(utils["j" /* contains */])(currentRuleReSyncSet, tokenTypeIdx);
    }
    findReSyncTokenType() {
        let allPossibleReSyncTokTypes = this.flattenFollowSet();
        // this loop will always terminate as EOF is always in the follow stack and also always (virtually) in the input
        let nextToken = this.LA(1);
        let k = 2;
        while (true) {
            let nextTokenType = nextToken.tokenType;
            if (Object(utils["j" /* contains */])(allPossibleReSyncTokTypes, nextTokenType)) {
                return nextTokenType;
            }
            nextToken = this.LA(k);
            k++;
        }
    }
    getCurrFollowKey() {
        // the length is at least one as we always add the ruleName to the stack before invoking the rule.
        if (this.RULE_STACK.length === 1) {
            return EOF_FOLLOW_KEY;
        }
        let currRuleShortName = this.getLastExplicitRuleShortName();
        let currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
        let prevRuleShortName = this.getPreviousExplicitRuleShortName();
        return {
            ruleName: this.shortRuleNameToFullName(currRuleShortName),
            idxInCallingRule: currRuleIdx,
            inRule: this.shortRuleNameToFullName(prevRuleShortName)
        };
    }
    buildFullFollowKeyStack() {
        let explicitRuleStack = this.RULE_STACK;
        let explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
        if (!Object(utils["A" /* isEmpty */])(this.LAST_EXPLICIT_RULE_STACK)) {
            explicitRuleStack = Object(utils["I" /* map */])(this.LAST_EXPLICIT_RULE_STACK, idx => this.RULE_STACK[idx]);
            explicitOccurrenceStack = Object(utils["I" /* map */])(this.LAST_EXPLICIT_RULE_STACK, idx => this.RULE_OCCURRENCE_STACK[idx]);
        }
        // TODO: only iterate over explicit rules here
        return Object(utils["I" /* map */])(explicitRuleStack, (ruleName, idx) => {
            if (idx === 0) {
                return EOF_FOLLOW_KEY;
            }
            return {
                ruleName: this.shortRuleNameToFullName(ruleName),
                idxInCallingRule: explicitOccurrenceStack[idx],
                inRule: this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
            };
        });
    }
    flattenFollowSet() {
        let followStack = Object(utils["I" /* map */])(this.buildFullFollowKeyStack(), currKey => {
            return this.getFollowSetFromFollowKey(currKey);
        });
        return Object(utils["t" /* flatten */])(followStack);
    }
    getFollowSetFromFollowKey(followKey) {
        if (followKey === EOF_FOLLOW_KEY) {
            return [EOF];
        }
        let followName = followKey.ruleName +
            followKey.idxInCallingRule +
            IN +
            followKey.inRule;
        return this.resyncFollows.get(followName);
    }
    // It does not make any sense to include a virtual EOF token in the list of resynced tokens
    // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
    addToResyncTokens(token, resyncTokens) {
        if (!this.tokenMatcher(token, EOF)) {
            resyncTokens.push(token);
        }
        return resyncTokens;
    }
    reSyncTo(tokType) {
        let resyncedTokens = [];
        let nextTok = this.LA(1);
        while (this.tokenMatcher(nextTok, tokType) === false) {
            nextTok = this.SKIP_TOKEN();
            this.addToResyncTokens(nextTok, resyncedTokens);
        }
        // the last token is not part of the error.
        return Object(utils["n" /* dropRight */])(resyncedTokens);
    }
    attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
        // by default this is a NO-OP
        // The actual implementation is with the function(not method) below
    }
    getCurrentGrammarPath(tokType, tokIdxInRule) {
        let pathRuleStack = this.getHumanReadableRuleStack();
        let pathOccurrenceStack = Object(utils["g" /* cloneArr */])(this.RULE_OCCURRENCE_STACK);
        let grammarPath = {
            ruleStack: pathRuleStack,
            occurrenceStack: pathOccurrenceStack,
            lastTok: tokType,
            lastTokOccurrence: tokIdxInRule
        };
        return grammarPath;
    }
    getHumanReadableRuleStack() {
        if (!Object(utils["A" /* isEmpty */])(this.LAST_EXPLICIT_RULE_STACK)) {
            return Object(utils["I" /* map */])(this.LAST_EXPLICIT_RULE_STACK, currIdx => this.shortRuleNameToFullName(this.RULE_STACK[currIdx]));
        }
        else {
            return Object(utils["I" /* map */])(this.RULE_STACK, currShortName => this.shortRuleNameToFullName(currShortName));
        }
    }
}
function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    let key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
    let firstAfterRepInfo = this.firstAfterRepMap.get(key);
    if (firstAfterRepInfo === undefined) {
        let currRuleName = this.getCurrRuleFullName();
        let ruleGrammar = this.getGAstProductions().get(currRuleName);
        let walker = new nextToksWalker(ruleGrammar, prodOccurrence);
        firstAfterRepInfo = walker.startWalking();
        this.firstAfterRepMap.put(key, firstAfterRepInfo);
    }
    let expectTokAfterLastMatch = firstAfterRepInfo.token;
    let nextTokIdx = firstAfterRepInfo.occurrence;
    let isEndOfRule = firstAfterRepInfo.isEndOfRule;
    // special edge case of a TOP most repetition after which the input should END.
    // this will force an attempt for inRule recovery in that scenario.
    if (this.RULE_STACK.length === 1 &&
        isEndOfRule &&
        expectTokAfterLastMatch === undefined) {
        expectTokAfterLastMatch = EOF;
        nextTokIdx = 1;
    }
    if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
        // TODO: performance optimization: instead of passing the original args here, we modify
        // the args param (or create a new one) and make sure the lookahead func is explicitly provided
        // to avoid searching the cache for it once more.
        this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
    }
}
//# sourceMappingURL=recoverable.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/traits/looksahead.js




/**
 * Trait responsible for the lookahead related utilities and optimizations.
 */
class looksahead_LooksAhead {
    initLooksAhead(config) {
        this.dynamicTokensEnabled = Object(utils["w" /* has */])(config, "dynamicTokensEnabled")
            ? config.dynamicTokensEnabled
            : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
        this.maxLookahead = Object(utils["w" /* has */])(config, "maxLookahead")
            ? config.maxLookahead
            : DEFAULT_PARSER_CONFIG.maxLookahead;
        /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */
        this.lookAheadFuncsCache = Object(utils["z" /* isES2015MapSupported */])() ? new Map() : [];
        // Performance optimization on newer engines that support ES6 Map
        // For larger Maps this is slightly faster than using a plain object (array in our case).
        /* istanbul ignore else - The else branch will be tested on older node.js versions and IE11 */
        if (Object(utils["z" /* isES2015MapSupported */])()) {
            this.getLaFuncFromCache = this.getLaFuncFromMap;
            this.setLaFuncCache = this.setLaFuncCacheUsingMap;
        }
        else {
            this.getLaFuncFromCache = this.getLaFuncFromObj;
            this.setLaFuncCache = this.setLaFuncUsingObj;
        }
    }
    lookAheadBuilderForOptional(alt, tokenMatcher, dynamicTokensEnabled) {
        return buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled);
    }
    lookAheadBuilderForAlternatives(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
        return buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled);
    }
    // this actually returns a number, but it is always used as a string (object prop key)
    getKeyForAutomaticLookahead(dslMethodIdx, occurrence) {
        let currRuleShortName = this.getLastExplicitRuleShortName();
        return getKeyForAutomaticLookahead(currRuleShortName, dslMethodIdx, occurrence);
    }
    getLookaheadFuncForOr(occurrence, alts) {
        let key = this.getKeyForAutomaticLookahead(OR_IDX, occurrence);
        let laFunc = this.getLaFuncFromCache(key);
        if (laFunc === undefined) {
            let ruleName = this.getCurrRuleFullName();
            let ruleGrammar = this.getGAstProductions().get(ruleName);
            // note that hasPredicates is only computed once.
            let hasPredicates = Object(utils["Q" /* some */])(alts, currAlt => Object(utils["B" /* isFunction */])(currAlt.GATE));
            laFunc = buildLookaheadFuncForOr(occurrence, ruleGrammar, this.maxLookahead, hasPredicates, this.dynamicTokensEnabled, this.lookAheadBuilderForAlternatives);
            this.setLaFuncCache(key, laFunc);
            return laFunc;
        }
        else {
            return laFunc;
        }
    }
    // Automatic lookahead calculation
    getLookaheadFuncForOption(key, occurrence) {
        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, PROD_TYPE.OPTION);
    }
    getLookaheadFuncForMany(key, occurrence) {
        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, PROD_TYPE.REPETITION);
    }
    getLookaheadFuncForManySep(key, occurrence) {
        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, PROD_TYPE.REPETITION_WITH_SEPARATOR);
    }
    getLookaheadFuncForAtLeastOne(key, occurrence) {
        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, PROD_TYPE.REPETITION_MANDATORY);
    }
    getLookaheadFuncForAtLeastOneSep(key, occurrence) {
        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
    }
    getLookaheadFuncFor(key, occurrence, maxLookahead, prodType) {
        let laFunc = this.getLaFuncFromCache(key);
        if (laFunc === undefined) {
            let ruleName = this.getCurrRuleFullName();
            let ruleGrammar = this.getGAstProductions().get(ruleName);
            laFunc = buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, maxLookahead, this.dynamicTokensEnabled, prodType, this.lookAheadBuilderForOptional);
            this.setLaFuncCache(key, laFunc);
            return laFunc;
        }
        else {
            return laFunc;
        }
    }
    /* istanbul ignore next */
    getLaFuncFromCache(key) {
        return undefined;
    }
    getLaFuncFromMap(key) {
        return this.lookAheadFuncsCache.get(key);
    }
    /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */
    getLaFuncFromObj(key) {
        return this.lookAheadFuncsCache[key];
    }
    /* istanbul ignore next */
    setLaFuncCache(key, value) { }
    setLaFuncCacheUsingMap(key, value) {
        this.lookAheadFuncsCache.set(key, value);
    }
    /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */
    setLaFuncUsingObj(key, value) {
        this.lookAheadFuncsCache[key] = value;
    }
}
//# sourceMappingURL=looksahead.js.map
// CONCATENATED MODULE: ./es6/src/parse/cst/cst_visitor.js



function defaultVisit(ctx, param) {
    let childrenNames = Object(utils["G" /* keys */])(ctx);
    let childrenNamesLength = childrenNames.length;
    for (let i = 0; i < childrenNamesLength; i++) {
        let currChildName = childrenNames[i];
        let currChildArray = ctx[currChildName];
        let currChildArrayLength = currChildArray.length;
        for (let j = 0; j < currChildArrayLength; j++) {
            let currChild = currChildArray[j];
            // distinction between Tokens Children and CstNode children
            if (currChild.tokenTypeIdx === undefined) {
                if (currChild.fullName !== undefined) {
                    this[currChild.fullName](currChild.children, param);
                }
                else {
                    this[currChild.name](currChild.children, param);
                }
            }
        }
    }
    // defaultVisit does not support generic out param
    return undefined;
}
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
    let derivedConstructor = function () { };
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    defineNameProp(derivedConstructor, grammarName + "BaseSemantics");
    let semanticProto = {
        visit: function (cstNode, param) {
            // enables writing more concise visitor methods when CstNode has only a single child
            if (Object(utils["y" /* isArray */])(cstNode)) {
                // A CST Node's children dictionary can never have empty arrays as values
                // If a key is defined there will be at least one element in the corresponding value array.
                cstNode = cstNode[0];
            }
            // enables passing optional CstNodes concisely.
            if (Object(utils["F" /* isUndefined */])(cstNode)) {
                return undefined;
            }
            if (cstNode.fullName !== undefined) {
                return this[cstNode.fullName](cstNode.children, param);
            }
            else {
                return this[cstNode.name](cstNode.children, param);
            }
        },
        validateVisitor: function () {
            let semanticDefinitionErrors = validateVisitor(this, ruleNames);
            if (!Object(utils["A" /* isEmpty */])(semanticDefinitionErrors)) {
                let errorMessages = Object(utils["I" /* map */])(semanticDefinitionErrors, currDefError => currDefError.msg);
                throw Error(`Errors Detected in CST Visitor <${functionName(this.constructor)}>:\n\t` +
                    `${errorMessages.join("\n\n").replace(/\n/g, "\n\t")}`);
            }
        }
    };
    derivedConstructor.prototype = semanticProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    derivedConstructor._RULE_NAMES = ruleNames;
    return derivedConstructor;
}
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
    let derivedConstructor = function () { };
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    defineNameProp(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
    let withDefaultsProto = Object.create(baseConstructor.prototype);
    Object(utils["u" /* forEach */])(ruleNames, ruleName => {
        withDefaultsProto[ruleName] = defaultVisit;
    });
    derivedConstructor.prototype = withDefaultsProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    return derivedConstructor;
}
var CstVisitorDefinitionError;
(function (CstVisitorDefinitionError) {
    CstVisitorDefinitionError[CstVisitorDefinitionError["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
    CstVisitorDefinitionError[CstVisitorDefinitionError["MISSING_METHOD"] = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
function validateVisitor(visitorInstance, ruleNames) {
    let missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
    let redundantErrors = validateRedundantMethods(visitorInstance, ruleNames);
    return missingErrors.concat(redundantErrors);
}
function validateMissingCstMethods(visitorInstance, ruleNames) {
    let errors = Object(utils["I" /* map */])(ruleNames, currRuleName => {
        if (!Object(utils["B" /* isFunction */])(visitorInstance[currRuleName])) {
            return {
                msg: `Missing visitor method: <${currRuleName}> on ${functionName(visitorInstance.constructor)} CST Visitor.`,
                type: CstVisitorDefinitionError.MISSING_METHOD,
                methodName: currRuleName
            };
        }
    });
    return Object(utils["i" /* compact */])(errors);
}
const VALID_PROP_NAMES = ["constructor", "visit", "validateVisitor"];
function validateRedundantMethods(visitorInstance, ruleNames) {
    let errors = [];
    for (let prop in visitorInstance) {
        if (validTermsPattern.test(prop) &&
            Object(utils["B" /* isFunction */])(visitorInstance[prop]) &&
            !Object(utils["j" /* contains */])(VALID_PROP_NAMES, prop) &&
            !Object(utils["j" /* contains */])(ruleNames, prop)) {
            errors.push({
                msg: `Redundant visitor method: <${prop}> on ${functionName(visitorInstance.constructor)} CST Visitor\n` +
                    `There is no Grammar Rule corresponding to this method's name.\n` +
                    `For utility methods on visitor classes use methods names that do not match /${validTermsPattern.source}/.`,
                type: CstVisitorDefinitionError.REDUNDANT_METHOD,
                methodName: prop
            });
        }
    }
    return errors;
}
//# sourceMappingURL=cst_visitor.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/traits/tree_builder.js





/**
 * This trait is responsible for the CST building logic.
 */
class tree_builder_TreeBuilder {
    initTreeBuilder(config) {
        this.LAST_EXPLICIT_RULE_STACK = [];
        this.CST_STACK = [];
        this.outputCst = Object(utils["w" /* has */])(config, "outputCst")
            ? config.outputCst
            : DEFAULT_PARSER_CONFIG.outputCst;
        this.nodeLocationTracking = Object(utils["w" /* has */])(config, "nodeLocationTracking")
            ? config.nodeLocationTracking
            : DEFAULT_PARSER_CONFIG.nodeLocationTracking;
        if (!this.outputCst) {
            this.cstInvocationStateUpdate = utils["b" /* NOOP */];
            this.cstFinallyStateUpdate = utils["b" /* NOOP */];
            this.cstPostTerminal = utils["b" /* NOOP */];
            this.cstPostNonTerminal = utils["b" /* NOOP */];
            this.cstPostRule = utils["b" /* NOOP */];
            this.getLastExplicitRuleShortName = this.getLastExplicitRuleShortNameNoCst;
            this.getPreviousExplicitRuleShortName = this.getPreviousExplicitRuleShortNameNoCst;
            this.getLastExplicitRuleOccurrenceIndex = this.getLastExplicitRuleOccurrenceIndexNoCst;
            this.manyInternal = this.manyInternalNoCst;
            this.orInternal = this.orInternalNoCst;
            this.optionInternal = this.optionInternalNoCst;
            this.atLeastOneInternal = this.atLeastOneInternalNoCst;
            this.manySepFirstInternal = this.manySepFirstInternalNoCst;
            this.atLeastOneSepFirstInternal = this.atLeastOneSepFirstInternalNoCst;
        }
        else {
            if (/full/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = setNodeLocationFull;
                    this.setNodeLocationFromNode = setNodeLocationFull;
                    this.cstPostRule = utils["b" /* NOOP */];
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
                }
                else {
                    this.setNodeLocationFromToken = utils["b" /* NOOP */];
                    this.setNodeLocationFromNode = utils["b" /* NOOP */];
                    this.cstPostRule = this.cstPostRuleFull;
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
                }
            }
            else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = (setNodeLocationOnlyOffset);
                    this.setNodeLocationFromNode = (setNodeLocationOnlyOffset);
                    this.cstPostRule = utils["b" /* NOOP */];
                    this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
                }
                else {
                    this.setNodeLocationFromToken = utils["b" /* NOOP */];
                    this.setNodeLocationFromNode = utils["b" /* NOOP */];
                    this.cstPostRule = this.cstPostRuleOnlyOffset;
                    this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
                }
            }
            else if (/none/i.test(this.nodeLocationTracking)) {
                this.setNodeLocationFromToken = utils["b" /* NOOP */];
                this.setNodeLocationFromNode = utils["b" /* NOOP */];
                this.cstPostRule = utils["b" /* NOOP */];
                this.setInitialNodeLocation = utils["b" /* NOOP */];
            }
            else {
                throw Error(`Invalid <nodeLocationTracking> config option: "${config.nodeLocationTracking}"`);
            }
        }
    }
    setInitialNodeLocationOnlyOffsetRecovery(cstNode) {
        cstNode.location = {
            startOffset: NaN,
            endOffset: NaN
        };
    }
    setInitialNodeLocationOnlyOffsetRegular(cstNode) {
        cstNode.location = {
            // without error recovery the starting Location of a new CstNode is guaranteed
            // To be the next Token's startOffset (for valid inputs).
            // For invalid inputs there won't be any CSTOutput so this potential
            // inaccuracy does not matter
            startOffset: this.LA(1).startOffset,
            endOffset: NaN
        };
    }
    setInitialNodeLocationFullRecovery(cstNode) {
        cstNode.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    }
    /**
     *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work

     * @param cstNode
     */
    setInitialNodeLocationFullRegular(cstNode) {
        const nextToken = this.LA(1);
        cstNode.location = {
            startOffset: nextToken.startOffset,
            startLine: nextToken.startLine,
            startColumn: nextToken.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    }
    // CST
    cstNestedInvocationStateUpdate(nestedName, shortName) {
        const cstNode = {
            name: nestedName,
            fullName: this.shortRuleNameToFull.get(this.getLastExplicitRuleShortName()) + nestedName,
            children: {}
        };
        this.setInitialNodeLocation(cstNode);
        this.CST_STACK.push(cstNode);
    }
    cstInvocationStateUpdate(fullRuleName, shortName) {
        this.LAST_EXPLICIT_RULE_STACK.push(this.RULE_STACK.length - 1);
        const cstNode = {
            name: fullRuleName,
            children: {}
        };
        this.setInitialNodeLocation(cstNode);
        this.CST_STACK.push(cstNode);
    }
    cstFinallyStateUpdate() {
        this.LAST_EXPLICIT_RULE_STACK.pop();
        this.CST_STACK.pop();
    }
    cstNestedFinallyStateUpdate() {
        const lastCstNode = this.CST_STACK.pop();
        // TODO: the naming is bad, this should go directly to the
        //       (correct) cstLocation update method
        //       e.g if we put other logic in postRule...
        this.cstPostRule(lastCstNode);
    }
    cstPostRuleFull(ruleCstNode) {
        const prevToken = this.LA(0);
        const loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode or its nested children.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
            loc.endLine = prevToken.endLine;
            loc.endColumn = prevToken.endColumn;
        }
        // "empty" CstNode edge case
        else {
            loc.startOffset = NaN;
            loc.startLine = NaN;
            loc.startColumn = NaN;
        }
    }
    cstPostRuleOnlyOffset(ruleCstNode) {
        const prevToken = this.LA(0);
        const loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode or its nested children.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
        }
        // "empty" CstNode edge case
        else {
            loc.startOffset = NaN;
        }
    }
    cstPostTerminal(key, consumedToken) {
        const rootCst = this.CST_STACK[this.CST_STACK.length - 1];
        addTerminalToCst(rootCst, consumedToken, key);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromToken(rootCst.location, consumedToken);
    }
    cstPostNonTerminal(ruleCstResult, ruleName) {
        const node = this.CST_STACK[this.CST_STACK.length - 1];
        addNoneTerminalToCst(node, ruleName, ruleCstResult);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromNode(node.location, ruleCstResult.location);
    }
    getBaseCstVisitorConstructor() {
        if (Object(utils["F" /* isUndefined */])(this.baseCstVisitorConstructor)) {
            const newBaseCstVisitorConstructor = createBaseSemanticVisitorConstructor(this.className, this.allRuleNames);
            this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
            return newBaseCstVisitorConstructor;
        }
        return this.baseCstVisitorConstructor;
    }
    getBaseCstVisitorConstructorWithDefaults() {
        if (Object(utils["F" /* isUndefined */])(this.baseCstVisitorWithDefaultsConstructor)) {
            const newConstructor = createBaseVisitorConstructorWithDefaults(this.className, this.allRuleNames, this.getBaseCstVisitorConstructor());
            this.baseCstVisitorWithDefaultsConstructor = newConstructor;
            return newConstructor;
        }
        return this.baseCstVisitorWithDefaultsConstructor;
    }
    nestedRuleBeforeClause(methodOpts, laKey) {
        let nestedName;
        if (methodOpts.NAME !== undefined) {
            nestedName = methodOpts.NAME;
            this.nestedRuleInvocationStateUpdate(nestedName, laKey);
            return nestedName;
        }
        else {
            return undefined;
        }
    }
    nestedAltBeforeClause(methodOpts, occurrence, methodKeyIdx, altIdx) {
        let ruleIdx = this.getLastExplicitRuleShortName();
        let shortName = getKeyForAltIndex(ruleIdx, methodKeyIdx, occurrence, altIdx);
        let nestedName;
        if (methodOpts.NAME !== undefined) {
            nestedName = methodOpts.NAME;
            this.nestedRuleInvocationStateUpdate(nestedName, shortName);
            return {
                shortName,
                nestedName
            };
        }
        else {
            return undefined;
        }
    }
    nestedRuleFinallyClause(laKey, nestedName) {
        let cstStack = this.CST_STACK;
        let nestedRuleCst = cstStack[cstStack.length - 1];
        this.nestedRuleFinallyStateUpdate();
        // this return a different result than the previous invocation because "nestedRuleFinallyStateUpdate" pops the cst stack
        let parentCstNode = cstStack[cstStack.length - 1];
        addNoneTerminalToCst(parentCstNode, nestedName, nestedRuleCst);
        this.setNodeLocationFromNode(parentCstNode.location, nestedRuleCst.location);
    }
    getLastExplicitRuleShortName() {
        let lastExplictIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];
        return this.RULE_STACK[lastExplictIndex];
    }
    getLastExplicitRuleShortNameNoCst() {
        let ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 1];
    }
    getPreviousExplicitRuleShortName() {
        let lastExplicitIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 2];
        return this.RULE_STACK[lastExplicitIndex];
    }
    getPreviousExplicitRuleShortNameNoCst() {
        let ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 2];
    }
    getLastExplicitRuleOccurrenceIndex() {
        let lastExplicitIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];
        return this.RULE_OCCURRENCE_STACK[lastExplicitIndex];
    }
    getLastExplicitRuleOccurrenceIndexNoCst() {
        let occurrenceStack = this.RULE_OCCURRENCE_STACK;
        return occurrenceStack[occurrenceStack.length - 1];
    }
    nestedRuleInvocationStateUpdate(nestedRuleName, shortNameKey) {
        this.RULE_OCCURRENCE_STACK.push(1);
        this.RULE_STACK.push(shortNameKey);
        this.cstNestedInvocationStateUpdate(nestedRuleName, shortNameKey);
    }
    nestedRuleFinallyStateUpdate() {
        this.RULE_STACK.pop();
        this.RULE_OCCURRENCE_STACK.pop();
        // NOOP when cst is disabled
        this.cstNestedFinallyStateUpdate();
    }
}
//# sourceMappingURL=tree_builder.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/traits/lexer_adapter.js

/**
 * Trait responsible abstracting over the interaction with Lexer output (Token vector).
 *
 * This could be generalized to support other kinds of lexers, e.g.
 * - Just in Time Lexing / Lexer-Less parsing.
 * - Streaming Lexer.
 */
class lexer_adapter_LexerAdapter {
    initLexerAdapter() {
        this.tokVector = [];
        this.tokVectorLength = 0;
        this.currIdx = -1;
    }
    set input(newInput) {
        this.reset();
        this.tokVector = newInput;
        this.tokVectorLength = newInput.length;
    }
    get input() {
        return this.tokVector;
    }
    // skips a token and returns the next token
    SKIP_TOKEN() {
        if (this.currIdx <= this.tokVector.length - 2) {
            this.consumeToken();
            return this.LA(1);
        }
        else {
            return END_OF_FILE;
        }
    }
    // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
    // or lexers dependent on parser context.
    LA(howMuch) {
        // does: is this optimization (saving tokVectorLength benefits?)
        if (this.currIdx + howMuch < 0 ||
            this.tokVectorLength <= this.currIdx + howMuch) {
            return END_OF_FILE;
        }
        else {
            return this.tokVector[this.currIdx + howMuch];
        }
    }
    consumeToken() {
        this.currIdx++;
    }
    exportLexerState() {
        return this.currIdx;
    }
    importLexerState(newState) {
        this.currIdx = newState;
    }
    resetLexerState() {
        this.currIdx = -1;
    }
    moveToTerminatedState() {
        this.currIdx = this.tokVector.length - 1;
    }
    getLexerPosition() {
        return this.exportLexerState();
    }
}
//# sourceMappingURL=lexer_adapter.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/traits/recognizer_api.js







/**
 * This trait is responsible for implementing the offical API
 * for defining Chevrotain parsers, i.e:
 * - CONSUME
 * - RULE
 * - OPTION
 * - ...
 */
class recognizer_api_RecognizerApi {
    CONSUME(tokType, options) {
        return this.consumeInternal(tokType, 0, options);
    }
    CONSUME1(tokType, options) {
        return this.consumeInternal(tokType, 1, options);
    }
    CONSUME2(tokType, options) {
        return this.consumeInternal(tokType, 2, options);
    }
    CONSUME3(tokType, options) {
        return this.consumeInternal(tokType, 3, options);
    }
    CONSUME4(tokType, options) {
        return this.consumeInternal(tokType, 4, options);
    }
    CONSUME5(tokType, options) {
        return this.consumeInternal(tokType, 5, options);
    }
    CONSUME6(tokType, options) {
        return this.consumeInternal(tokType, 6, options);
    }
    CONSUME7(tokType, options) {
        return this.consumeInternal(tokType, 7, options);
    }
    CONSUME8(tokType, options) {
        return this.consumeInternal(tokType, 8, options);
    }
    CONSUME9(tokType, options) {
        return this.consumeInternal(tokType, 9, options);
    }
    SUBRULE(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 0, options);
    }
    SUBRULE1(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 1, options);
    }
    SUBRULE2(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 2, options);
    }
    SUBRULE3(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 3, options);
    }
    SUBRULE4(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 4, options);
    }
    SUBRULE5(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 5, options);
    }
    SUBRULE6(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 6, options);
    }
    SUBRULE7(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 7, options);
    }
    SUBRULE8(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 8, options);
    }
    SUBRULE9(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 9, options);
    }
    OPTION(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 0);
    }
    OPTION1(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 1);
    }
    OPTION2(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 2);
    }
    OPTION3(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 3);
    }
    OPTION4(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 4);
    }
    OPTION5(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 5);
    }
    OPTION6(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 6);
    }
    OPTION7(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 7);
    }
    OPTION8(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 8);
    }
    OPTION9(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 9);
    }
    OR(altsOrOpts) {
        return this.orInternal(altsOrOpts, 0);
    }
    OR1(altsOrOpts) {
        return this.orInternal(altsOrOpts, 1);
    }
    OR2(altsOrOpts) {
        return this.orInternal(altsOrOpts, 2);
    }
    OR3(altsOrOpts) {
        return this.orInternal(altsOrOpts, 3);
    }
    OR4(altsOrOpts) {
        return this.orInternal(altsOrOpts, 4);
    }
    OR5(altsOrOpts) {
        return this.orInternal(altsOrOpts, 5);
    }
    OR6(altsOrOpts) {
        return this.orInternal(altsOrOpts, 6);
    }
    OR7(altsOrOpts) {
        return this.orInternal(altsOrOpts, 7);
    }
    OR8(altsOrOpts) {
        return this.orInternal(altsOrOpts, 8);
    }
    OR9(altsOrOpts) {
        return this.orInternal(altsOrOpts, 9);
    }
    MANY(actionORMethodDef) {
        this.manyInternal(0, actionORMethodDef);
    }
    MANY1(actionORMethodDef) {
        this.manyInternal(1, actionORMethodDef);
    }
    MANY2(actionORMethodDef) {
        this.manyInternal(2, actionORMethodDef);
    }
    MANY3(actionORMethodDef) {
        this.manyInternal(3, actionORMethodDef);
    }
    MANY4(actionORMethodDef) {
        this.manyInternal(4, actionORMethodDef);
    }
    MANY5(actionORMethodDef) {
        this.manyInternal(5, actionORMethodDef);
    }
    MANY6(actionORMethodDef) {
        this.manyInternal(6, actionORMethodDef);
    }
    MANY7(actionORMethodDef) {
        this.manyInternal(7, actionORMethodDef);
    }
    MANY8(actionORMethodDef) {
        this.manyInternal(8, actionORMethodDef);
    }
    MANY9(actionORMethodDef) {
        this.manyInternal(9, actionORMethodDef);
    }
    MANY_SEP(options) {
        this.manySepFirstInternal(0, options);
    }
    MANY_SEP1(options) {
        this.manySepFirstInternal(1, options);
    }
    MANY_SEP2(options) {
        this.manySepFirstInternal(2, options);
    }
    MANY_SEP3(options) {
        this.manySepFirstInternal(3, options);
    }
    MANY_SEP4(options) {
        this.manySepFirstInternal(4, options);
    }
    MANY_SEP5(options) {
        this.manySepFirstInternal(5, options);
    }
    MANY_SEP6(options) {
        this.manySepFirstInternal(6, options);
    }
    MANY_SEP7(options) {
        this.manySepFirstInternal(7, options);
    }
    MANY_SEP8(options) {
        this.manySepFirstInternal(8, options);
    }
    MANY_SEP9(options) {
        this.manySepFirstInternal(9, options);
    }
    AT_LEAST_ONE(actionORMethodDef) {
        this.atLeastOneInternal(0, actionORMethodDef);
    }
    AT_LEAST_ONE1(actionORMethodDef) {
        return this.atLeastOneInternal(1, actionORMethodDef);
    }
    AT_LEAST_ONE2(actionORMethodDef) {
        this.atLeastOneInternal(2, actionORMethodDef);
    }
    AT_LEAST_ONE3(actionORMethodDef) {
        this.atLeastOneInternal(3, actionORMethodDef);
    }
    AT_LEAST_ONE4(actionORMethodDef) {
        this.atLeastOneInternal(4, actionORMethodDef);
    }
    AT_LEAST_ONE5(actionORMethodDef) {
        this.atLeastOneInternal(5, actionORMethodDef);
    }
    AT_LEAST_ONE6(actionORMethodDef) {
        this.atLeastOneInternal(6, actionORMethodDef);
    }
    AT_LEAST_ONE7(actionORMethodDef) {
        this.atLeastOneInternal(7, actionORMethodDef);
    }
    AT_LEAST_ONE8(actionORMethodDef) {
        this.atLeastOneInternal(8, actionORMethodDef);
    }
    AT_LEAST_ONE9(actionORMethodDef) {
        this.atLeastOneInternal(9, actionORMethodDef);
    }
    AT_LEAST_ONE_SEP(options) {
        this.atLeastOneSepFirstInternal(0, options);
    }
    AT_LEAST_ONE_SEP1(options) {
        this.atLeastOneSepFirstInternal(1, options);
    }
    AT_LEAST_ONE_SEP2(options) {
        this.atLeastOneSepFirstInternal(2, options);
    }
    AT_LEAST_ONE_SEP3(options) {
        this.atLeastOneSepFirstInternal(3, options);
    }
    AT_LEAST_ONE_SEP4(options) {
        this.atLeastOneSepFirstInternal(4, options);
    }
    AT_LEAST_ONE_SEP5(options) {
        this.atLeastOneSepFirstInternal(5, options);
    }
    AT_LEAST_ONE_SEP6(options) {
        this.atLeastOneSepFirstInternal(6, options);
    }
    AT_LEAST_ONE_SEP7(options) {
        this.atLeastOneSepFirstInternal(7, options);
    }
    AT_LEAST_ONE_SEP8(options) {
        this.atLeastOneSepFirstInternal(8, options);
    }
    AT_LEAST_ONE_SEP9(options) {
        this.atLeastOneSepFirstInternal(9, options);
    }
    RULE(name, implementation, 
    // TODO: how to describe the optional return type of CSTNode? T|CstNode is not good because it is not backward
    // compatible, T|any is very general...
    config = DEFAULT_RULE_CONFIG) {
        if (Object(utils["j" /* contains */])(this.definedRulesNames, name)) {
            const errMsg = defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
                topLevelRule: name,
                grammarName: this.className
            });
            const error = {
                message: errMsg,
                type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
                ruleName: name
            };
            this.definitionErrors.push(error);
        }
        this.definedRulesNames.push(name);
        // only build the gast representation once.
        if (!this.gastProductionsCache.containsKey(name) &&
            !this.serializedGrammar) {
            let gastProduction = buildTopProduction(implementation.toString(), name, this.tokensMap);
            this.gastProductionsCache.put(name, gastProduction);
        }
        let ruleImplementation = this.defineRule(name, implementation, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    }
    OVERRIDE_RULE(name, impl, config = DEFAULT_RULE_CONFIG) {
        let ruleErrors = [];
        ruleErrors = ruleErrors.concat(validateRuleIsOverridden(name, this.definedRulesNames, this.className));
        this.definitionErrors.push.apply(this.definitionErrors, ruleErrors); // mutability for the win
        // Avoid constructing the GAST if we have serialized it
        if (!this.serializedGrammar) {
            let gastProduction = buildTopProduction(impl.toString(), name, this.tokensMap);
            this.gastProductionsCache.put(name, gastProduction);
        }
        let ruleImplementation = this.defineRule(name, impl, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    }
    BACKTRACK(grammarRule, args) {
        return function () {
            // save org state
            this.isBackTrackingStack.push(1);
            const orgState = this.saveRecogState();
            try {
                grammarRule.apply(this, args);
                // if no exception was thrown we have succeed parsing the rule.
                return true;
            }
            catch (e) {
                if (isRecognitionException(e)) {
                    return false;
                }
                else {
                    throw e;
                }
            }
            finally {
                this.reloadRecogState(orgState);
                this.isBackTrackingStack.pop();
            }
        };
    }
    // GAST export APIs
    getGAstProductions() {
        return this.gastProductionsCache;
    }
    getSerializedGastProductions() {
        return serializeGrammar(this.gastProductionsCache.values());
    }
}
//# sourceMappingURL=recognizer_api.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/traits/recognizer_engine.js










/**
 * This trait is responsible for the runtime parsing engine
 * Used by the official API (recognizer_api.ts)
 */
class recognizer_engine_RecognizerEngine {
    initRecognizerEngine(tokenVocabulary, config) {
        this.className = classNameFromInstance(this);
        // TODO: would using an ES6 Map or plain object be faster (CST building scenario)
        this.shortRuleNameToFull = new lang_extensions_HashTable();
        this.fullRuleNameToShort = new lang_extensions_HashTable();
        this.ruleShortNameIdx = 256;
        this.tokenMatcher = tokenStructuredMatcherNoCategories;
        this.definedRulesNames = [];
        this.tokensMap = {};
        this.allRuleNames = [];
        this.isBackTrackingStack = [];
        this.RULE_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
        this.gastProductionsCache = new lang_extensions_HashTable();
        this.serializedGrammar = Object(utils["w" /* has */])(config, "serializedGrammar")
            ? config.serializedGrammar
            : DEFAULT_PARSER_CONFIG.serializedGrammar;
        if (Object(utils["y" /* isArray */])(tokenVocabulary)) {
            // This only checks for Token vocabularies provided as arrays.
            // That is good enough because the main objective is to detect users of pre-V4.0 APIs
            // rather than all edge cases of empty Token vocabularies.
            if (Object(utils["A" /* isEmpty */])(tokenVocabulary)) {
                throw Error("A Token Vocabulary cannot be empty.\n" +
                    "\tNote that the first argument for the parser constructor\n" +
                    "\tis no longer a Token vector (since v4.0).");
            }
            if (typeof tokenVocabulary[0].startOffset === "number") {
                throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n" +
                    "\tSee: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_4-0-0\n" +
                    "\tFor Further details.");
            }
        }
        if (Object(utils["y" /* isArray */])(tokenVocabulary)) {
            this.tokensMap = Object(utils["O" /* reduce */])(tokenVocabulary, (acc, tokenClazz) => {
                acc[tokens_public_tokenName(tokenClazz)] = tokenClazz;
                return acc;
            }, {});
        }
        else if (Object(utils["w" /* has */])(tokenVocabulary, "modes") &&
            Object(utils["o" /* every */])(Object(utils["t" /* flatten */])(Object(utils["U" /* values */])(tokenVocabulary.modes)), isTokenType)) {
            let allTokenTypes = Object(utils["t" /* flatten */])(Object(utils["U" /* values */])(tokenVocabulary.modes));
            let uniqueTokens = Object(utils["T" /* uniq */])(allTokenTypes);
            this.tokensMap = Object(utils["O" /* reduce */])(uniqueTokens, (acc, tokenClazz) => {
                acc[tokens_public_tokenName(tokenClazz)] = tokenClazz;
                return acc;
            }, {});
        }
        else if (Object(utils["C" /* isObject */])(tokenVocabulary)) {
            this.tokensMap = Object(utils["h" /* cloneObj */])(tokenVocabulary);
        }
        else {
            throw new Error("<tokensDictionary> argument must be An Array of Token constructors," +
                " A dictionary of Token constructors or an IMultiModeLexerDefinition");
        }
        // always add EOF to the tokenNames -> constructors map. it is useful to assure all the input has been
        // parsed with a clear error message ("expecting EOF but found ...")
        /* tslint:disable */
        this.tokensMap["EOF"] = EOF;
        // TODO: This check may not be accurate for multi mode lexers
        const noTokenCategoriesUsed = Object(utils["o" /* every */])(Object(utils["U" /* values */])(tokenVocabulary), tokenConstructor => Object(utils["A" /* isEmpty */])(tokenConstructor.categoryMatches));
        this.tokenMatcher = noTokenCategoriesUsed
            ? tokenStructuredMatcherNoCategories
            : tokenStructuredMatcher;
        // Because ES2015+ syntax should be supported for creating Token classes
        // We cannot assume that the Token classes were created using the "extendToken" utilities
        // Therefore we must augment the Token classes both on Lexer initialization and on Parser initialization
        augmentTokenTypes(Object(utils["U" /* values */])(this.tokensMap));
    }
    defineRule(ruleName, impl, config) {
        if (this.selfAnalysisDone) {
            throw Error(`Grammar rule <${ruleName}> may not be defined after the 'performSelfAnalysis' method has been called'\n` +
                `Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
        }
        let resyncEnabled = Object(utils["w" /* has */])(config, "resyncEnabled")
            ? config.resyncEnabled
            : DEFAULT_RULE_CONFIG.resyncEnabled;
        let recoveryValueFunc = Object(utils["w" /* has */])(config, "recoveryValueFunc")
            ? config.recoveryValueFunc
            : DEFAULT_RULE_CONFIG.recoveryValueFunc;
        // performance optimization: Use small integers as keys for the longer human readable "full" rule names.
        // this greatly improves Map access time (as much as 8% for some performance benchmarks).
        /* tslint:disable */
        let shortName = this.ruleShortNameIdx <<
            (BITS_FOR_METHOD_IDX + BITS_FOR_OCCURRENCE_IDX);
        /* tslint:enable */
        this.ruleShortNameIdx++;
        this.shortRuleNameToFull.put(shortName, ruleName);
        this.fullRuleNameToShort.put(ruleName, shortName);
        function invokeRuleWithTry(args) {
            try {
                // TODO: dynamically get rid of this?
                if (this.outputCst === true) {
                    impl.apply(this, args);
                    const cst = this.CST_STACK[this.CST_STACK.length - 1];
                    this.cstPostRule(cst);
                    return cst;
                }
                else {
                    return impl.apply(this, args);
                }
            }
            catch (e) {
                let isFirstInvokedRule = this.RULE_STACK.length === 1;
                // note the reSync is always enabled for the first rule invocation, because we must always be able to
                // reSync with EOF and just output some INVALID ParseTree
                // during backtracking reSync recovery is disabled, otherwise we can't be certain the backtracking
                // path is really the most valid one
                let reSyncEnabled = resyncEnabled &&
                    !this.isBackTracking() &&
                    this.recoveryEnabled;
                if (isRecognitionException(e)) {
                    if (reSyncEnabled) {
                        let reSyncTokType = this.findReSyncTokenType();
                        if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
                            e.resyncedTokens = this.reSyncTo(reSyncTokType);
                            if (this.outputCst) {
                                let partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                                partialCstResult.recoveredNode = true;
                                return partialCstResult;
                            }
                            else {
                                return recoveryValueFunc();
                            }
                        }
                        else {
                            if (this.outputCst) {
                                const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                                partialCstResult.recoveredNode = true;
                                e.partialCstResult = partialCstResult;
                            }
                            // to be handled Further up the call stack
                            throw e;
                        }
                    }
                    else if (isFirstInvokedRule) {
                        // otherwise a Redundant input error will be created as well and we cannot guarantee that this is indeed the case
                        this.moveToTerminatedState();
                        // the parser should never throw one of its own errors outside its flow.
                        // even if error recovery is disabled
                        return recoveryValueFunc();
                    }
                    else {
                        // to be handled Further up the call stack
                        throw e;
                    }
                }
                else {
                    // some other Error type which we don't know how to handle (for example a built in JavaScript Error)
                    throw e;
                }
            }
            finally {
                this.ruleFinallyStateUpdate();
            }
        }
        let wrappedGrammarRule;
        wrappedGrammarRule = function (idxInCallingRule = 0, args) {
            this.ruleInvocationStateUpdate(shortName, ruleName, idxInCallingRule);
            return invokeRuleWithTry.call(this, args);
        };
        let ruleNamePropName = "ruleName";
        wrappedGrammarRule[ruleNamePropName] = ruleName;
        return wrappedGrammarRule;
    }
    // Implementation of parsing DSL
    optionInternal(actionORMethodDef, occurrence) {
        let key = this.getKeyForAutomaticLookahead(OPTION_IDX, occurrence);
        let nestedName = this.nestedRuleBeforeClause(actionORMethodDef, key);
        try {
            return this.optionInternalLogic(actionORMethodDef, occurrence, key);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(key, nestedName);
            }
        }
    }
    optionInternalNoCst(actionORMethodDef, occurrence) {
        let key = this.getKeyForAutomaticLookahead(OPTION_IDX, occurrence);
        return this.optionInternalLogic(actionORMethodDef, occurrence, key);
    }
    optionInternalLogic(actionORMethodDef, occurrence, key) {
        let lookAheadFunc = this.getLookaheadFuncForOption(key, occurrence);
        let action;
        let predicate;
        if (actionORMethodDef.DEF !== undefined) {
            action = actionORMethodDef.DEF;
            predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                let orgLookaheadFunction = lookAheadFunc;
                lookAheadFunc = () => {
                    return (predicate.call(this) && orgLookaheadFunction.call(this));
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
            return action.call(this);
        }
        return undefined;
    }
    atLeastOneInternal(prodOccurrence, actionORMethodDef) {
        let laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, prodOccurrence);
        let nestedName = this.nestedRuleBeforeClause(actionORMethodDef, laKey);
        try {
            return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    }
    atLeastOneInternalNoCst(prodOccurrence, actionORMethodDef) {
        let key = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, prodOccurrence);
        this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key);
    }
    atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key) {
        let lookAheadFunc = this.getLookaheadFuncForAtLeastOne(key, prodOccurrence);
        let action;
        let predicate;
        if (actionORMethodDef.DEF !== undefined) {
            action = actionORMethodDef.DEF;
            predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                let orgLookaheadFunction = lookAheadFunc;
                lookAheadFunc = () => {
                    return (predicate.call(this) && orgLookaheadFunction.call(this));
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
            let notStuck = this.doSingleRepetition(action);
            while (lookAheadFunc.call(this) === true &&
                notStuck === true) {
                notStuck = this.doSingleRepetition(action);
            }
        }
        else {
            throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
        }
        // note that while it may seem that this can cause an error because by using a recursive call to
        // AT_LEAST_ONE we change the grammar to AT_LEAST_TWO, AT_LEAST_THREE ... , the possible recursive call
        // from the tryInRepetitionRecovery(...) will only happen IFF there really are TWO/THREE/.... items.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, AT_LEAST_ONE_IDX, prodOccurrence, interpreter_NextTerminalAfterAtLeastOneWalker);
    }
    atLeastOneSepFirstInternal(prodOccurrence, options) {
        let laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, prodOccurrence);
        let nestedName = this.nestedRuleBeforeClause(options, laKey);
        try {
            this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    }
    atLeastOneSepFirstInternalNoCst(prodOccurrence, options) {
        let laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, prodOccurrence);
        this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
    }
    atLeastOneSepFirstInternalLogic(prodOccurrence, options, key) {
        let action = options.DEF;
        let separator = options.SEP;
        let firstIterationLookaheadFunc = this.getLookaheadFuncForAtLeastOneSep(key, prodOccurrence);
        // 1st iteration
        if (firstIterationLookaheadFunc.call(this) === true) {
            ;
            action.call(this);
            //  TODO: Optimization can move this function construction into "attemptInRepetitionRecovery"
            //  because it is only needed in error recovery scenarios.
            let separatorLookAheadFunc = () => {
                return this.tokenMatcher(this.LA(1), separator);
            };
            // 2nd..nth iterations
            while (this.tokenMatcher(this.LA(1), separator) === true) {
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                interpreter_NextTerminalAfterAtLeastOneSepWalker
            ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, interpreter_NextTerminalAfterAtLeastOneSepWalker);
        }
        else {
            throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
        }
    }
    manyInternal(prodOccurrence, actionORMethodDef) {
        let laKey = this.getKeyForAutomaticLookahead(MANY_IDX, prodOccurrence);
        let nestedName = this.nestedRuleBeforeClause(actionORMethodDef, laKey);
        try {
            return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    }
    manyInternalNoCst(prodOccurrence, actionORMethodDef) {
        let laKey = this.getKeyForAutomaticLookahead(MANY_IDX, prodOccurrence);
        return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    }
    manyInternalLogic(prodOccurrence, actionORMethodDef, key) {
        let lookaheadFunction = this.getLookaheadFuncForMany(key, prodOccurrence);
        let action;
        let predicate;
        if (actionORMethodDef.DEF !== undefined) {
            action = actionORMethodDef.DEF;
            predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                let orgLookaheadFunction = lookaheadFunction;
                lookaheadFunction = () => {
                    return (predicate.call(this) && orgLookaheadFunction.call(this));
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        let notStuck = true;
        while (lookaheadFunction.call(this) === true && notStuck === true) {
            notStuck = this.doSingleRepetition(action);
        }
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.manyInternal, [prodOccurrence, actionORMethodDef], lookaheadFunction, MANY_IDX, prodOccurrence, interpreter_NextTerminalAfterManyWalker, 
        // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
        // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
        // An infinite loop cannot occur as:
        // - Either the lookahead is guaranteed to consume something (Single Token Separator)
        // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
        notStuck);
    }
    manySepFirstInternal(prodOccurrence, options) {
        let laKey = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, prodOccurrence);
        let nestedName = this.nestedRuleBeforeClause(options, laKey);
        try {
            this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    }
    manySepFirstInternalNoCst(prodOccurrence, options) {
        let laKey = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, prodOccurrence);
        this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
    }
    manySepFirstInternalLogic(prodOccurrence, options, key) {
        let action = options.DEF;
        let separator = options.SEP;
        let firstIterationLaFunc = this.getLookaheadFuncForManySep(key, prodOccurrence);
        // 1st iteration
        if (firstIterationLaFunc.call(this) === true) {
            action.call(this);
            let separatorLookAheadFunc = () => {
                return this.tokenMatcher(this.LA(1), separator);
            };
            // 2nd..nth iterations
            while (this.tokenMatcher(this.LA(1), separator) === true) {
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                // No need for checking infinite loop here due to consuming the separator.
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                interpreter_NextTerminalAfterManySepWalker
            ], separatorLookAheadFunc, MANY_SEP_IDX, prodOccurrence, interpreter_NextTerminalAfterManySepWalker);
        }
    }
    repetitionSepSecondInternal(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
        while (separatorLookAheadFunc()) {
            // note that this CONSUME will never enter recovery because
            // the separatorLookAheadFunc checks that the separator really does exist.
            this.CONSUME(separator);
            action.call(this);
        }
        // we can only arrive to this function after an error
        // has occurred (hence the name 'second') so the following
        // IF will always be entered, its possible to remove it...
        // however it is kept to avoid confusion and be consistent.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        /* istanbul ignore else */
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            prodOccurrence,
            separator,
            separatorLookAheadFunc,
            action,
            nextTerminalAfterWalker
        ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
    }
    doSingleRepetition(action) {
        const beforeIteration = this.getLexerPosition();
        action.call(this);
        const afterIteration = this.getLexerPosition();
        // This boolean will indicate if this repetition progressed
        // or if we are "stuck" (potential infinite loop in the repetition).
        return afterIteration > beforeIteration;
    }
    orInternalNoCst(altsOrOpts, occurrence) {
        let alts = Object(utils["y" /* isArray */])(altsOrOpts)
            ? altsOrOpts
            : altsOrOpts.DEF;
        let laFunc = this.getLookaheadFuncForOr(occurrence, alts);
        let altIdxToTake = laFunc.call(this, alts);
        if (altIdxToTake !== undefined) {
            let chosenAlternative = alts[altIdxToTake];
            return chosenAlternative.ALT.call(this);
        }
        this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
    }
    orInternal(altsOrOpts, occurrence) {
        let laKey = this.getKeyForAutomaticLookahead(OR_IDX, occurrence);
        let nestedName = this.nestedRuleBeforeClause(altsOrOpts, laKey);
        try {
            let alts = Object(utils["y" /* isArray */])(altsOrOpts)
                ? altsOrOpts
                : altsOrOpts.DEF;
            let laFunc = this.getLookaheadFuncForOr(occurrence, alts);
            let altIdxToTake = laFunc.call(this, alts);
            if (altIdxToTake !== undefined) {
                let chosenAlternative = alts[altIdxToTake];
                let nestedAltBeforeClauseResult = this.nestedAltBeforeClause(chosenAlternative, occurrence, OR_IDX, altIdxToTake);
                try {
                    return chosenAlternative.ALT.call(this);
                }
                finally {
                    if (nestedAltBeforeClauseResult !== undefined) {
                        this.nestedRuleFinallyClause(nestedAltBeforeClauseResult.shortName, nestedAltBeforeClauseResult.nestedName);
                    }
                }
            }
            this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    }
    ruleFinallyStateUpdate() {
        this.RULE_STACK.pop();
        this.RULE_OCCURRENCE_STACK.pop();
        // NOOP when cst is disabled
        this.cstFinallyStateUpdate();
        if (this.RULE_STACK.length === 0 && !this.isAtEndOfInput()) {
            let firstRedundantTok = this.LA(1);
            let errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
                firstRedundant: firstRedundantTok,
                ruleName: this.getCurrRuleFullName()
            });
            this.SAVE_ERROR(new NotAllInputParsedException(errMsg, firstRedundantTok));
        }
    }
    subruleInternal(ruleToCall, idx, options) {
        let ruleResult;
        try {
            const args = options !== undefined ? options.ARGS : undefined;
            ruleResult = ruleToCall.call(this, idx, args);
            this.cstPostNonTerminal(ruleResult, options !== undefined && options.LABEL !== undefined
                ? options.LABEL
                : ruleToCall.ruleName);
            return ruleResult;
        }
        catch (e) {
            if (isRecognitionException(e) && e.partialCstResult !== undefined) {
                this.cstPostNonTerminal(e.partialCstResult, options !== undefined && options.LABEL !== undefined
                    ? options.LABEL
                    : ruleToCall.ruleName);
                delete e.partialCstResult;
            }
            throw e;
        }
    }
    consumeInternal(tokType, idx, options) {
        let consumedToken;
        try {
            let nextToken = this.LA(1);
            if (this.tokenMatcher(nextToken, tokType) === true) {
                this.consumeToken();
                consumedToken = nextToken;
            }
            else {
                let msg;
                let previousToken = this.LA(0);
                if (options !== undefined && options.ERR_MSG) {
                    msg = options.ERR_MSG;
                }
                else {
                    msg = this.errorMessageProvider.buildMismatchTokenMessage({
                        expected: tokType,
                        actual: nextToken,
                        previous: previousToken,
                        ruleName: this.getCurrRuleFullName()
                    });
                }
                throw this.SAVE_ERROR(new MismatchedTokenException(msg, nextToken, previousToken));
            }
        }
        catch (eFromConsumption) {
            // no recovery allowed during backtracking, otherwise backtracking may recover invalid syntax and accept it
            // but the original syntax could have been parsed successfully without any backtracking + recovery
            if (this.recoveryEnabled &&
                // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
                eFromConsumption.name === "MismatchedTokenException" &&
                !this.isBackTracking()) {
                let follows = this.getFollowsForInRuleRecovery(tokType, idx);
                try {
                    consumedToken = this.tryInRuleRecovery(tokType, follows);
                }
                catch (eFromInRuleRecovery) {
                    if (eFromInRuleRecovery.name === IN_RULE_RECOVERY_EXCEPTION) {
                        // failed in RuleRecovery.
                        // throw the original error in order to trigger reSync error recovery
                        throw eFromConsumption;
                    }
                    else {
                        throw eFromInRuleRecovery;
                    }
                }
            }
            else {
                throw eFromConsumption;
            }
        }
        this.cstPostTerminal(options !== undefined && options.LABEL !== undefined
            ? options.LABEL
            : tokType.tokenName, consumedToken);
        return consumedToken;
    }
    saveRecogState() {
        // errors is a getter which will clone the errors array
        let savedErrors = this.errors;
        let savedRuleStack = Object(utils["g" /* cloneArr */])(this.RULE_STACK);
        return {
            errors: savedErrors,
            lexerState: this.exportLexerState(),
            RULE_STACK: savedRuleStack,
            CST_STACK: this.CST_STACK,
            LAST_EXPLICIT_RULE_STACK: this.LAST_EXPLICIT_RULE_STACK
        };
    }
    reloadRecogState(newState) {
        this.errors = newState.errors;
        this.importLexerState(newState.lexerState);
        this.RULE_STACK = newState.RULE_STACK;
    }
    ruleInvocationStateUpdate(shortName, fullName, idxInCallingRule) {
        this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
        this.RULE_STACK.push(shortName);
        // NOOP when cst is disabled
        this.cstInvocationStateUpdate(fullName, shortName);
    }
    isBackTracking() {
        return !Object(utils["A" /* isEmpty */])(this.isBackTrackingStack);
    }
    getCurrRuleFullName() {
        let shortName = this.getLastExplicitRuleShortName();
        return this.shortRuleNameToFull.get(shortName);
    }
    shortRuleNameToFullName(shortName) {
        return this.shortRuleNameToFull.get(shortName);
    }
    isAtEndOfInput() {
        return this.tokenMatcher(this.LA(1), EOF);
    }
    reset() {
        this.resetLexerState();
        this.isBackTrackingStack = [];
        this.errors = [];
        this.RULE_STACK = [];
        this.LAST_EXPLICIT_RULE_STACK = [];
        // TODO: extract a specific rest for TreeBuilder trait
        this.CST_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
    }
}
//# sourceMappingURL=recognizer_engine.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/traits/error_handler.js




/**
 * Trait responsible for runtime parsing errors.
 */
class error_handler_ErrorHandler {
    initErrorHandler(config) {
        this._errors = [];
        this.errorMessageProvider = Object(utils["k" /* defaults */])(config.errorMessageProvider, DEFAULT_PARSER_CONFIG.errorMessageProvider);
    }
    SAVE_ERROR(error) {
        if (isRecognitionException(error)) {
            error.context = {
                ruleStack: this.getHumanReadableRuleStack(),
                ruleOccurrenceStack: Object(utils["g" /* cloneArr */])(this.RULE_OCCURRENCE_STACK)
            };
            this._errors.push(error);
            return error;
        }
        else {
            throw Error("Trying to save an Error which is not a RecognitionException");
        }
    }
    // TODO: extract these methods to ErrorHandler Trait?
    get errors() {
        return Object(utils["g" /* cloneArr */])(this._errors);
    }
    set errors(newErrors) {
        this._errors = newErrors;
    }
    // TODO: consider caching the error message computed information
    raiseEarlyExitException(occurrence, prodType, userDefinedErrMsg) {
        let ruleName = this.getCurrRuleFullName();
        let ruleGrammar = this.getGAstProductions().get(ruleName);
        let lookAheadPathsPerAlternative = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead);
        let insideProdPaths = lookAheadPathsPerAlternative[0];
        let actualTokens = [];
        for (let i = 1; i < this.maxLookahead; i++) {
            actualTokens.push(this.LA(i));
        }
        let msg = this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: insideProdPaths,
            actual: actualTokens,
            previous: this.LA(0),
            customUserDescription: userDefinedErrMsg,
            ruleName: ruleName
        });
        throw this.SAVE_ERROR(new EarlyExitException(msg, this.LA(1), this.LA(0)));
    }
    // TODO: consider caching the error message computed information
    raiseNoAltException(occurrence, errMsgTypes) {
        let ruleName = this.getCurrRuleFullName();
        let ruleGrammar = this.getGAstProductions().get(ruleName);
        // TODO: getLookaheadPathsForOr can be slow for large enough maxLookahead and certain grammars, consider caching ?
        let lookAheadPathsPerAlternative = getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead);
        let actualTokens = [];
        for (let i = 1; i <= this.maxLookahead; i++) {
            actualTokens.push(this.LA(i));
        }
        let previousToken = this.LA(0);
        let errMsg = this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: lookAheadPathsPerAlternative,
            actual: actualTokens,
            previous: previousToken,
            customUserDescription: errMsgTypes,
            ruleName: this.getCurrRuleFullName()
        });
        throw this.SAVE_ERROR(new NoViableAltException(errMsg, this.LA(1), previousToken));
    }
}
//# sourceMappingURL=error_handler.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/traits/context_assist.js


class context_assist_ContentAssist {
    initContentAssist() { }
    computeContentAssist(startRuleName, precedingInput) {
        let startRuleGast = this.gastProductionsCache.get(startRuleName);
        if (Object(utils["F" /* isUndefined */])(startRuleGast)) {
            throw Error(`Rule ->${startRuleName}<- does not exist in this grammar.`);
        }
        return nextPossibleTokensAfter([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
    }
    // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
    // TODO: should this be more explicitly part of the public API?
    getNextPossibleTokenTypes(grammarPath) {
        let topRuleName = Object(utils["s" /* first */])(grammarPath.ruleStack);
        let gastProductions = this.getGAstProductions();
        let topProduction = gastProductions.get(topRuleName);
        let nextPossibleTokenTypes = new interpreter_NextAfterTokenWalker(topProduction, grammarPath).startWalking();
        return nextPossibleTokenTypes;
    }
}
//# sourceMappingURL=context_assist.js.map
// CONCATENATED MODULE: ./es6/src/parse/parser/parser.js
















const END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
const DEFAULT_PARSER_CONFIG = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 4,
    ignoredIssues: {},
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: defaultParserErrorProvider,
    serializedGrammar: null,
    nodeLocationTracking: "none"
});
const DEFAULT_RULE_CONFIG = Object.freeze({
    recoveryValueFunc: () => undefined,
    resyncEnabled: true
});
var ParserDefinitionErrorType;
(function (ParserDefinitionErrorType) {
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
    ParserDefinitionErrorType[ParserDefinitionErrorType["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_NESTED_RULE_NAME"] = 10] = "INVALID_NESTED_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_NESTED_NAME"] = 11] = "DUPLICATE_NESTED_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NO_NON_EMPTY_LOOKAHEAD"] = 12] = "NO_NON_EMPTY_LOOKAHEAD";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_PREFIX_ALTS"] = 13] = "AMBIGUOUS_PREFIX_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["TOO_MANY_ALTS"] = 14] = "TOO_MANY_ALTS";
})(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
function EMPTY_ALT(value = undefined) {
    return function () {
        return value;
    };
}
class parser_Parser {
    constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG) {
        this.ignoredIssues = DEFAULT_PARSER_CONFIG.ignoredIssues;
        this.definitionErrors = [];
        this.selfAnalysisDone = false;
        const that = this;
        that.initErrorHandler(config);
        that.initLexerAdapter();
        that.initLooksAhead(config);
        that.initRecognizerEngine(tokenVocabulary, config);
        that.initRecoverable(config);
        that.initTreeBuilder(config);
        that.initContentAssist();
        this.ignoredIssues = Object(utils["w" /* has */])(config, "ignoredIssues")
            ? config.ignoredIssues
            : DEFAULT_PARSER_CONFIG.ignoredIssues;
        // Avoid performance regressions in newer versions of V8
        Object(utils["S" /* toFastProperties */])(this);
    }
    /**
     *  @deprecated use the **instance** method with the same name instead
     */
    static performSelfAnalysis(parserInstance) {
        ;
        parserInstance.performSelfAnalysis();
    }
    performSelfAnalysis() {
        let defErrorsMsgs;
        this.selfAnalysisDone = true;
        let className = classNameFromInstance(this);
        let productions = this.gastProductionsCache;
        if (this.serializedGrammar) {
            const rules = deserializeGrammar(this.serializedGrammar, this.tokensMap);
            Object(utils["u" /* forEach */])(rules, rule => {
                this.gastProductionsCache.put(rule.name, rule);
            });
        }
        let resolverErrors = gast_resolver_public_resolveGrammar({
            rules: productions.values()
        });
        this.definitionErrors.push.apply(this.definitionErrors, resolverErrors); // mutability for the win?
        // only perform additional grammar validations IFF no resolving errors have occurred.
        // as unresolved grammar may lead to unhandled runtime exceptions in the follow up validations.
        if (Object(utils["A" /* isEmpty */])(resolverErrors)) {
            let validationErrors = gast_resolver_public_validateGrammar({
                rules: productions.values(),
                maxLookahead: this.maxLookahead,
                tokenTypes: Object(utils["U" /* values */])(this.tokensMap),
                ignoredIssues: this.ignoredIssues,
                errMsgProvider: defaultGrammarValidatorErrorProvider,
                grammarName: className
            });
            this.definitionErrors.push.apply(this.definitionErrors, validationErrors); // mutability for the win?
        }
        if (Object(utils["A" /* isEmpty */])(this.definitionErrors)) {
            // this analysis may fail if the grammar is not perfectly valid
            let allFollows = computeAllProdsFollows(productions.values());
            this.resyncFollows = allFollows;
        }
        let cstAnalysisResult = analyzeCst(productions.values(), this.fullRuleNameToShort);
        this.allRuleNames = cstAnalysisResult.allRuleNames;
        if (!parser_Parser.DEFER_DEFINITION_ERRORS_HANDLING &&
            !Object(utils["A" /* isEmpty */])(this.definitionErrors)) {
            defErrorsMsgs = Object(utils["I" /* map */])(this.definitionErrors, defError => defError.message);
            throw new Error(`Parser Definition Errors detected:\n ${defErrorsMsgs.join("\n-------------------------------\n")}`);
        }
    }
}
// Set this flag to true if you don't want the Parser to throw error when problems in it's definition are detected.
// (normally during the parser's constructor).
// This is a design time flag, it will not affect the runtime error handling of the parser, just design time errors,
// for example: duplicate rule names, referencing an unresolved subrule, ect...
// This flag should not be enabled during normal usage, it is used in special situations, for example when
// needing to display the parser definition errors in some GUI(online playground).
parser_Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
Object(utils["e" /* applyMixins */])(parser_Parser, [
    recoverable_Recoverable,
    looksahead_LooksAhead,
    tree_builder_TreeBuilder,
    lexer_adapter_LexerAdapter,
    recognizer_engine_RecognizerEngine,
    recognizer_api_RecognizerApi,
    error_handler_ErrorHandler,
    context_assist_ContentAssist
]);
class parser_CstParser extends parser_Parser {
    constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG) {
        const configClone = Object(utils["h" /* cloneObj */])(config);
        configClone.outputCst = true;
        super(tokenVocabulary, configClone);
    }
}
class parser_EmbeddedActionsParser extends parser_Parser {
    constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG) {
        const configClone = Object(utils["h" /* cloneObj */])(config);
        configClone.outputCst = false;
        super(tokenVocabulary, configClone);
    }
}
//# sourceMappingURL=parser.js.map
// CONCATENATED MODULE: ./es6/src/diagrams/render_public.js

function createSyntaxDiagramsCode(grammar, { resourceBase = `https://unpkg.com/chevrotain@${VERSION}/diagrams/`, css = `https://unpkg.com/chevrotain@${VERSION}/diagrams/diagrams.css` } = {}) {
    const header = `
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`;
    const cssHtml = `
<link rel='stylesheet' href='${css}'>
`;
    const scripts = `
<script src='${resourceBase}vendor/railroad-diagrams.js'></script>
<script src='${resourceBase}src/diagrams_builder.js'></script>
<script src='${resourceBase}src/diagrams_behavior.js'></script>
<script src='${resourceBase}src/main.js'></script>
`;
    const diagramsDiv = `
<div id="diagrams" align="center"></div>    
`;
    const serializedGrammar = `
<script>
    window.serializedGrammar = ${JSON.stringify(grammar, null, "  ")};
</script>
`;
    const initLogic = `
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
</script>
`;
    return (header + cssHtml + scripts + diagramsDiv + serializedGrammar + initLogic);
}
//# sourceMappingURL=render_public.js.map
// CONCATENATED MODULE: ./es6/src/generate/generate.js



/**
 * Missing features
 * 1. Rule arguments
 * 2. Gates
 * 3. embedded actions
 */
const NL = "\n";
function genUmdModule(options) {
    return `
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['chevrotain'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('chevrotain'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (chevrotain) {

${genClass(options)}
    
return {
    ${options.name}: ${options.name} 
}
}));
`;
}
function genWrapperFunction(options) {
    return `    
${genClass(options)}
return new ${options.name}(tokenVocabulary, config)    
`;
}
function genClass(options) {
    // TODO: how to pass the token vocabulary? Constructor? other?
    let result = `
function ${options.name}(tokenVocabulary, config) {
    // invoke super constructor
    // No support for embedded actions currently, so we can 'hardcode'
    // The use of CstParser.
    chevrotain.CstParser.call(this, tokenVocabulary, config)

    const $ = this

    ${genAllRules(options.rules)}

    // very important to call this after all the rules have been defined.
    // otherwise the parser may not work correctly as it will lack information
    // derived during the self analysis phase.
    this.performSelfAnalysis(this)
}

// inheritance as implemented in javascript in the previous decade... :(
${options.name}.prototype = Object.create(chevrotain.CstParser.prototype)
${options.name}.prototype.constructor = ${options.name}    
    `;
    return result;
}
function genAllRules(rules) {
    let rulesText = Object(utils["I" /* map */])(rules, currRule => {
        return genRule(currRule, 1);
    });
    return rulesText.join("\n");
}
function genRule(prod, n) {
    let result = indent(n, `$.RULE("${prod.name}", function() {`) + NL;
    result += genDefinition(prod.definition, n + 1);
    result += indent(n + 1, `})`) + NL;
    return result;
}
function genTerminal(prod, n) {
    const name = tokens_public_tokenName(prod.terminalType);
    // TODO: potential performance optimization, avoid tokenMap Dictionary access
    return indent(n, `$.CONSUME${prod.idx}(this.tokensMap.${name})` + NL);
}
function genNonTerminal(prod, n) {
    return indent(n, `$.SUBRULE${prod.idx}($.${prod.nonTerminalName})` + NL);
}
function genAlternation(prod, n) {
    let result = indent(n, `$.OR${prod.idx}([`) + NL;
    const alts = Object(utils["I" /* map */])(prod.definition, altDef => genSingleAlt(altDef, n + 1));
    result += alts.join("," + NL);
    result += NL + indent(n, `])` + NL);
    return result;
}
function genSingleAlt(prod, n) {
    let result = indent(n, `{`) + NL;
    if (prod.name) {
        result += indent(n + 1, `NAME: "${prod.name}",`) + NL;
    }
    result += indent(n + 1, "ALT: function() {") + NL;
    result += genDefinition(prod.definition, n + 1);
    result += indent(n + 1, `}`) + NL;
    result += indent(n, `}`);
    return result;
}
function genProd(prod, n) {
    /* istanbul ignore else */
    if (prod instanceof gast_public_NonTerminal) {
        return genNonTerminal(prod, n);
    }
    else if (prod instanceof gast_public_Option) {
        return genDSLRule("OPTION", prod, n);
    }
    else if (prod instanceof gast_public_RepetitionMandatory) {
        return genDSLRule("AT_LEAST_ONE", prod, n);
    }
    else if (prod instanceof gast_public_RepetitionMandatoryWithSeparator) {
        return genDSLRule("AT_LEAST_ONE_SEP", prod, n);
    }
    else if (prod instanceof gast_public_RepetitionWithSeparator) {
        return genDSLRule("MANY_SEP", prod, n);
    }
    else if (prod instanceof gast_public_Repetition) {
        return genDSLRule("MANY", prod, n);
    }
    else if (prod instanceof gast_public_Alternation) {
        return genAlternation(prod, n);
    }
    else if (prod instanceof gast_public_Terminal) {
        return genTerminal(prod, n);
    }
    else if (prod instanceof gast_public_Flat) {
        return genDefinition(prod.definition, n);
    }
    else {
        throw Error("non exhaustive match");
    }
}
function genDSLRule(dslName, prod, n) {
    let result = indent(n, `$.${dslName + prod.idx}(`);
    if (prod.name || prod.separator) {
        result += "{" + NL;
        if (prod.name) {
            result += indent(n + 1, `NAME: "${prod.name}"`) + "," + NL;
        }
        if (prod.separator) {
            result +=
                indent(n + 1, `SEP: this.tokensMap.${tokens_public_tokenName(prod.separator)}`) +
                    "," +
                    NL;
        }
        result += `DEF: ${genDefFunction(prod.definition, n + 2)}` + NL;
        result += indent(n, "}") + NL;
    }
    else {
        result += genDefFunction(prod.definition, n + 1);
    }
    result += indent(n, `)`) + NL;
    return result;
}
function genDefFunction(definition, n) {
    let def = "function() {" + NL;
    def += genDefinition(definition, n);
    def += indent(n, `}`) + NL;
    return def;
}
function genDefinition(def, n) {
    let result = "";
    Object(utils["u" /* forEach */])(def, prod => {
        result += genProd(prod, n + 1);
    });
    return result;
}
function indent(howMuch, text) {
    const spaces = Array(howMuch * 4 + 1).join(" ");
    return spaces + text;
}
//# sourceMappingURL=generate.js.map
// CONCATENATED MODULE: ./es6/src/generate/generate_public.js

function generateParserFactory(options) {
    const wrapperText = genWrapperFunction({
        name: options.name,
        rules: options.rules
    });
    const constructorWrapper = new Function("tokenVocabulary", "config", "chevrotain", wrapperText);
    return function (config) {
        return constructorWrapper(options.tokenVocabulary, config, 
        // TODO: check how the require is transpiled/webpacked
        __webpack_require__(2));
    };
}
function generateParserModule(options) {
    return genUmdModule({ name: options.name, rules: options.rules });
}
//# sourceMappingURL=generate_public.js.map
// CONCATENATED MODULE: ./es6/src/api.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
/* concated harmony reexport VERSION */__webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* concated harmony reexport Parser */__webpack_require__.d(__webpack_exports__, "Parser", function() { return parser_Parser; });
/* concated harmony reexport CstParser */__webpack_require__.d(__webpack_exports__, "CstParser", function() { return parser_CstParser; });
/* concated harmony reexport EmbeddedActionsParser */__webpack_require__.d(__webpack_exports__, "EmbeddedActionsParser", function() { return parser_EmbeddedActionsParser; });
/* concated harmony reexport ParserDefinitionErrorType */__webpack_require__.d(__webpack_exports__, "ParserDefinitionErrorType", function() { return ParserDefinitionErrorType; });
/* concated harmony reexport EMPTY_ALT */__webpack_require__.d(__webpack_exports__, "EMPTY_ALT", function() { return EMPTY_ALT; });
/* concated harmony reexport Lexer */__webpack_require__.d(__webpack_exports__, "Lexer", function() { return lexer_public_Lexer; });
/* concated harmony reexport LexerDefinitionErrorType */__webpack_require__.d(__webpack_exports__, "LexerDefinitionErrorType", function() { return LexerDefinitionErrorType; });
/* concated harmony reexport createToken */__webpack_require__.d(__webpack_exports__, "createToken", function() { return createToken; });
/* concated harmony reexport createTokenInstance */__webpack_require__.d(__webpack_exports__, "createTokenInstance", function() { return createTokenInstance; });
/* concated harmony reexport EOF */__webpack_require__.d(__webpack_exports__, "EOF", function() { return EOF; });
/* concated harmony reexport tokenLabel */__webpack_require__.d(__webpack_exports__, "tokenLabel", function() { return tokenLabel; });
/* concated harmony reexport tokenMatcher */__webpack_require__.d(__webpack_exports__, "tokenMatcher", function() { return tokens_public_tokenMatcher; });
/* concated harmony reexport tokenName */__webpack_require__.d(__webpack_exports__, "tokenName", function() { return tokens_public_tokenName; });
/* concated harmony reexport defaultGrammarResolverErrorProvider */__webpack_require__.d(__webpack_exports__, "defaultGrammarResolverErrorProvider", function() { return defaultGrammarResolverErrorProvider; });
/* concated harmony reexport defaultGrammarValidatorErrorProvider */__webpack_require__.d(__webpack_exports__, "defaultGrammarValidatorErrorProvider", function() { return defaultGrammarValidatorErrorProvider; });
/* concated harmony reexport defaultParserErrorProvider */__webpack_require__.d(__webpack_exports__, "defaultParserErrorProvider", function() { return defaultParserErrorProvider; });
/* concated harmony reexport EarlyExitException */__webpack_require__.d(__webpack_exports__, "EarlyExitException", function() { return EarlyExitException; });
/* concated harmony reexport isRecognitionException */__webpack_require__.d(__webpack_exports__, "isRecognitionException", function() { return isRecognitionException; });
/* concated harmony reexport MismatchedTokenException */__webpack_require__.d(__webpack_exports__, "MismatchedTokenException", function() { return MismatchedTokenException; });
/* concated harmony reexport NotAllInputParsedException */__webpack_require__.d(__webpack_exports__, "NotAllInputParsedException", function() { return NotAllInputParsedException; });
/* concated harmony reexport NoViableAltException */__webpack_require__.d(__webpack_exports__, "NoViableAltException", function() { return NoViableAltException; });
/* concated harmony reexport defaultLexerErrorProvider */__webpack_require__.d(__webpack_exports__, "defaultLexerErrorProvider", function() { return defaultLexerErrorProvider; });
/* concated harmony reexport Alternation */__webpack_require__.d(__webpack_exports__, "Alternation", function() { return gast_public_Alternation; });
/* concated harmony reexport Flat */__webpack_require__.d(__webpack_exports__, "Flat", function() { return gast_public_Flat; });
/* concated harmony reexport NonTerminal */__webpack_require__.d(__webpack_exports__, "NonTerminal", function() { return gast_public_NonTerminal; });
/* concated harmony reexport Option */__webpack_require__.d(__webpack_exports__, "Option", function() { return gast_public_Option; });
/* concated harmony reexport Repetition */__webpack_require__.d(__webpack_exports__, "Repetition", function() { return gast_public_Repetition; });
/* concated harmony reexport RepetitionMandatory */__webpack_require__.d(__webpack_exports__, "RepetitionMandatory", function() { return gast_public_RepetitionMandatory; });
/* concated harmony reexport RepetitionMandatoryWithSeparator */__webpack_require__.d(__webpack_exports__, "RepetitionMandatoryWithSeparator", function() { return gast_public_RepetitionMandatoryWithSeparator; });
/* concated harmony reexport RepetitionWithSeparator */__webpack_require__.d(__webpack_exports__, "RepetitionWithSeparator", function() { return gast_public_RepetitionWithSeparator; });
/* concated harmony reexport Rule */__webpack_require__.d(__webpack_exports__, "Rule", function() { return gast_public_Rule; });
/* concated harmony reexport Terminal */__webpack_require__.d(__webpack_exports__, "Terminal", function() { return gast_public_Terminal; });
/* concated harmony reexport serializeGrammar */__webpack_require__.d(__webpack_exports__, "serializeGrammar", function() { return serializeGrammar; });
/* concated harmony reexport serializeProduction */__webpack_require__.d(__webpack_exports__, "serializeProduction", function() { return serializeProduction; });
/* concated harmony reexport GAstVisitor */__webpack_require__.d(__webpack_exports__, "GAstVisitor", function() { return gast_visitor_public_GAstVisitor; });
/* concated harmony reexport assignOccurrenceIndices */__webpack_require__.d(__webpack_exports__, "assignOccurrenceIndices", function() { return assignOccurrenceIndices; });
/* concated harmony reexport resolveGrammar */__webpack_require__.d(__webpack_exports__, "resolveGrammar", function() { return gast_resolver_public_resolveGrammar; });
/* concated harmony reexport validateGrammar */__webpack_require__.d(__webpack_exports__, "validateGrammar", function() { return gast_resolver_public_validateGrammar; });
/* concated harmony reexport createSyntaxDiagramsCode */__webpack_require__.d(__webpack_exports__, "createSyntaxDiagramsCode", function() { return createSyntaxDiagramsCode; });
/* concated harmony reexport generateParserFactory */__webpack_require__.d(__webpack_exports__, "generateParserFactory", function() { return generateParserFactory; });
/* concated harmony reexport generateParserModule */__webpack_require__.d(__webpack_exports__, "generateParserModule", function() { return generateParserModule; });
// semantic version



// Tokens utilities

// Other Utilities



// grammar reflection API

// GAST Utilities



/* istanbul ignore next */
function clearCache() {
    console.warn("The clearCache function was 'soft' removed from the Chevrotain API." +
        "\n\t It performs no action other than printing this message." +
        "\n\t Please avoid using it as it will be completely removed in the future");
}


//# sourceMappingURL=api.js.map

/***/ })
/******/ ]);
});