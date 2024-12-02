import React from 'react'

function GeneralInformation({ onChange, general }) {

  return (
    <section>
      <label htmlFor="name">Name:</label>
      <input
        id='name'
        type="text"
        name="name"
        value={general.name}
        onChange={onChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id='email'
        type="email"
        name="email"
        value={general.email}
        onChange={onChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        id='phone'
        type="tel"
        name="phone"
        value={general.phone}
        onChange={onChange}
      />

    </section>
  )
}

export default GeneralInformation
