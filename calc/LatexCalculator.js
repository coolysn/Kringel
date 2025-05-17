"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

import { BaseCalculator } from './BaseCalculator.js';

export class LatexCalculator extends BaseCalculator {
    evaluate() {
        try {
            const expr = this.panelContents
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
