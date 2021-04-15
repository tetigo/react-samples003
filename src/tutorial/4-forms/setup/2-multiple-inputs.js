import React, { useState, useEffect } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState('')
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  useEffect(() => {
    console.log(person)
  }, [person])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson((person) => ({ ...person, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      person.id = new Date().getTime().toString()
      setPeople([...people, person])
      setPerson({ id: '', firstName: '', email: '', age: '' })
    }
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((cada, index) => {
          const { id, firstName, email, age } = cada
          console.log('cada', cada)
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
