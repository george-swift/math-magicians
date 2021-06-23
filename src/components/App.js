import '../stylesheet/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

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
