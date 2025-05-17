"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisualCalculator = void 0;
var LatexCalculator_1 = require("./LatexCalculator");
var VisualCalculator = /** @class */ (function () {
    function VisualCalculator(inputId, renderId, resultId) {
        this.inputElement = document.getElementById(inputId);
        this.renderElement = document.getElementById(renderId);
        this.resultElement = document.getElementById(resultId);
        this.logic = new LatexCalculator_1.LatexCalculator();
        this.setupButtons();
    }
    VisualCalculator.prototype.insertToInput = function (content) {
        var cursorPos = this.inputElement.selectionStart;
        var currentValue = this.inputElement.value;
        var newValue = currentValue.slice(0, cursorPos) + content + currentValue.slice(cursorPos);
        this.inputElement.value = newValue;
        this.logic.insert(content);
        this.render();
    };
    VisualCalculator.prototype.render = function () {
        this.renderElement.innerHTML = "\\(".concat(this.logic.getContents(), "\\)");
        // @ts-ignore
        MathJax.typesetPromise();
    };
    VisualCalculator.prototype.evaluate = function () {
        var result = this.logic.evaluate();
        this.resultElement.innerHTML = "= ".concat(result);
    };
    VisualCalculator.prototype.clear = function () {
        this.logic.clear();
        this.inputElement.value = '';
        this.renderElement.innerHTML = '';
        this.resultElement.innerHTML = '';
    };
    VisualCalculator.prototype.setupButtons = function () {
        var _this = this;
        var _a, _b, _c;
        document.querySelectorAll('.calc-button').forEach(function (el) {
            var button = el;
            button.addEventListener('click', function () {
                var content = button.getAttribute('data-content');
                if (content) {
                    _this.insertToInput(content);
                }
            });
        });
        (_a = document.getElementById('calc-evaluate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.evaluate();
        });
        (_b = document.getElementById('calc-clear')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            _this.clear();
        });
        (_c = document.getElementById('calc-backspace')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
            // TODO: implement backspace
        });
    };
    return VisualCalculator;
}());
exports.VisualCalculator = VisualCalculator;
