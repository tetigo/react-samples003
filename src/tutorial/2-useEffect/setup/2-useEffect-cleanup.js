import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect')
    //se adicionou event listener mas o hook não tem lista de dependencia
    //vai ser chamado toda vez, e vai adicionar outros event listeners
    window.addEventListener('resize', checkSize)
    //fazendo esse cleanup, retorna um removeEventListener, o que faz componente
    //que antes do useEffect ser chamado novamente, ele remova o anterior
    // return () => {
    //   console.log('cleanup')
    //   window.removeEventListener('resize', checkSize)
    // }
  }, []) // outra maneira de executar uma unica vez o event listener

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
