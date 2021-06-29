import renderer from 'react-test-renderer';
import Display from '../components/Display';

test('Display renders outcomes of calculations correctly', () => {
  const tree = renderer
    .create(<Display result="10" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Display has default prop value of 0', () => {
  const tree = renderer
    .create(<Display />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Display renders operation correctly', () => {
  const tree = renderer
    .create(<Display operation="x" result="10" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
