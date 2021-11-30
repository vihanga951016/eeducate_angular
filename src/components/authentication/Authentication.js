// 2txnOIYixz

import React , {useState} from 'react'
// import HttpClient from 'react-http-client';
import axios from 'axios';
// import { useNavigate } from "@reach/router"
import { useNavigate } from "react-router-dom";

const Authentication = () => {

    const [loginDetails, setLoginDetails] = useState([])
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [jwtToken, setJwtToken] = useState("")
    
    // const token = JSON.parse(sessionStorage.getItem('data'));
    // const token = user.data.id;
    

    // const [redirect, setRedirect] = useState(false)

    const navigate = useNavigate();
    

    // const login = async(user) => {
    //     const postResponse = await HttpClient.post(`http://localhost/8081/eeducate/login`, user)
    //     return postResponse;
    // }

    const login = async(e) => {

        e.preventDefault();

        // console.log("line one executed")
        //  axios.post(`http://localhost:8081/eeducate/login`, {
        //     username, password , withCredentials: 'include'
        // })
        // .then((response) => {
        //         setLoginDetails(response.data)
        //         navigate('/profile', {state: { username: username }})
                
        // })
        // .catch(function (error, response) {
        //     if (error.response) {
        //         console.log(error.response.data);
        //         console.log(error.response.status);
        //         console.log(error.response.headers);
        //     } 
        // })

            axios.post(`http://localhost:8081/eeducate/login`, {username,password,withCredentials: "include"})
            .then((response) => {
                setLoginDetails(response.data)
                // setJwtToken(response.token)
                console.log(response);
                console.log(response.headers["content-type"]);
                console.log(response.headers["jwt-token"]);
                // navigate('/profile', {state: { username: username , jwtToken: jwtToken}})
            })
            // if(res.data)
            // setLoginDetails(res.data.token)
            // setJwtToken(res.data.token)
            // navigate('/profile', {state: { username: username , jwtToken: jwtToken}})
            // console.log(res+" "+loginDetails+" ");
            console.log(loginDetails);
            console.log(username);
            console.log(jwtToken);
        
            
        // setRedirect(true)
        // console.log("login method executed")
        // console.log(username, password , loginDetails)
        // return loginDetails;
    }

    const saveToken = (token) => {
        localStorage.setItem('Token',token)
    }

    const addUserToLocalStorage = (loginDetails) => {
        localStorage.setItem('LoginDetails', JSON.stringify(loginDetails))
    }
    
    const loadToken = () => {
        localStorage.getItem('Token')
    }

    // const getToken = () => {
    //     return token
    // }

    // if(redirect){
    //     return <Redirect to="/profile" />;
    // }


    return (
        <div>
            <form onSubmit={login}>
                <label>Username: </label>
                <input type="text" value={username} onChange={(e) => setusername(e.target.value)}/>
                <br/>
                <label>Password: </label>
                <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Authentication
