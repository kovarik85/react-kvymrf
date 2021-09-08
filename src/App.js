import React from 'react';
import './style.css';
import IncreaseButton from './IncreaseButton';
import Nuller from './Nuller';
import DecreaseButton from './DecreaseButton';
import CounterButton from './CounterButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }
  render() {
    const handleCounter = type => {
      if (type === 'increase') {
        this.setState({ counter: this.state.counter + 1 });
      } else if (type === 'decrease') {
        this.setState({ counter: this.state.counter - 1 });
      } else if (type === 'reset') {
        this.setState({ counter: 0 });
      }
    };

    const increaseCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    const nuller = () => {
      this.setState({ counter: 0 });
    };

    const decreaseCounter = () => {
      this.setState({ counter: this.state.counter - 1 });
    };

    return (
      <>
        <h1>Számláló példa!</h1>
        <p>{this.state.counter}</p>
        <IncreaseButton increaseFunction={increaseCounter} />
        <CounterButton type="increase" counterFunction={handleCounter} />
        <DecreaseButton decreaseFunction={decreaseCounter} />
        <CounterButton type="decrease" counterFunction={handleCounter} />
        <Nuller nulling={nuller} />
        <CounterButton type="reset" counterFunction={handleCounter} />
      </>
    );
  }
}
