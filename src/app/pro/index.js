import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import style from '../style.css';

export default class Pro extends Component {
  constructor() {
    super();
    this.state = {
      resistance: 1200
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
          <TextField
              id="helperText"
              fullWidth
              label="Момент сопротивления"
              value={this.state.resistance}
              helperText="Введите число"
              margin="normal"
              name="resistance"
              type="number"
              onChange={(e) => this.onChange(e.target.name, e.target.value)}
            />
        </div>
        <div className={style.formControl}>
          <FormControl>
            <div className={style.formSubmit}>
              <Button onClick={() => {this.props.search(this.state.resistance)}} variant="extendedFab">
                Найти
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}
