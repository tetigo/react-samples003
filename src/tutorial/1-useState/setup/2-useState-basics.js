import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState)
  // console.log(useState('hi world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') setText('hi world')
    else setText('random title')
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
