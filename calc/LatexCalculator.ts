import { BaseCalculator } from './BaseCalculator.js';
export class LatexCalculator extends BaseCalculator {
    evaluate(): string {
        try {
            let expr = this.panelContents
                .replace(/\\frac{([^}]*)}{([^}]*)}/g, '($1)/($2)')
                .replace(/\\sqrt{([^}]*)}/g, 'Math.sqrt($1)')
                .replace(/\\pi/g, 'Math.PI')
                .replace(/\\sin\(([^)]*)\)/g, 'Math.sin($1)')
                .replace(/\\cos\(([^)]*)\)/g, 'Math.cos($1)')
                .replace(/\^/g, '**');
            
            const result = Function(`return (${expr})`)();
            return result.toString();
        } catch (e) {
            return "Error";
        }
    }   
}