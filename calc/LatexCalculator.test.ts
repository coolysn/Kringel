import { LatexCalculator } from './LatexCalculator';

describe('LatexCalculator', () => {
  let calc: LatexCalculator;

  beforeEach(() => {
    calc = new LatexCalculator();
  });

  test('evaluates simple expression', () => {
    calc.insert('2+2');
    expect(calc.evaluate()).toBe('4');
  });

  test('evaluates \sqrt{} expression', () => {
    calc.insert('\\sqrt{9}');
    expect(calc.evaluate()).toBe('3');
  });

  test('evaluates \frac{}{} expression', () => {
    calc.insert('\\frac{10}{2}');
    expect(calc.evaluate()).toBe('5');
  });

  test('handles invalid expression', () => {
    calc.insert('invalid');
    expect(calc.evaluate()).toBe('Viga!');
  });
});