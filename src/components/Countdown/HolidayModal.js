import React from 'react';

export default ({ active, onToggle, holidays }) => (
  <div className={`modal${active ? ' is-active' : ''}`}>
    <div className="modal-background" onClick={onToggle} />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Modal title</p>
        <button onClick={onToggle} className="delete" aria-label="close" />
      </header>
      <section className="modal-card-body">
       Content ...
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Save changes</button>
        <button className="button">Cancel</button>
      </footer>
    </div>
  </div>
);
