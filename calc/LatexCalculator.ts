import { BaseCalculator } from './BaseCalculator.js'; //RUN "npx tsc" not separately filenameiga bcuz vale compile tuleb

export class LatexCalculator extends BaseCalculator {
    evaluate(): string | number {
        let expr = this.getContents(); //LAtexi kujul string

        // Toeta sisestusi nagu 9\cos(9) või 9\cos{9}
        expr = expr
            // Keerukam ^ → ** (nt x^2 või x^{2+1} või 2^1.5)
            .replace(/([a-zA-Z0-9.\)\]]+)\s*\^\s*(?:{([^}]+)}|([0-9.\-+*/a-zA-Z()]+))/g, (_, base, exp1, exp2) => {
                const exponent = exp1 || exp2;
                return `(${base})**(${exponent})`;
            })
            // Lihtne ^ → ** (nt 2^3 või (1+2)^4.5)
            .replace(/(\d+(\.\d+)?|\([^()]+\))\s*\^\s*([-\d.]+)/g, '($1)**($3)')

            // 9\cos(9) -> 9*Math.cos(9) sin cos tan
            .replace(/(\d+)\s*\\(sin|cos|tan)\s*\(([^)]*)\)/g, '($1)*Math.$2($3)')
            .replace(/(\d+)\s*\\(sin|cos|tan)\s*{([^}]*)}/g, '($1)*Math.$2($3)')

            .replace(/\\(sin|cos|tan)\s*\(([^)]*)\)/g, 'Math.$1($2)')
            .replace(/\\(sin|cos|tan)\s*{([^}]*)}/g, 'Math.$1($2)')

            // \sqrt{9} -> Math.sqrt(9)
            .replace(/\\sqrt\s*{([^}]*)}/g, 'Math.sqrt($1)')
            // \sqrt9 (ilma süvendita)
            .replace(/\\sqrt\s*(\d+(\.\d+)?)/g, 'Math.sqrt($1)')

            // \pi -> Math.PI
            .replace(/\\pi/g, 'Math.PI')

            // \frac93 → (9)/(3)
            .replace(/\\frac\s*(\d+)\s*(\d+)/g, '($1)/($2)')
            // korralik \frac{a}{b}
            .replace(/\\frac\s*{([^}]*)}{([^}]*)}/g, (match, a, b) => {
            if (!a || !b || a.trim() === '' || b.trim() === '') return '(0)/(1)';
            return `(${a})/(${b})`;
            })

            // eemalda \left ja \right tühikud?
            .replace(/\\left|\\right/g, '')
            .replace(/\\(sin|cos|tan)\s+([a-zA-Z0-9]+)/g, 'Math.$1($2)') // \cos x ilma sulgudeta
            .replace(/[^\x20-\x7E]/g, ''); // eemalda mittestandardsed märgid MathLive vahest lisab unicode märke

        try {
            console.log('Evaluated expression:', expr);

            const fn = new Function('Math', `return ${expr}`);
            const result = fn(Math);
            //Turvakontroll:
            if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
                return result; //hetkel result numbrina kuid saaks salvestada nt latex kujul inputis: return `\\[ ${latexInput} = ${result} \\]`;
            }
            return 'Error';
        } catch (e) {
            console.error('Eval error:', e);
            return 'Error';
        }
    }
}


