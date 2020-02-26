import React, { useState, useEffect } from 'react'

const ShowThisTodo = (props) => {
  const [todos, setTodos] = useState({})
  const [token] = useState(props.token)

  useEffect(() => {
    const fetchData = async() => {
      try {
        let res = await fetch(`https://miniprojectc.herokuapp.com/api/v1/tasks/id?id=5e4bebdfc02ef6001777147a`, {
          headers: {
            'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json',
            'accept': 'application/json'
          },
        })
        let data = await res.json()
        setTodos(data.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [token])

  const showTodo = todos

  return (
    <div>
    {console.log(todos)}
      {showTodo.name}
    </div>
  )
}

export default ShowThisTodo
