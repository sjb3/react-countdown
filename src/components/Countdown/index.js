import React, { Component } from 'react'
import moment from 'moment';
import Timer from './Timer';
import Controls  from './Controls';
import Datepicker from './Datepicker';


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
    duration: this.getRemainingTime(),
    paused: false,
  }

  componentDidMount() {
    this.pause();
  }

  componentWillUnmount() {
    this.pause();
  }

  getRemainingTime() {
    var now = moment(),
      newYear = moment({ year: now.year() + 1 }),
      diff = newYear.diff(now);

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
    this.setState((prevState, props) => {
      const paused = !prevState.paused;
      if (paused) {
        this.pause();
      } else {
        this.resume();
      }
      return {
        paused,
      };
    });
  }

  pause() {
    clearInterval(this.interval);
  }

  resume() {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.getRemainingTime(),
      });
    }, 1000);
  }

  render() {
    const { duration, paused } = this.state;
    return (
<div>
    <section className="hero is-dark is bold is-fullheight has-text-centered">
      <div className="hero-body">
      <div className="container">
        <h1 className="title">
      Count-Down to New Year!
        </h1>
        <section className="section">
        <Timer duration={duration}/>
        </section>
          <Datepicker />
          <Controls paused={paused} onPausedToggle={this.handlePausedToggle} />
          </div>
        </div>
      </section>
</div>
    )
  }
}

export default Countdown;