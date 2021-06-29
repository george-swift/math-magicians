import '../stylesheet/App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = (buttonName) => {
      this.setState((prevState) => calculate(prevState, buttonName));
    };
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="container">
        <div className="row flex-column calculator">
          <Display operation={operation} result={next || total || '0'} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
export default App;
