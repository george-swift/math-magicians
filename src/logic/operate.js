import Big from 'big.js';

export default function operate(numberOne, operation, numberTwo) {
  let num1;
  let num2;

  try {
    num1 = Big(numberOne);
    num2 = Big(numberTwo);
  } catch (error) {
    return 0;
  }

  const format = (bigNumber) => (bigNumber.c.length >= 10
    ? bigNumber.toFixed(8).toString()
    : bigNumber.toString());

  try {
    switch (operation) {
      case '+':
        return format(num1.plus(num2));
      case '-':
        return format(num1.minus(num2));
      case 'x':
        return format(num1.times(num2));
      case '/':
        return format(num1.div(num2));
      case '+/-':
        return format(num1.times(-1));
      default:
        return '0';
    }
  } catch (error) {
    return 'Error';
  }
}
