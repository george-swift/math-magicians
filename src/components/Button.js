import PropTypes from 'prop-types';
import keySet from '../data/keySet';

const btnStyle = (value) => {
  if (value === 'AC') return 'clear';
  if (value === '\u002e') return 'decimal';
  return (typeof value === 'number') ? 'number' : 'operator';
};

const Button = ({ name }) => (
  <button
    id={name}
    type="button"
    className={btnStyle(keySet[name])}
    name={name}
    value={keySet[name]}
  >
    {keySet[name]}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
