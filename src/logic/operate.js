import Big from 'big.js';

export default function operate(numberOne, operation, numberTwo) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  const format = (bigNumber) => (bigNumber.c.length >= 10
    ? bigNumber.toFixed(8).toString()
    : bigNumber.toString());

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
}
