import React from 'react';

const Control = ({
  disabled, onClick, color, children,
}) => (
  <p className="control">
    <button
      className={`button is-outlined is-medium is-${color}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  </p>
);

// more modularization!
export default ({ paused, onPausedToggle }) => (
  <div className="field is-grouped is-grouped-centered">
    {/* <p className="control">
      <button
        className="button is-danger is-outlined is-medium"
        disabled={paused}
        onClick={onPausedToggle}
      >
      Pause
      </button>
    </p>
    <p className="control">
      <button
        className="button is-success is-outlined is-medium"
        disabled={!paused}
        onClick={onPausedToggle}
      >
      Resume
      </button>
    </p> */}
    <Control disabled={paused} color="danger" onClick={onPausedToggle}>Pause</Control>
    <Control disabled={!paused} color="success" onClick={onPausedToggle}>Resume</Control>
  </div>
);
