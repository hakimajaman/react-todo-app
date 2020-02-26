import React, { useState, useEffect } from 'react'

const FilterCompletionComponent = (props) => {
  const [todos, setTodos] = useState([])
  const [token] = useState(props.token)

  useEffect(() => {
    const fetchData = async() => {
      try {
        let res = await fetch(`https://miniprojectc.herokuapp.com/api/v1/tasks/filter/completion?completion=true&limit=5&page=1`, {
          headers: {
            'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json',
            'accept': 'application/json'
          },
        })
        let data = await res.json()
        setTodos(data.data.docs)
        console.log(data.data.docs)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [token])

  const completionTodos = todos.map((item, index) =>
    <div key={index}>
      {item.name}
    </div>
  )

  return (
    <div>
      {completionTodos}
    </div>
  )
}

export default FilterCompletionComponent
