import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Pro from './pro';
import Manager from './manager';
import LockList from './lock-list';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchAllLocks } from './service';
import locks from './locks';
import titles from './lang.js';
import style from './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: 0,
      dataFetched: false
    };
    this.searchByOne = this.searchByOne.bind(this);
    this.searchByThree = this.searchByThree.bind(this);
  }
  onChange(value) {
    this.setState({
      tab: value
    });
  }
  getProgress() {
    return (
      <div className={style.progress}>
        <CircularProgress />
      </div>
    );
  }
  searchByOne(value) {
    locks.searchByOne(value);
    this.setState(this.state);
  }
  searchByThree(values) {
    locks.searchByThree(values);
    this.setState(this.state);
  }
  getCalculator() {
    const tab = this.state.tab;
    return (
      <div>
        <div className={style.paper}>
          <Paper>
            <Tabs fullWidth centered value={tab} onChange={(e, value) => this.onChange(value)}>
              <Tab label="Проектировщик"></Tab>
              <Tab label="Закупщик"></Tab>
            </Tabs>
            {tab === 0 && <Pro search={this.searchByOne} />}
            {tab === 1 && <Manager search={this.searchByThree} />}
          </Paper>
        </div>
        <div className={style.paper}>
          <Paper>
            <LockList titles={titles} />
          </Paper>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetchAllLocks().then((data) => {
      locks.setLocks(data);
      this.setState({
        dataFetched: true
      });
    });
  }
  render() {
    return(
      <div className={style.wrapper}>
        {this.state.dataFetched ? this.getCalculator() : this.getProgress()}
      </div>
    );
  }
}
