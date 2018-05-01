import React from 'react';

export default ({ active, onToggle, holidays }) => (
  <div className={`modal${active ? ' is-active' : ''}`}>
    <div className="modal-background" onClick={onToggle} />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Upcoming Holidays</p>
        <button onClick={onToggle} className="delete" aria-label="close" />
      </header>
      <section className="modal-card-body">
        <table className="table is-fullwidth is-hoverable is-striped is-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Holidays</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, i) => (
              <tr key={i}>
                <td>{holiday.calendar()}</td>
                <td>{holiday.isHoliday()}</td>
              </tr>))}
          </tbody>
        </table>
      </section>

    </div>
  </div>
);
