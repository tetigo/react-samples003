import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true)
  if (loading) return <h2>hello world</h2>
  else return <h2>multiple returns</h2>
}

export default MultipleReturns
