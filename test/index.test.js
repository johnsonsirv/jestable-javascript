import * as index from '../src/index.js';

describe('calculator', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(index.calculator.sum(1, 2)).toBe(3);
  });
  test('subtracts 10 - 5 to equal 5', () => {
    expect(index.calculator.subtract(10, 5)).toBe(5);
  });
  test('divides 10 / 5 to equal 2', () => {
    expect(index.calculator.divide(10, 5)).toBe(2);
  });
  test('multiplies 5 * 2 to equal 10', () => {
    expect(index.calculator.multiply(5, 2)).toBe(10);
  });
});
