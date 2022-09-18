import React from 'react';
import './styles/Login.css';
// import input from material ui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useHistory } from "react-router-dom";

function Login() {

    const history = useHistory();

    const handleLogin = () => {
        history.push("/dashboard");
    }

  return (
    <div className={'center-container'}>
        <div className={'login-container'}> 
        <TextField id="standard-basic" label="Login" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
        </div>
    </div>
  )
}

export default Login