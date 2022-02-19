import '../App.css';

import React from 'react';

export const CarNotice = () => {
  return (
    <div className='car-barrery__notice'>
      <p className='notice'>
        Use selectors (speed, temperature, A/C, and wheel size) to change
        conditions that affect your mileage range in the simulation model.
      </p>
      <p className='notice'>
        Vehicle range may vary depending on the vehicle configuration, battery
        age and condition, driving style and operating, environmental and
        climate conditions.
      </p>
    </div>
  );
};
