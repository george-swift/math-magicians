import '../stylesheet/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="container">
      <div className="row flex-column calculator">
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
