/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
import { FaCalendarAlt } from 'react-icons/fa';

/**
 * Make percent from decimal value.
 */
const percentToDecimal = decimal => `${decimal * 100}%`;


/**
 * Calculate the goal project in percentage.
 */
const calcGoalProgress = (total, goal) => percentToDecimal(total / goal);

/**
 * Function components
 * and it was called stateless components previously
 */
export const SkiDayCount = ({
  total = 70,
  powder = 20,
  backcountry = 10,
  goal = 100,
}) => (
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
      <span>{calcGoalProgress(total, goal)}</span>
    </div>
  </div>
);

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number,
};

export default 'SkiDayCount';
