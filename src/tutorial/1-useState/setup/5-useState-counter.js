import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const complexIncrease = () => {
    setTimeout(() => {
      //ao clicar varias vezes, em todas as vezes o value atual("original") foi utilizado,
      //não foi somado + 1 a cada vez que clicou, por causa do assincronismo
      // setValue(value + 1)
      // console.log(value)
      //////////////////////////////////////////
      //ao clicar varias vezes, o valor atual("atualizado") foi passado como parametro,
      //nesse caso, em todas as vezes foi somado + 1 a cada clique
      setValue((prevState) => {
        console.log(prevState)
        return prevState + 1
      }) //prevState pode ser qualquer nome
    }, 2000)
  }
  return (
    <>
      <section>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
