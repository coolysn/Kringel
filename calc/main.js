"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatexCalc = exports.BaseCalc = void 0;
var BaseCalc = /** @class */ (function () {
    function BaseCalc() {
        this.panelContents = ''; //kalkulaatori mälu
    }
    BaseCalc.prototype.insert = function (content) {
        this.panelContents += content;
    };
    BaseCalc.prototype.getContents = function () {
        return this.panelContents;
    };
    BaseCalc.prototype.clear = function () {
        this.panelContents = '';
    };
    return BaseCalc;
}());
exports.BaseCalc = BaseCalc;
var LatexCalc = /** @class */ (function (_super) {
    __extends(LatexCalc, _super);
    function LatexCalc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LatexCalc.prototype.evaluate = function () {
        try {
            var expr = this.panelContents
                .replace(/\\frac{([^}]*)}{([^}]*)}/g, '($1)/($2)')
                .replace(/\\sqrt{([^}]*)}/g, 'Math.sqrt($1)')
                .replace(/\\pi/g, 'Math.PI')
                .replace(/\\sin\(([^)]*)\)/g, 'Math.sin($1)')
                .replace(/\\cos\(([^)]*)\)/g, 'Math.cos($1)')
                .replace(/\^/g, '**');
            var result = Function("return (".concat(expr, ")"))();
            return result.toString();
        }
        catch (e) {
            return "Error";
        }
    };
    return LatexCalc;
}(BaseCalc));
exports.LatexCalc = LatexCalc;
