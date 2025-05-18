import { BaseCalculator } from './BaseCalculator.js';

export class LatexCalculator extends BaseCalculator {
    evaluate(): string | number {
        let expr = this.getContents();

        // Toeta kujundeid nagu 9\cos(9) või 9\cos{9}
        expr = expr
            // 9\cos(9) -> 9*Math.cos(9)
            .replace(/(\d+)\s*\\(sin|cos|tan)\s*\(([^)]*)\)/g, '($1)*Math.$2($3)')
            .replace(/(\d+)\s*\\(sin|cos|tan)\s*{([^}]*)}/g, '($1)*Math.$2($3)')
            // \sin(9) -> Math.sin(9)
            .replace(/\\(sin|cos|tan)\s*\(([^)]*)\)/g, 'Math.$1($2)')
            .replace(/\\(sin|cos|tan)\s*{([^}]*)}/g, 'Math.$1($2)')
            // \sqrt{9} -> Math.sqrt(9)
            .replace(/\\sqrt\s*{([^}]*)}/g, 'Math.sqrt($1)')
            // \pi -> Math.PI
            .replace(/\\pi/g, 'Math.PI')
            // \frac{a}{b} -> (a)/(b)
            .replace(/\\frac\s*{([^}]*)}{([^}]*)}/g, '($1)/($2)')
            .replace(/\\left|\\right/g, '');

        try {
            //Loob funktsiooni mis tunneb Mathi ära
            console.log('Evaluated expression:', expr);
            const fn = new Function('Math', `return ${expr}`);
            const result = fn(Math);

            if(typeof result === 'number' && !isNaN(result) && isFinite(result)) {
                return result;
            }
            return 'Error';
        } catch (e) {
            console.error('Eval error:', e);
            return 'Error';
        }
    }
}
