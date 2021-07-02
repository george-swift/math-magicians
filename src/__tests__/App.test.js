import renderer from 'react-test-renderer';
import App from '../components/App';

describe('App component', () => {
  test('Should render child components and routes correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
