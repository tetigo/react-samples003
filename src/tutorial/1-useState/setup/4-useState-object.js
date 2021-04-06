import React, { useState } from 'react'

const UseStateObject = () => {
  const user = {
    name: 'tiago',
    age: 43,
    message: 'random message',
  }
  const [person, setPerson] = useState(user)
  const handleClick = () => {
    if (person.name === 'tiago')
      setPerson({ name: 'marta', age: 31, message: 'loves tiago' })
    else setPerson({ ...user, message: 'loves marta' })
  }
  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={handleClick}>change person</button>
    </>
  )
}

export default UseStateObject
