import { LatexCalculator } from "./LatexCalculator.js";

export class VisualCalculator {
    private inputField: any; // MathField
    private resultElement: HTMLElement;
    private logic: LatexCalculator;

    constructor(inputId: string, resultId: string) {
        this.inputField = document.getElementById(inputId);
        this.resultElement = document.getElementById(resultId) as HTMLElement;
        this.logic = new LatexCalculator();
        this.setupButtons();
        
        // Kuula MathLive input muutusi
        this.inputField.addEventListener('input', () => {
            const content = this.inputField.value;
            this.logic.setContents(content);
        });
    }

    insertToInput(content: string) {
        this.inputField.insert(content);
        this.inputField.focus();
    }

    setupButtons() {
        document.querySelectorAll('.calc-button').forEach((el) => {
            const button = el as HTMLButtonElement;
            button.addEventListener('click', () => {
                const content = button.getAttribute('data-content');
                if (content) {
                    this.insertToInput(content);
                }
            });
        });

        document.getElementById('calc-evaluate')?.addEventListener('click', () => {
            const result = this.logic.evaluate();
            this.resultElement.textContent = `= ${result}`;
        });

        document.getElementById('calc-clear')?.addEventListener('click', () => {
            this.inputField.value = '';
            this.resultElement.textContent = '';
            this.logic.clear();
            this.inputField.focus();
        });

        document.getElementById('calc-backspace')?.addEventListener('click', () => {
            this.inputField.executeCommand('deleteBackward');
            this.inputField.focus();
        });
    }
}

console.log("test");
