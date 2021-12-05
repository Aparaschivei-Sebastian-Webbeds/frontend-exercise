import { Button, FormControl, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {Box} from "@mui/material";

const RegisterPage = () => {
    const history = useHistory();
    const [state, setState] = useState({
        "name": "",
        "email": "",
        "password": ""
    })
    const handleNameChange = (e) => {
        var name = e.target.value;
        setState({ ...state, name: name })

    }
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
            axios.post("http://localhost:8000/register", { name: state.name, email: state.email, password: state.password }, { withCredentials: true }).then(() => {
                history.push("/login")
            })
        })

    }
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FormControl align="center">
                <TextField label="Name" onChange={handleNameChange} />
                <TextField label="Email" onChange={handleEmailChange} />
                <TextField label="Password" onChange={handlePasswordChange} />
                <Button variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
            </FormControl>
        </Box>

    )

}
export { RegisterPage };