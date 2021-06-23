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
