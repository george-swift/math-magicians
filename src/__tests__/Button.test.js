import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Testing button component with passed props', () => {
  const handleClick = jest.fn();

  test('Button renders correctly', () => {
    const tree = renderer
      .create(<Button name="number-5" clickHandler={handleClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Button supports unicode escape sequence', () => {
    const tree = renderer
      .create(<Button name="division" clickHandler={handleClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Calls onClick prop when clicked', () => {
    render(<Button name="percentage" clickHandler={handleClick} />);
    fireEvent.click(screen.getByText(/%/));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
