import renderer from 'react-test-renderer';
import Button from '../components/Button';

test('Button renders correctly', () => {
  const tree = renderer
    .create(<Button name="number-5" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button supports unicode escape sequence', () => {
  const tree = renderer
    .create(<Button name="division" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
