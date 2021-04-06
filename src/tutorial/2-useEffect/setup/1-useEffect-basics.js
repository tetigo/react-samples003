import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  //não podemos colocar hooks dentro de condicionais
  useEffect(() => {
    //então colocamos a condicional dentro do hook
    if (value > 1) console.log(`call useEffect ${value}`)
    console.log('okokok') //impresso somente uma vez
  }, []) //segundo parametro vazio faz rodar hook somente no render inicial

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
