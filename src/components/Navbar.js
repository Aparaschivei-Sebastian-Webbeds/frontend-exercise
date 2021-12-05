import { AppBar, Toolbar } from '@material-ui/core';
import React, { useContext } from 'react';
import { BrowserRouter, Link,Route } from 'react-router-dom';
import { LoginPage } from '../Pages/Login';
import { Dashboard } from '../Pages/Dashboard';
import { RegisterPage } from '../Pages/Register';
import {Typography,Button} from '@mui/material'
import { LoggedUserContext } from '../contexts/LoggedUserContext';
import { useHistory } from 'react-router';
import axios from '../config/axios'
const Navbar=()=>{
  const history=useHistory();
  const {setLoggedUser}=useContext(LoggedUserContext)
  const handleLogoutButton=()=>{
    axios.get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true }).then((response) => {

      axios.post("http://localhost:8000/api/logout",{ withCredentials: true }).then((response) => {
               
        setLoggedUser({
            'id': null,
            'name':null,
            'email': null
        })
        //console.log("token ",response.data.token) 
        //console.log('token ',localStorage.getItem('token'))
        history.push("/login")
    })
    })
    
  }
  const{loggedUser}=useContext(LoggedUserContext)
    return(
    <BrowserRouter>
        <AppBar position="static">
           <Toolbar variant="dense" >
           <Typography variant="h6" component="div" sx={{ flexGrow: 0.01 }}>
           <Link to="/dashboard" color="inherit" style={{ textDecoration: 'none' ,color:"white"}}>Dashboard</Link>
           
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.01}}>
          <Link to="/login" color="primary" style={{ textDecoration: 'none',color:"white"  }}>Login</Link>
           
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.01}}>
          <Link to="/register" color="primary" style={{ textDecoration: 'none',color:"white"  }}>Register</Link>
           
          </Typography>
          {loggedUser.id &&<Typography variant="h6" component="div" sx={{ flexGrow: 1.3}}>
           User: {loggedUser.name}
          </Typography>}
          
           </Toolbar>
   
           
         </AppBar>
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/login" component={LoginPage} />
         <Route path="/register" component={RegisterPage} />
       </BrowserRouter>)
}
export {Navbar};
//<Button color="inherit" onClick={handleLogoutButton}>LogOut</Button>