/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/stylesheets/ui.scss';
import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
import { FaCalendarAlt } from 'react-icons/fa';

/**
 * ES6 class and additional features such as local state
 * and lifecycle methods
 */
export class SkiDayCount extends Component {
  percentToDecimal(decimal) {
    return (`${decimal * 100}%`);
  }

  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total / goal);
  }

  render() {
    const {
      total, powder, backcountry, goal,
    } = this.props;
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{total}</span>
          <FaCalendarAlt />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{powder}</span>
          <TiWeatherSnow />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{backcountry}</span>
          <MdTerrain />
          <span> days</span>
        </div>
        <div>
          <span>{this.calcGoalProgress(total, goal)}</span>
        </div>
      </div>
    );
  }
}

SkiDayCount.defaultProps = {
  total: 50,
  powder: 10,
  backcountry: 15,
  goal: 75,
};

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number,
};

export default 'SkiDayCount';
