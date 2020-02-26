let token = localStorage.getItem("myToken")

export let todos = []

export const filterCompletion  = async(e) => {
  let res = await fetch(`https://miniprojectc.herokuapp.com/api/v1/tasks/filter/completion`, {
    headers: {
      'Authorization': "Bearer "+token,
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  })
  let data = await res.json()
  todos = data.data.docs
}

export const konsol = () => {
  console.log("yeeeee")
}
