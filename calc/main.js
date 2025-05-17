"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VisualCalculator_1 = require("./VisualCalculator");
window.addEventListener('DOMContentLoaded', function () {
    new VisualCalculator_1.VisualCalculator('latexInput', 'renderArea', 'resultArea');
});
