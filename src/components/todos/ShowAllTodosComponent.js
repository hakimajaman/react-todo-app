import React, { useState, useEffect } from 'react'

const ShowAllTodosComponent = (props) => {
  const [todos, setTodos] = useState([])
  const [token] = useState(props.token)

  useEffect(() => {
    const fetchData = async() => {
      let res = await fetch(`https://miniprojectc.herokuapp.com/api/v1/tasks?limit=5&page-1`, {
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json',
          'accept': 'application/json'
        }
      })
      let data = await res.json()
      setTodos(data.data.docs)
      console.log(data.data.docs)
    }
    fetchData()
  }, [token])

  const allTodos = todos.map((item, index) => 
    <div key={index}>
      {item.name}
    </div>
  )

  return (
    <div>
      {allTodos}
    </div>
  )
}

export default ShowAllTodosComponent
