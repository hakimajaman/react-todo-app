import React, { useState, useEffect } from 'react'

const UpdateImportanceComponent = (props) => {
  const [token] = useState(props.token)

  useEffect(() => {
    const fetchData = async() => {
      try {
        let data = {
          //all must be input
          id: "5e4bebdfc02ef6001777147a",
          importance: true,
        }
        let send = JSON.stringify(data)
        let sending = await fetch(`https://miniprojectc.herokuapp.com/api/v1/tasks/update/importance`, {
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
      <p>UpdateImportanceComponent</p>
    </div>
  )
}

export default UpdateImportanceComponent
