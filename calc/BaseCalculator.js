"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCalculator = void 0;
var BaseCalculator = /** @class */ (function () {
    function BaseCalculator() {
        this.panelContents = ''; //kalkulaatori mälu
    }
    BaseCalculator.prototype.insert = function (content) {
        this.panelContents += content;
    };
    BaseCalculator.prototype.getContents = function () {
        return this.panelContents;
    };
    BaseCalculator.prototype.clear = function () {
        this.panelContents = '';
    };
    return BaseCalculator;
}());
exports.BaseCalculator = BaseCalculator;
