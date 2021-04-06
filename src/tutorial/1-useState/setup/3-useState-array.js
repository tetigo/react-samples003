import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState([])

  const removeItem = (id) => {
    const data = people.filter((p) => p.id !== id)
    setPeople(data)
  }

  return (
    <React.Fragment>
      <button className="btn" onClick={() => setPeople([])}>
        clear data
      </button>
      <h2 onClick={() => setPeople(data)}>Mouse Click Here</h2>
      <ul>
        {people.map((people) => (
          <li className="item">
            <Person key={people.id} {...people} />
            <button onClick={() => removeItem(people.id)}>Remove Item</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

const Person = ({ name }) => {
  return <h3>{name}</h3>
}

export default UseStateArray
