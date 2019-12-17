
const capitalize = (param) => {
  const firstChar = `${param[0].toUpperCase()}${param.slice(1)}`;
  return firstChar;
};
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

export {
  calculator,
  capitalize,
  reverseString,
};