import { Button, FormControl, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { LoggedUserContext } from '../contexts/LoggedUserContext';
import { Box } from '@mui/material';

const LoginPage = () => {
    const history = useHistory();
    const { setLoggedUser } = useContext(LoggedUserContext);
    const [state, setState] = useState({
        "email": "",
        "password": ""
    })
    const handleEmailChange = (e) => {
        var email = e.target.value;
        setState({ ...state, email: email })

    }
    const handlePasswordChange = (e) => {
        var password = e.target.value;
        setState({ ...state, password: password })
    }
    const handleSubmit = () => {
        axios.get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true }).then((response) => {
            axios.post("http://localhost:8000/login", { email: state.email, password: state.password }, { withCredentials: true }).then((response) => {
                localStorage.setItem('token', response.data.token)
                setLoggedUser({
                    'id': response.data.user.id,
                    'name': response.data.user.name,
                    'email': response.data.user.email
                })
                //console.log("token ",response.data.token) 
                //console.log('token ',localStorage.getItem('token'))
                history.push("/dashboard")
            })
        })

    }
    return (

        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <FormControl >
            <TextField label="email" onChange={handleEmailChange}></TextField>
            <TextField label="password" onChange={handlePasswordChange}></TextField>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>

        </FormControl>
        </Box>


    )
}
export { LoginPage }