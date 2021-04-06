import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    console.log(users)
  }

  useEffect(async () => {
    getUsers()
  }, [])
  //dependencia muito importante porque getUsers chama setUsers
  // que faz renderizar novamente, e tudo recomeça (loop infinito)

  return (
    <>
      <h2>github users</h2>
      <ul className="users">
        {users.map((cada) => {
          const { id, login, avatar_url, html_url } = cada
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
