import React, {useState, useEffect} from 'react';
import LeftSideHomeComponent from '../LeftSideHomeComponent';

const UserProfile = (props) => {
  const [token] = useState(props.token)
  const [profileData, setProfileData] = useState({})
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          `https://miniprojectc.herokuapp.com/api/v1/users/currentUser`,
          {
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json',
              'accept': 'application/json',
            },
          },
        );
        let data = await res.json()
        setProfileData(data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [token])

  return(
    <div>
    </div>
  )
}

export default UserProfile
