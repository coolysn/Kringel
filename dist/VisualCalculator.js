import { LatexCalculator } from "./LatexCalculator.js";
export class VisualCalculator {
    constructor(inputId, resultId) {
        this.inputField = document.getElementById(inputId);
        this.resultElement = document.getElementById(resultId);
        this.logic = new LatexCalculator();
        this.setupButtons();
        // Kuula MathLive input muutusi
        this.inputField.addEventListener('input', () => {
            const content = this.inputField.value;
            this.logic.setContents(content);
        });
    }
    insertToInput(content) {
        this.inputField.insert(content);
        this.inputField.focus();
    }
    setupButtons() {
        var _a, _b, _c;
        document.querySelectorAll('.calc-button').forEach((el) => {
            const button = el;
            button.addEventListener('click', () => {
                const content = button.getAttribute('data-content');
                if (content) {
                    this.insertToInput(content);
                }
            });
        });
        (_a = document.getElementById('calc-evaluate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            const result = this.logic.evaluate();
            this.resultElement.textContent = `= ${result}`;
        });
        (_b = document.getElementById('calc-clear')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            this.inputField.value = '';
            this.resultElement.textContent = '';
            this.logic.clear();
            this.inputField.focus();
        });
        (_c = document.getElementById('calc-backspace')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
            this.inputField.executeCommand('deleteBackward');
            this.inputField.focus();
        });
    }
}
console.log("test");
