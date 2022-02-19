import PropTypes from 'prop-types';
import '../App.css';

export const CarCounter = ({
  initValues,
  currentValue,
  increment,
  decrement,
}) => {
  return (
    <div className='car-counter'>
      <p className='car-counter__title'>{initValues.title}</p>
      <div className='car-counter__container cf'>
        <div className='car-counter__item'>
          <p className='car-counter__number'>
            {currentValue}
            <span>{initValues.unit}</span>
          </p>
          <div className='car-counter__controls'>
            <button
              onClick={e => increment(e, initValues.title)}
              disabled={currentValue >= initValues.max}
            ></button>
            <button
              onClick={e => decrement(e, initValues.title)}
              disabled={currentValue <= initValues.min}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

CarCounter.propTypes = {
  currentValue: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  initValues: PropTypes.object,
};
