import PropTypes from 'prop-types';
import { groups } from '../data/groups.json';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <div className="col-12 h-75">
      {Object.keys(groups).map((name) => (
        <div key={name} className={name}>
          {groups[name].map((btn) => (
            <Button key={btn} name={btn} clickHandler={handleClick} />
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
