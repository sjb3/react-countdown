import React, { Component } from 'react'
import moment from 'moment';
import 'moment-holiday';
import Timer from './Timer';
import Controls  from './Controls';
import Datepicker from './Datepicker';
import HolidayModal from './HolidayModal';

class Countdown extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.getRemainingTime();
  //   this.state = {
  //     duration: this.getRemainingTime(),
  //     paused: false,
  //   };
  //   // // this.handlePausedToggle = this.handlePausedToggle.bind(this);
  // }

  // you can simplyfy like this as well
  state = {
    //re-factor
    // duration: this.getRemainingTime(),
    currentDate: moment(),
    nextDate: moment({ year: moment().year() + 1 }),
    paused: false,
    showHolidays: false
  }

  componentDidMount() {
    // console.log('>>>>>>>>>', this.getHolidays())
    this.pause();
  }

  componentWillUnmount() {
    this.pause();
  }

  getRemainingTime() {
    let { currentDate, nextDate }= this.state,
      diff = nextDate.diff(currentDate)

    // let now = moment(),
    //   newYear = moment({ year: now.year() + 1 }),
    //   diff = newYear.diff(now);

    return moment.duration(diff);
  }

  // instead binding to this, this is ES7 way
  handlePausedToggle = () => {
    // this.setState({
    //   paused: !this.state.paused,
    // });
    // if (this.state.paused) {
    //   clearInterval(this.interval);
    // } else {
    //   this.interval = setInterval(() => {
    //     this.setState({
    //       duration: this.getRemainingTime(),
    //     });
    //   }, 1000);
    // }

    // paused => clear up the interval, else set new interval
    // better way writing with prevState
    this.setState(({paused}, props) => {
      paused = !paused;
      if (paused) {
        this.pause();
      } else {
        this.resume();
      }
      const nextState = {
        paused
      }
      !paused && (nextState.currentDate = moment())

      return nextState;
    });
  }

  pause() {
    clearInterval(this.interval);
  }

  resume() {
    this.interval = setInterval(() => {
      this.setState({
        currentDate: moment()
        // duration: this.getRemainingTime(),
      });
    }, 1000);
  }

  handleDateReset = nextDate => {
    // console.log('handleDateSubmit: clicked: ', typeof(nextDate))
    this.setState({
      nextDate
    });
  }

  HandleHolidaysToggle = () => {
    this.setState({
      showHolidays: !this.state.showHolidays
    })
  }

  getHolidays = () => {
    const { currentDate, nextDate } = this.state

    return currentDate.holidaysBetween(nextDate)
  }

  render() {
    const { paused, nextDate, showHolidays, currentDate } = this.state,
      duration = this.getRemainingTime(),
      holidays = this.getHolidays()

    return (
      <div>
        <section className="hero is-dark is bold is-fullheight has-text-centered">
          <div className="hero-body">
          <div className="container">
            <h1 className="title">
          Count-Down to {nextDate.calendar()}!
          <button
            onClick={this.HandleHolidaysToggle}
            style={{margin: '5 0 0 10'}}
            className='button is-small is-rounded is-light is-outlined'>Holidays</button>
            </h1>
            <section className="section">
            <Timer duration={duration}/>
            </section>
              <Datepicker onDateReset={this.handleDateReset} />
              <Controls paused={paused} onPausedToggle={this.handlePausedToggle} />
              <section>
                <i>{currentDate.format('LLLL')}</i>
              </section>
              <HolidayModal
                holidays={holidays}
                active={showHolidays}
                onToggle={this.HandleHolidaysToggle}/>
              </div>
            </div>
          </section>
      </div>
    )
  }
}

export default Countdown;