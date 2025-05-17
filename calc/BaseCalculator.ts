export abstract class BaseCalculator{
    protected panelContents: string = ''; //kalkulaatori mälu
    abstract evaluate(): string | number; //Tagastab kalkulaatori väljundi

    insert(content: string): void {
        this.panelContents += content; 
    }

    getContents(): string {
        return this.panelContents;
    }

    clear(): void {
        this.panelContents = '';
    }
}