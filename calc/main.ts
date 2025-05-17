import { VisualCalculator } from './VisualCalculator';

window.addEventListener('DOMContentLoaded', () => {
  new VisualCalculator('latexInput', 'renderArea', 'resultArea');
});