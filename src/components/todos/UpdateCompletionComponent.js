import React, { useState, useEffect } from 'react'

const UpdateCompletionComponent = (props) => {
  const [token] = useState(props.token)

  useEffect(() => {
    const fetchData = async() => {
      try {
        let data = {
          //all must be input
          id: "5e4bebdfc02ef6001777147a",
          completion: true,
        }
        let send = JSON.stringify(data)
        let sending = await fetch(`https://miniprojectc.herokuapp.com/api/v1/tasks/update/completion`, {
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
      <p>UpdateCompletionComponent</p>
    </div>
  )
}

export default UpdateCompletionComponent
