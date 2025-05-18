export class BaseCalculator {
    constructor() {
        this.panelContents = ''; //kalkulaatori mälu
    }
    insert(content) {
        this.panelContents += content;
    }
    setContents(content) {
        this.panelContents = content;
    }
    getContents() {
        return this.panelContents;
    }
    clear() {
        this.panelContents = '';
    }
    backspace() {
        this.panelContents = this.panelContents.slice(0, -1);
    }
}
