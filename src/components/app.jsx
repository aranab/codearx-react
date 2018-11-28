import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SkiDayListWithSpreadOperator } from './SkiDayList';
import { SkiDayCount } from './SkiDayCount';
import { AddDayFormCallbackRefs } from './AddDayForm';
import { Menu } from './Menu';
import { Whoops404 } from './Whoops404';
import MemberList from './MemeberList';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          id: 1,
          resort: 'Squaw Valley',
          date: '2016-01-02',
          powder: true,
          backcountry: false,
        },
      ],
    };
    this.addDay = this.addDay.bind(this);
  }

  addDay(newDay) {
    const { allSkiDays } = this.state;
    const newDayWithId = newDay;
    newDayWithId.id = (allSkiDays.length + 1);
    this.setState({
      allSkiDays: [
        ...allSkiDays,
        newDayWithId,
      ],
    });
  }

  countDays(filter) {
    const { allSkiDays } = this.state;
    return allSkiDays.filter(day => ((filter) ? day[filter] : day)).length;
  }

  allSkiDays() {
    const { allSkiDays } = this.state;
    return allSkiDays;
  }

  render() {
    return (
      <div className="app">
        <Menu />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <SkiDayCount
                total={this.countDays()}
                powder={this.countDays('powder')}
                backcountry={this.countDays('backcountry')}
              />
            )}
          />
          <Route
            path="/add-day"
            render={() => (
              <AddDayFormCallbackRefs onNewDay={this.addDay} />
            )}
          />
          <Route
            path="/list-days"
            render={() => (
              <SkiDayListWithSpreadOperator days={this.allSkiDays()} />
            )}
          />
          <Route
            path="/members"
            render={() => (
              <MemberList />
            )}
          />
          <Route path="*" component={Whoops404} />
        </Switch>
      </div>
    );
  }
}

export default 'App';
