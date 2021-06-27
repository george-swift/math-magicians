import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('Correct class names derived from name prop ', () => {
  const btnStyle = (value) => {
    if (value === 'AC') return 'clear';
    if (value === '\u002e') return 'decimal';
    return (typeof value === 'number') ? 'number' : 'operator';
  };

  const keyset = {
    allclear: 'AC',
    division: '\u002f',
    'number-6': 6,
    decimal: '\u002e',
  };

  test('Should return correct class for clear button', () => {
    const { allclear } = keyset;
    expect(btnStyle(allclear)).toMatch('clear');
  });

  test('Should return decimal class for decimal button', () => {
    const { decimal } = keyset;
    expect(btnStyle(decimal)).toMatch('decimal');
  });

  test('Should return number class for digit buttons', () => {
    const digit = keyset['number-6'];
    expect(btnStyle(digit)).not.toBe('operator');
    expect(btnStyle(digit)).toBe('number');
  });

  test('Should return correct class for operator buttons', () => {
    const { division } = keyset;
    expect(btnStyle(division)).not.toBe('number');
    expect(btnStyle(division)).toMatch('operator');
  });
});

describe('Correct mutation of data object depending on button name', () => {
  const data = {
    total: 10,
    next: 10,
    operation: '+',
    temp: false,
  };

  test('Should nullify total, next and operation values with clear button', () => {
    const mutatedObject = calculate(data, 'AC');
    const mutatedKeys = Object.keys(mutatedObject).filter((key) => mutatedObject[key] === null);
    expect(mutatedKeys).toHaveLength(3);

    const mutatedValues = Object.values(mutatedObject);
    const expected = [null, null, null, false];
    expect(mutatedValues).toEqual(expect.arrayContaining(expected));
  });

  test('Should add decimal sign correctly during mutation', () => {
    data.next = '10';
    const mutatedObject = calculate(data, '.');
    const decimalNumber = mutatedObject.next;
    expect(decimalNumber).toMatch('10.');

    data.total = '10.25';
    const onlyOneDecimal = calculate(data, '.').total;
    expect(onlyOneDecimal.match('.')).toHaveLength(1);
    expect(onlyOneDecimal.endsWith('5')).toBeTruthy();
  });

  test('Should resolve percentages correctly during mutation', () => {
    const mutatedObject = calculate(data, '%');
    const percent = mutatedObject.next;
    expect(percent).toEqual('0.1');
  });

  test('Should return evaluations on pressing equals button', () => {
    data.total = 10;
    data.next = 10;
    data.operation = 'x';

    const mutatedObject = calculate(data, '=');
    const { total } = mutatedObject;
    expect(total).toEqual('100');
  });

  test('Should prep for new evaluations on pressing equals button', () => {
    data.total = 100;
    data.next = 10;
    data.operation = '/';

    const mutatedObject = calculate(data, '=');
    const mutatedValues = Object.values(mutatedObject);
    const expected = ['10', null, null, true];
    expect(mutatedValues).toEqual(expect.arrayContaining(expected));
  });
});

describe('Performing simple math operations', () => {
  let num1 = 2;
  let num2 = 5;

  test('Should return string evaluation of button inputs', () => {
    const result = operate(num1, 'x', num2);
    expect(result).toBe('10');
  });

  test('Should return exponential form if evaluated string is more than 10 values', () => {
    num1 = 789651;
    num2 = 8532147;
    const result = operate(num1, 'x', num2);
    expect(result).toEqual('6.73741841e+12');
  });
});
