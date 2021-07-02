import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';

describe('Snapshot of Home Page', () => {
  test('should render page correctly', () => {
    const tree = renderer
      .create(<Router><Home /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
