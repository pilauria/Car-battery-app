import PropTypes from 'prop-types';
import '../App.css';

import React from 'react';

export const CarCounter = props => {
  return (
    <div className='car-counter'>
      <p className='car-counter__title'>{props.initValues.title}</p>
      <div className='car-counter__container cf'>
        <div className='car-counter__item'>
          <p className='car-counter__number'>
            {props.currentValue}
            <span>{props.initValues.unit}</span>
          </p>
          <div className='car-counter__controls'>
            <button
              onClick={e => props.increment(e, props.initValues.title)}
              disabled={props.currentValue >= props.initValues.max}
            ></button>
            <button
              onClick={e => props.decrement(e, props.initValues.title)}
              disabled={props.currentValue <= props.initValues.min}
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
