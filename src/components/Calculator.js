import { useState } from 'react';
import { FcCalculator } from 'react-icons/fc';
import { GiPointyHat } from 'react-icons/gi';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const calculatorData = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [data, setData] = useState(calculatorData);

  const handleClick = (buttonName) => setData((data) => calculate(data, buttonName));

  const { total, next, operation } = data;

  return (
    <div className="container wrapper">
      <div className="row w-100 me-0">
        <div className="col-md-3 mb-4 p-2">
          <h1 className="display-4">
            Let&apos;s do some math!
            <GiPointyHat />
            <FcCalculator />
          </h1>
          <ul className="mt-3">
            <li>Click the AC button to clear</li>
            <li>Click on other buttons for evaluations</li>
          </ul>
        </div>
        <div className="col-md-9 d-flex justify-content-end">
          <div className="row flex-column calculator">
            <Display operation={operation} result={next || total || '0'} />
            <ButtonPanel clickHandler={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
