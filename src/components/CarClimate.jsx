import PropTypes from 'prop-types';
import '../App.css';

const CarClimate = props => (
  <div className='car-climate'>
    <label
      className={`car-climate__item ${
        props.value ? 'car-climate__item--active' : ''
      }  ${!props.limit ? 'car-heat' : ''}`}
    >
      <p>
        {props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}
      </p>
      <i className='car-climate__icon'></i>
      <input
        type='checkbox'
        name='climate'
        checked={props.value}
        onChange={() => {
          props.handleChangeClimate();
        }}
      />
    </label>
  </div>
);
CarClimate.propTypes = {
  value: PropTypes.bool,
  limit: PropTypes.bool,
  handleChangeClimate: PropTypes.func,
};
export default CarClimate;
