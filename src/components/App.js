import '../stylesheet/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="container">
      <div className="row flex-column calculator">
        <Display />
        <div className="col-12 h-75">
          <ButtonPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
