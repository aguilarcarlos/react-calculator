export const isNumber = value => /[0-9]/ig.test(value)
export const isOperator = value => /^(x|ac|[+=÷-])$/gi.test(value)
export const math = {
  sum: (num1 = 0, num2 = 0) => parseFloat(num1) + parseFloat(num2),
  mul: (num1 = 0, num2 = 0) => parseFloat(num1) * parseFloat(num2),
  sub: (num1 = 0, num2 = 0) => parseFloat(num1) - parseFloat(num2),
  div: (num1 = 0, num2 = 0) => parseFloat(num1) / parseFloat(num2)
};

export default {
  isNumber,
  isOperator,
  math
};
