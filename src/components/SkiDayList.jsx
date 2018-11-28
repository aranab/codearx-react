/* eslint-disable react/require-default-props */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { SkiDayRow } from './SkiDayRow';

/**
 * With spread operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export const SkiDayListWithSpreadOperator = ({ days }) => {
  const filteredDays = (filter) => {
    if (!filter || !filter.match(/powder|backcountry/)) {
      return days;
    }
    return days.filter(day => day[filter]);
  };

  return (
    <div className="ski-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">
                All Days
              </Link>
              <Link to="/list-days/powder">
                Powder Days
              </Link>
              <Link to="/list-days/backcountry">
                Backcountry Days
              </Link>
            </td>
          </tr>
        </thead>
        <Route
          exact
          path="/list-days"
          render={() => (
            <tbody>
              {days.map(day => (
                <SkiDayRow
                  key={day.id}
                  {...day}
                />
              ))}
            </tbody>
          )}
        />
        <Route
          path="/list-days/:filter"
          render={queries => (
            <tbody>
              {filteredDays(queries.match.params.filter).map(day => (
                <SkiDayRow
                  key={day.id}
                  {...day}
                />
              ))}
            </tbody>
          )}
        />
      </table>
    </div>
  );
};

SkiDayListWithSpreadOperator.propTypes = {
  days: function(props) {
    const { days } = props;
    if (!Array.isArray(days)) {
      return new Error('SkiDayList should be an array');
    }
    if (!days.length) {
      return new Error('SkiDayList must have at least one record');
    }
    return null;
  },
};

/**
 * Without spread operator
 */
export const SkiDayList = ({ days }) => {
  const filteredDays = (filter) => {
    if (!filter || !filter.match(/powder|backcountry/)) {
      return days;
    }
    return days.filter(day => day[filter]);
  };

  return (
    <div className="ski-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">
                All Days
              </Link>
              <Link to="/list-days/powder">
                Powder Days
              </Link>
              <Link to="/list-days/backcountry">
                Backcountry Days
              </Link>
            </td>
          </tr>
        </thead>
        <Route
          exact
          path="/list-days"
          render={() => (
            <tbody>
              {days.map(day => (
                <SkiDayRow
                  key={day.id}
                  resort={day.resort}
                  date={day.date}
                  powder={day.powder}
                  backcountry={day.backcountry}
                />
              ))}
            </tbody>
          )}
        />
        <Route
          path="/list-days/:filter"
          render={queries => (
            <tbody>
              {filteredDays(queries.match.params.filter).map(day => (
                <SkiDayRow
                  key={day.id}
                  resort={day.resort}
                  date={day.date}
                  powder={day.powder}
                  backcountry={day.backcountry}
                />
              ))}
            </tbody>
          )}
        />
      </table>
    </div>
  );
};

SkiDayList.propTypes = {
  days: function(props) {
    const { days } = props;
    if (!Array.isArray(days)) {
      return new Error('SkiDayList should be an array');
    }
    if (!days.length) {
      return new Error('SkiDayList must have at least one record');
    }
    return null;
  },
};

export default 'SkiDayList';
