import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="col-12 h-25 text-white">
    <div className="problem">10 x 0</div>
    <div className="result">
      {result}
    </div>
  </div>
);

Display.propTypes = {
  result: PropTypes.number,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
