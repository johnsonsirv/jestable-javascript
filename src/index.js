
const capitalize = (param) => `${param[0].toUpperCase()}${param.slice(1)}`;

const reverseString = (param) => param.split('').reverse().join('');

const calculator = (() => {
  const sum = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  return {
    sum, subtract, divide, multiply,
  };
})();

const arrayAnalysis = (arr) => {
  return {
    average: arr.reduce((acc, curr) => acc + curr) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};
export {
  calculator,
  capitalize,
  reverseString,
  arrayAnalysis,
};