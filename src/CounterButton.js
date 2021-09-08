import React from 'react';
import './style.css';

export default class CounterButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    return (
      <>
        <button
          onClick={() => this.props.counterFunction(type)}
          className={'counter-button ' + type}
        >
          {type == 'increase' && <div>Növelő</div>}
          {type == 'decrease' && <div>Csökkentő</div>}
          {type == 'reset' && <div>Alaphelyzet</div>}
        </button>
      </>
    );
  }
}
