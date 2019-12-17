/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

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

const ceaserCipher = (strParam, key) => {
  const alphabetsLower = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetsUpper = alphabetsLower.toUpperCase();
  const regex = /[A-Za-z]/;

  const cipherText = strParam.split('').map((char) => {
    const Acode = 'A'.charCodeAt(0);
    const Zcode = 'Z'.charCodeAt(0);
    const aCode = 'a'.charCodeAt(0);
    const zCode = 'z'.charCodeAt(0);
    const charCode = char.charCodeAt(0);
    const cipherCharCode = charCode + key;

    if (!regex.test(char)) return char;
    if (alphabetsLower.includes(char)) {
      return (
        cipherCharCode <= zCode
          ? String.fromCharCode(cipherCharCode)
          : String.fromCharCode(((charCode - aCode + key) % 26) + aCode)
      );
    }
    if (alphabetsUpper.includes(char)) {
      return (
        cipherCharCode <= Zcode
          ? String.fromCharCode(cipherCharCode)
          : String.fromCharCode(((charCode - Acode + key) % 26) + Acode)
      );
    }
  }).join('');

  return cipherText;
};

const arrayAnalysis = (arr) => ({
  average: arr.reduce((acc, curr) => acc + curr) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

export {
  calculator,
  capitalize,
  reverseString,
  arrayAnalysis,
  ceaserCipher,
};