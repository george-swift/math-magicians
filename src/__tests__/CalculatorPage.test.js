import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, within } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Snapshot of Calculator Page', () => {
  test('should render page correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test calculator component', () => {
  test('Information from wireframe is on calculator page', () => {
    const { getByText } = render(<Calculator />);
    const textNode = getByText("Let's do some math!");
    expect(textNode).toBeInTheDocument();
  });

  test('Renders all the required calculator buttons in panel', () => {
    render(<Calculator />);
    const buttonPanel = document.querySelector('.calculator');
    const buttons = within(buttonPanel).getAllByRole('button');
    expect(buttons).toHaveLength(19);
  });
});
