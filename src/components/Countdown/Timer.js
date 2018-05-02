import React from 'react';

// you can split up either
const TimerItem = ({ count, label }) => (
  <div className="level-item has-text-centered">
    <div>
      <p className="title">{count}</p>
      <p className="heading">{label}</p>
    </div>
  </div>
);


const Timer = ({ duration }) => (
  <div>
    <nav className="level">
      <TimerItem count={Math.floor(duration.asDays())} label="Days" />
      <TimerItem count={duration.hours().toString().padStart(2, '0')} label="Hours" />
      <TimerItem count={duration.minutes().toString().padStart(2, '0')} label="Minutes" />
      <TimerItem count={duration.seconds().toString().padStart(2, '0')} label="Seconds" />
    </nav>
  </div>
);

export default Timer;
