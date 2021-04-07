import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // operador || retorna o primeiro true
  const firstValue = text || 'hello world'
  // operador && retorna o ultimo true se todos true
  // mas retorna o primeiro false se encontrar
  const secondValue = 'ok' && 'value' && text && 'hello world'

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
      {if()console.log('cannot do that');}
      {text && <h2>okokok</h2>} */}
      <h1>{text || 'john doe'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error..</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
