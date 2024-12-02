import React from 'react'

function Practical({ practical, onChange }) {
  return (
    <section>
      <label htmlFor="company">Company name:</label>
      <input
        id='company'
        type="text"
        name="company"
        value={practical.company}
        onChange={onChange}
      />
      <label htmlFor="position">Position</label>
      <input
        id='position'
        type="text"
        name="position"
        value={practical.position}
        onChange={onChange}
      />
      <label htmlFor="responsibilities">Main responsabilities</label>
      <input
        id='responsibilities'
        type="text"
        name="responsibilities"
        value={practical.responsibilities}
        onChange={onChange}
      />
      <label htmlFor="dateFrom">From</label>
      <input
        id='dateFrom'
        type="date"
        name="dateFrom"
        value={practical.dateFrom}
        onChange={onChange}
      />
      <label htmlFor="dateUntil">Until</label>
      <input
        id='dateUntil'
        type="date"
        name="dateUntil"
        value={practical.dateUntil}
        onChange={onChange}
      />
    </section>
  )
}

export default Practical
