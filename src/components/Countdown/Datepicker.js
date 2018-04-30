import React from 'react';

const Datepicker = props => (
  <form>
    <div className="field is-grouped is-grouped-centered style={{marginBottom: '40px'}}">
      <p className="control">
        <input className="input is-medium is-rounded" type="text" placeholder="Find a repository" />
      </p>
      <p className="control">
        <button className="button is-light is-medium is-outlined is-rounded">
        Reset
        </button>
      </p>
    </div>
  </form>
);

export default Datepicker;

