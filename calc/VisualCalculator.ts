import { LatexCalculator } from "./LatexCalculator.js";

export class VisualCalculator{
    private inputElement: HTMLTextAreaElement;
    private renderElement: HTMLElement;
    private resultElement: HTMLElement;
    private logic: LatexCalculator;

    constructor(inputId: string, renderId: string, resultId: string){
        this.inputElement = document.getElementById(inputId) as HTMLTextAreaElement;
        this.renderElement = document.getElementById(renderId) as HTMLElement;
        this.resultElement = document.getElementById(resultId) as HTMLElement;
        this.logic = new LatexCalculator();
        this.setupButtons();
    }

    insertToInput(content: string) {
        const cursorPos = this.inputElement.selectionStart;
        const currentValue = this.inputElement.value;
        const newValue = currentValue.slice(0, cursorPos) + content + currentValue.slice(cursorPos);
        this.inputElement.value = newValue;
        this.logic.insert(content);
        this.render();
    }

    render() {
        this.renderElement.innerHTML = `\\(${this.logic.getContents()}\\)`;
        // @ts-ignore
        MathJax.typesetPromise();
    }

    evaluate(){
        const result = this.logic.evaluate();
        this.resultElement.innerHTML = `= ${result}`;
    }

    clear(){
        this.logic.clear();
        this.inputElement.value = '';
        this.renderElement.innerHTML = '';
        this.resultElement.innerHTML = '';
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
            this.evaluate();
        });

        document.getElementById('calc-clear')?.addEventListener('click', () => {
            this.clear();
        });

        document.getElementById('calc-backspace')?.addEventListener('click', () => {
            // TODO: implement backspace
        });
    }

}