import React from 'react'

function Education({ onChange, education, index }) {
  return (
    <section>

      <label htmlFor="school">School name:</label>
      <input
        id='school'
        type="text"
        name="school"
        value={education.school}
        onChange={onChange}
      />

      <label htmlFor="title">Title of study:</label>
      <input
        id='title'
        type="text"
        name="title"
        value={education.title}
        onChange={onChange}
      />

      <label htmlFor="date">Date of study:</label>
      <input
        id='date'
        type="date"
        name="date"
        value={education.date}
        onChange={onChange}
      />
    </section >
  )
}

export default Education;
