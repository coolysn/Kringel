import { LatexCalculator } from '../calc/LatexCalculator';

describe('BaseCalculator (via LatexCalculator)', () => {
  test('insert and getContents work', () => {
    const calc = new LatexCalculator();
    calc.insert('123');
    expect(calc.getContents()).toBe('123');
  });

  test('clear resets panelContents', () => {
    const calc = new LatexCalculator();
    calc.insert('test');
    calc.clear();
    expect(calc.getContents()).toBe('');
  });
});
