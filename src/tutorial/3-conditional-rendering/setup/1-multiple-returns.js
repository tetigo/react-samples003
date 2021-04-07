import React, { useState, useEffect } from 'react'
// const url = 'https://api.github.com/users/QuincyLarson'
const url = 'https://randomuser.me/api/'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState({
    img: null,
    name: 'default user',
    email: null,
  })

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        console.log('resp status', resp.status)
        if (resp.status >= 200 && resp.status < 300) {
          return resp.json()
        }
        setIsLoading(false)
        setIsError(true)
        throw new Error(resp.statusText)
      })
      .then((user) => {
        const obj = {
          img: user.results[0].picture.large,
          name: `${user.results[0].name.first} ${user.results[0].name.last}`,
          email: user.results[0].email,
        }
        setUser(obj)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  if (isError)
    return (
      <div>
        <h2>Error...</h2>
      </div>
    )
  return (
    <ul className="users">
      <li className="item">
        <img src={user.img} />
        <h6>{user.name}</h6>
        <h6>{user.email}</h6>
      </li>
    </ul>
  )
}

export default MultipleReturns
