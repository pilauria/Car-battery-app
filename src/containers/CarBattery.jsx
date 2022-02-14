import '../App.css';
import React, { Component } from 'react';
import { CarNotice } from '../components/CarNotice';
import { Car } from '../components/Car';
import { CarStats } from '../components/CarStats';
import { getModelData } from '../services/BatteryService';
import { CarCounter } from '../components/CarCounter';
import CarClimate from '../components/CarClimate';

class CarBattery extends Component {
  state = {
    carstats: [],
    config: {
      speed: 50,
      temperature: 20,
      climate: true,
      wheels: 19,
    },
  };

  updateCounterState = (title, newValue) => {
    const config = { ...this.state.config };
    // update config state with new value
    title === 'Speed'
      ? (config['speed'] = newValue)
      : (config['temperature'] = newValue);
    // update our state
    this.setState({ config });
  };

  increment = (e, title) => {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }
    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }
  };

  decrement = (e, title) => {
    e.preventDefault();
    let currentValue, minValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }
    if (currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  };

  // handle aircon & heating click event handler
  handleChangeClimate = () => {
    const config = { ...this.state.config };
    config['climate'] = !this.state.config.climate;
    this.setState({ config });
  };

  calculateStats = (models, value) => {
    const dataModels = getModelData();
    return models.map(model => {
      // ES6 Object destructuring Syntax,
      // takes out required values and create references to them
      const { speed, temperature, climate, wheels } = value;
      const miles =
        dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][
          temperature
        ];
      return {
        model,
        miles,
      };
    });
  };

  statsUpdate = () => {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    // Fetch model info from BatteryService and calculate then update state
    this.setState({
      carstats: this.calculateStats(carModels, this.state.config),
    });
  };

  componentDidMount() {
    this.statsUpdate();
  }

  render() {
    const { config, carstats } = this.state;
    return (
      <form className='car-battery'>
        <h1>Range Per Charge</h1>
        <Car wheelsize={config.wheels} />
        <CarStats carstats={carstats} />
        <div className='car-controls cf'>
          <CarCounter
            currentValue={config.speed}
            initValues={this.props.counterDefaultVal.speed}
            increment={this.increment}
            decrement={this.decrement}
          />
          <div className='car-climate-container cf'>
            <CarCounter
              currentValue={config.temperature}
              initValues={this.props.counterDefaultVal.temperature}
              increment={this.increment}
              decrement={this.decrement}
            />
            <CarClimate
              value={this.state.config.climate.climate}
              limit={this.state.config.temperature > 10}
              handleChangeClimate={this.handleChangeClimate}
            />
          </div>
        </div>
        <CarNotice />
      </form>
    );
  }
}

export default CarBattery;
