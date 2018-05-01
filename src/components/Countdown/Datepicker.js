import React, { Component } from 'react';
import moment from 'moment';


class Datepicker extends Component {
  state = {
    date: '',
    valid: true,
    dirty: false
  }

  // this.handleDateChange = this.handleDateChange.bind(this)
  // instead ES7 way below
  handleDateChange = ({target: {value}}) => {
    const date = moment(value),
          valid = date.isValid() && date.isAfter(moment())

    // console.log(value)
    this.setState({
      valid,
      date: value,
      dirty: true
    })
    // better way? not react but javaScript forever style
    // if this is ONLY valid -> execute the following;
    valid && this.props.onDateReset(date)
  }

  // handleDateSubmit = e => {
  //   e.preventDefault();

  //   const {valid, date} = this.state;

  //   // if(valid) return this.props.onDateReset(moment(date));

  // }

  render() {
    let { date, valid, dirty } = this.state,
        classes = 'input is-medium is-rounded'

    valid && dirty && (classes += ' is-success');
    !valid && dirty && (classes += ' is-danger');

    return (
      // <form onSubmit={this.handleDateSubmit}>
      //   <div className="field is-grouped is-grouped-centered" style={{ marginBottom: 40 }}>
      //     <p className="control">
      //       <input
      //         className={classes}
      //         value={date}
      //         onChange={this.handleDateChange}
      //         type="text"
      //         placeholder="Type a date ..." />
      //     {!valid && <i className="help is-danger">Valid date(future) required</i>}
      //     </p>
      //     <p className="control">
      //       <button type="submit" className="button is-light is-medium is-outlined is-rounded">
      //   Reset
      //       </button>
      //     </p>
      //   </div>
      // </form>

      // refactoring more react-forward way (from above)
        <div className="field is-grouped is-grouped-centered" style={{ marginBottom: 40 }}>
          <p className="control">
            <input
              className={classes}
              value={date}
              onChange={this.handleDateChange}
              type="text"
              placeholder="Type a date ..." />
          {!valid && <i className="help is-danger">Valid date(future) required</i>}
          </p>
        </div>

    );
  }
}

export default Datepicker;

