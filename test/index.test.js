import * as index from '../src/index.js';

test('capitalize hello to equal Hello', () => {
  expect(index.capitalize('hello')).toBe('Hello');
});
test('reverse hello to equal olleh', () => {
  expect(index.reverseString('hello')).toBe('olleh');
});

describe('calculator operations', () => {
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
describe('array analysis', () => {
  test('arrayAnalysis of [10,20,30,40] to return object', () => {
    expect(index.arrayAnalysis([10, 20, 30, 40])).toEqual({
      average: 25,
      min: 10,
      max: 40,
      length: 4,
    });
  });
  test('average of [10,20,30,40] to equal 25', () => {
    expect(index.arrayAnalysis([10, 20, 30, 40]).average).toBe(25);
  });
  test('min of [10,20,30,40] to equal 10', () => {
    expect(index.arrayAnalysis([10, 20, 30, 40]).min).toBe(10);
  });
  test('max of [10,20,30,40] to equal 40', () => {
    expect(index.arrayAnalysis([10, 20, 30, 40]).max).toBe(40);
  });
  test('length of [10,20,30,40] to equal 4', () => {
    expect(index.arrayAnalysis([10, 20, 30, 40]).length).toBe(4);
  });
});

describe('ceaser cipher with key', () => {
  test('punctuation: \'birds, feather\' to equal \'ipykz, mlhaoly\'', () => {
    expect(index.ceaserCipher('birds, feather', 7)).toBe('ipykz, mlhaoly');
  });
  test('same case: \'Birds Feather\' to equal \'Ipykz Mlhaoly\'', () => {
    expect(index.ceaserCipher('Birds Feather', 7)).toBe('Ipykz Mlhaoly');
  });
  test('convert \'fullstack\' to equal \'hwnnuvcem\'', () => {
    expect(index.ceaserCipher('fullstack', 2)).toBe('hwnnuvcem');
  });
});