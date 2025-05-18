import { LatexCalculator } from '../calc/LatexCalculator';

describe('LatexCalculator', () => {
  let calc: LatexCalculator;

  beforeEach(() => {
    calc = new LatexCalculator();
  });

  test('evaluates simple addition', () => {
    calc.insert('2+3');
    expect(calc.evaluate()).toBe('5');
  });

  test('evaluates fractions', () => {
    calc.insert('\\frac{6}{2}');
    expect(calc.evaluate()).toBe('3');
  });

  test('evaluates sqrt', () => {
    calc.insert('\\sqrt{9}');
    expect(calc.evaluate()).toBe('3');
  });

  test('evaluates pi', () => {
    calc.insert('\\pi');
    expect(calc.evaluate()).toBe(String(Math.PI));
  });

  test('returns error for invalid input', () => {
    calc.insert('2++2');
    expect(calc.evaluate()).toBe('Error');
  });
});
