import React , { useState , useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const Profile = () => {

    const [userDetails, setUserDetails] = useState([])
    const {state} = useLocation();
    const {username,jwtToken} = state
    console.log("before username");
    console.log(username);
    console.log(jwtToken);

    // const username = route.params;
    // console.log(username);

    // const [data, setdata] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/eeducate/find/${username}`).then((response) => {
            setUserDetails(response.data)
        })
    })


    return (
        <div>
        { userDetails.map((details) => 
        <ul key={details.id}>
            <h1>Hi {details.name}</h1>
        </ul>
        )}    
        </div>
    )
}

export default Profile
