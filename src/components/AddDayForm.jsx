/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Autocomplete } from './Autocomplete';

const tahoeResorts = [
  'Alpine Meadows',
  'Boreal',
  'Diamond Peak',
  'Donner Ski Ranch',
  'Heavenly',
  'Homewood',
  'Kirkwood',
  'Mt. Rose',
  'Northstar',
  'Squaw Valley',
  'Sugar Bowl',
];

/**
 * Stateless components with callback refs
 */
export const AddDayFormCallbackRefs = ({
  date, powder, backcountry, onNewDay,
}) => {
  let _resort; let _date; let _powder; let _backcountry;

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewDay({
      id: 0,
      resort: _resort.value,
      date: _date.value,
      powder: _powder.checked,
      backcountry: _backcountry.checked,
    });
    _resort.value = '';
    _date.value = '';
    _powder.checked = false;
    _backcountry.checked = false;
  };

  return (
    <form onSubmit={handleSubmit} className="add-day-form">

      <label htmlFor="resort">Resort Name</label>
      <Autocomplete
        options={tahoeResorts}
        ref={input => _resort = input}
      />

      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        required
        defaultValue={date}
        ref={input => _date = input}
      />

      <div>
        <input
          id="powder"
          type="checkbox"
          defaultChecked={powder}
          ref={input => _powder = input}
        />
        <label htmlFor="powder">Powder Day</label>
      </div>

      <div>
        <input
          id="backcountry"
          type="checkbox"
          defaultChecked={backcountry}
          ref={input => _backcountry = input}
        />
        <label htmlFor="backcountry">Backcountry Day</label>
      </div>
      <button type="submit">Add Day</button>
    </form>
  );
};

AddDayFormCallbackRefs.defaultProps = {
  date: '2017-02-12',
  powder: true,
  backcountry: false,
};

AddDayFormCallbackRefs.propTypes = {
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired,
};

/**
 * ES6 class with createRef method
 */
export class AddDayForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resort = createRef();
    this.date = createRef();
    this.powder = createRef();
    this.backcountry = createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('resort', this.resort.current.value);
    console.log('date', this.date.current.value);
    console.log('powder', this.powder.current.checked);
    console.log('backcountry', this.backcountry.current.checked);
  }

  render() {
    const {
      resort, date, powder, backcountry,
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="add-day-form">

        <label htmlFor="resort">Resort Name</label>
        <input
          id="resort"
          type="text"
          required
          defaultValue={resort}
          ref={this.resort}
        />

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          required
          defaultValue={date}
          ref={this.date}
        />

        <div>
          <input
            id="powder"
            type="checkbox"
            defaultChecked={powder}
            ref={this.powder}
          />
          <label htmlFor="powder">Powder Day</label>
        </div>

        <div>
          <input
            id="backcountry"
            type="checkbox"
            defaultChecked={backcountry}
            ref={this.backcountry}
          />
          <label htmlFor="backcountry">Backcountry Day</label>
        </div>
        <button type="submit">Add Day</button>
      </form>
    );
  }
}

AddDayForm.defaultProps = {
  resort: 'Kirkwood',
  date: '2017-02-12',
  powder: true,
  backcountry: false,
};

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired,
};

export default 'AddDayForm';
