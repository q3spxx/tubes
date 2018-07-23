import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import style from '../style.css';

export default class Manager extends Component {
  constructor() {
    super();
    this.state = {
      diameter: 20,
      wallThickness: 200,
      lockLength: 50
    }
  }
  onChange(name, value) {
    this.setState({
      [name]: +value
    });
  }
  render() {
    return(
      <div className={style.form}>
        <div className={style.formControl}>
          <FormControl fullWidth>
            <InputLabel htmlFor="diameter">Диаметр трубы</InputLabel>
            <Select
              name='diameter'
              value={this.state.diameter}
              onChange={(e) => this.onChange(e.target.name, e.target.value)}
              input={<Input id="diameter"></Input>} >
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={60}>60</MenuItem>
            </Select>
            <FormHelperText>Выберите из списка</FormHelperText>
          </FormControl>
        </div>
        <div className={style.formControl}>
          <FormControl fullWidth>
            <InputLabel htmlFor="wallThickness">Толщина стенки</InputLabel>
            <Select
              name='wallThickness'
              value={this.state.wallThickness}
              onChange={(e) => this.onChange(e.target.name, e.target.value)}
              input={<Input id="wallThickness"></Input>} >
              <MenuItem value={200}>200</MenuItem>
              <MenuItem value={220}>220</MenuItem>
              <MenuItem value={230}>230</MenuItem>
              <MenuItem value={250}>250</MenuItem>
              <MenuItem value={270}>270</MenuItem>
            </Select>
            <FormHelperText>Выберите из списка</FormHelperText>
          </FormControl>
        </div>
        <div className={style.formControl}>
          <FormControl fullWidth>
            <InputLabel htmlFor="lockLength">Длинна трубы</InputLabel>
            <Select
              name='lockLength'
              value={this.state.lockLength}
              onChange={(e) => this.onChange(e.target.name, e.target.value)}
              input={<Input id="lockLength"></Input>} >
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={70}>70</MenuItem>
              <MenuItem value={90}>90</MenuItem>
              <MenuItem value={120}>120</MenuItem>
              <MenuItem value={150}>150</MenuItem>
            </Select>
            <FormHelperText>Выберите из списка</FormHelperText>
          </FormControl>
        </div>
        <div className={style.formControl}>
          <FormControl>
            <div className={style.formSubmit}>
              <Button onClick={() => {this.props.search(this.state)}} variant="extendedFab">
                Найти
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}
