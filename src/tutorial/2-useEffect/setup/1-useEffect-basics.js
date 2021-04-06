import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log(`call useEffect ${value}`)
  })

  console.log('render component')
  return (
    <>
      <h2>useEffect Basics</h2>
      <p>{value}</p>
      <button onClick={() => setValue((prev) => prev + 1)}>+</button>
    </>
  )
}

export default UseEffectBasics
