import operate from './operate';

export default function calculate(data, buttonName) {
  const {
    total,
    next,
    operation,
    temp,
  } = data;

  const watchExp = (total, input) => {
    if (total.includes('.')) return `${total}${input}`;
    const curr = Number(total).toPrecision();
    const output = curr + input;
    return (output.length > 12)
      ? Number(output).toExponential(8)
      : output;
  };

  switch (buttonName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
        temp: false,
      };

    case '+/-':
      return next
        ? {
          total,
          next: `${next * -1}`,
          operation,
          temp: false,
        }
        : {
          total: `${total * -1}`,
          next,
          operation: null,
          temp: false,
        };

    case '%':
      if (next) {
        return {
          total,
          next: next.includes('%') ? next : `${next / 100}`,
          operation,
          temp: false,
        };
      }

      return total
        ? {
          total: total.includes('%') ? total : `${total / 100}`,
          next,
          operation,
          temp: false,
        }
        : {
          total: '0',
          next,
          operation,
        };

    case '+':
    case '-':
    case 'x':
    case '/':
      return (next && operation)
        ? {
          total: operate(total, operation, next),
          next: null,
          operation: buttonName,
          temp: false,
        }
        : {
          total,
          next: null,
          operation: buttonName,
          temp: false,
        };

    case '.':
      if (next) {
        return {
          total,
          next: next.includes('.') ? next : `${next}.`,
          operation,
          temp: false,
        };
      }
      if (total) {
        return {
          total: total.includes('.') ? total : `${total}.`,
          next,
          operation,
          temp: false,
        };
      }
      return {
        total: '0.',
        next,
        operation,
      };

    case '=':
      return operation
        ? {
          total: operate(total, operation, next),
          next: null,
          operation: null,
          temp: true,
        }
        : {
          total,
          next: null,
          operation: null,
          temp: true,
        };

    default:
      if (operation) {
        return {
          total,
          next: next ? watchExp(next, buttonName) : buttonName,
          operation,
        };
      }

      if (temp) {
        return {
          total: buttonName,
          next,
          operation,
          temp: false,
        };
      }

      return {
        total: total ? watchExp(total, buttonName) : buttonName,
        next,
        operation,
      };
  }
}
