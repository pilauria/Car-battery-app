import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import CarBattery from './containers/CarBattery';
const counterDefaultVal = {
  speed: {
    title: 'Speed',
    unit: 'mph',
    step: 5,
    min: 45,
    max: 70,
  },
  temperature: {
    title: 'Outside Temperature',
    unit: '°',
    step: 10,
    min: -10,
    max: 40,
  },
};
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CarBattery counterDefaultVal={counterDefaultVal} />
      </div>
    );
  }
}
export default App;
