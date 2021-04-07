import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')

  // operador || retorna o primeiro true
  const firstValue = text || 'hello world'
  // operador && retorna o ultimo true se todos true
  // mas retorna o primeiro false se encontrar
  const secondValue = 'ok' && 'value' && text && 'hello world'

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
      {text && <h2>okokok</h2>}
    </>
  )
}

export default ShortCircuit
