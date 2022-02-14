import '../App.css';

import React from 'react';
// React typechecking library:
import PropTypes from 'prop-types';

export const Car = ({ wheelsize }) => {
  return (
    <div className='car'>
      <div className='car-wheels'>
        <div
          className={`car-wheel car-wheel--front car-wheel--${wheelsize}`}
        ></div>
        <div
          className={`car-wheel car-wheel--rear car-wheel--${wheelsize}`}
        ></div>
      </div>
    </div>
  );
};

Car.propTypes = {
  wheelsize: PropTypes.number,
};
