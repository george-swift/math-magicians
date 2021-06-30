import operate from './operate';

export default function calculate(data, buttonName) {
  const {
    total,
    next,
    operation,
    temp,
  } = data;

  const watchExp = (total, input) => {
    if (total.includes('.') && !total.includes('e')) return `${total}${input}`;
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
          ...data,
          next: `${next * -1}`,
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
          ...data,
          next: next.includes('%') ? next : `${next / 100}`,
          temp: false,
        };
      }

      return total
        ? {
          ...data,
          total: total.includes('%') ? total : `${total / 100}`,
          temp: false,
        }
        : {
          ...data,
          total: '0',
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
          ...data,
          next: next.includes('.') ? next : `${next}.`,
          temp: false,
        };
      }
      if (total) {
        return {
          ...data,
          total: total.includes('.') ? total : `${total}.`,
          temp: false,
        };
      }
      return {
        ...data,
        total: '0.',
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
          ...data,
          next: next ? watchExp(next, buttonName) : buttonName,
        };
      }

      if (temp) {
        return {
          ...data,
          total: buttonName,
          temp: false,
        };
      }

      return {
        ...data,
        total: total ? watchExp(total, buttonName) : buttonName,
      };
  }
}
