import PropTypes from 'prop-types';

const Display = ({ operation, result }) => (
  <div className="col-12 h-25 text-white">
    <div className="problem">
      {operation}
    </div>
    <div className="result">
      {result}
    </div>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  operation: '',
};

export default Display;
