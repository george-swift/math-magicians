import '../stylesheet/App.css';
import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default function App() {
  const calculatorData = {
    total: null,
    next: null,
    operation: null,
  };

  const [data, setData] = useState(calculatorData);

  const handleClick = (buttonName) => setData((data) => calculate(data, buttonName));

  const { total, next, operation } = data;

  return (
    <div className="container">
      <div className="row flex-column calculator">
        <Display operation={operation} result={next || total || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
}
