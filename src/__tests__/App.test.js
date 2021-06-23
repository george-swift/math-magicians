import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

describe('Test calculator layout', () => {
  const { container } = render(<App />);

  test('Renders all required calculator buttons in panel', () => {
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(19);
  });
});
