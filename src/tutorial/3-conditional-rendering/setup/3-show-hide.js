import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  // ATTENTION!!!!!!!!!!
  // apesar desse useEffect ser chamado apenas uma vez na renderização do componente
  // o proprio componente é renderizado várias vezes com o botão show/hide
  // o que faz com que tenhamos multiplos event listeners do mesmo jeito
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    //**************************/
    //por isso é MUITO IMPORTANTE fazer o return da cleanup function
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: {size}px</h2>
    </div>
  )
}

export default ShowHide
