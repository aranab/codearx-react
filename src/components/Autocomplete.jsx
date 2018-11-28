/* eslint-disable react/no-array-index-key */
import React, { Component, createRef } from 'react';

export class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.inputResort = createRef();
  }

  get value() {
    return this.inputResort.current.value;
  }

  set value(inputValue) {
    this.inputResort.current.value = inputValue;
  }

  render() {
    const { options } = this.props;
    return (
      <div>
        <input type="text" list="tahoe-resorts" required ref={this.inputResort} />
        <datalist id="tahoe-resorts">
          {options.map((opt, i) => <option key={i}>{opt}</option>)}
        </datalist>
      </div>
    );
  }
}

export default 'Autocomplete';
