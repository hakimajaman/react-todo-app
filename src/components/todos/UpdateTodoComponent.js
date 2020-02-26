import React, { useState, useEffect } from 'react'

const UpdateTodoComponent = (props) => {
  const [token] = useState(props.token)

  useEffect(() => {
    const fetchData = async() => {
      try {
        let data = {
          //all must be input
          id: "5e4bebdfc02ef6001777147a",
          name: "Updated",
          description: "Updated description",
          dueDate: "2020-12-12",
          completion: false,
          importance: false
        }
        let send = JSON.stringify(data)
        let sending = await fetch(`https://miniprojectc.herokuapp.com/api/v1/tasks`, {
          method: 'PUT',
          headers: {
            'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json',
            'accept': 'application/json'
          },
          body: send
        })
        let res = await sending.json()
        console.log(res)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [token])

  return (
    <div>
      <p>UpdateTodoComponent</p>
    </div>
  )
}

export default UpdateTodoComponent
