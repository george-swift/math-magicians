import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quotes';

describe('Testing the Quote page', () => {
  test('Renders quote of the day on page', () => {
    const { getByText } = render(<Quote />);
    const textNode = getByText('Quote of the day');
    expect(textNode).toBeInTheDocument();
  });

  test('should show source title of quote', () => {
    render(<Quote />);
    const quote = document.querySelector('blockquote');
    const source = within(quote).getByTitle('Source Title');
    expect(source).toBeInTheDocument();
  });
});
