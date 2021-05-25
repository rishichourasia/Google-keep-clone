import React from 'react'
import {auth, provider} from './firebase'
import Header from "./Header.jsx"
import Button from '@material-ui/core/Button';

function Login() {
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
      
    return (
        <div>
        <Header/>
            <center>
            <Button style={{"marginTop" : "200px"}}  onClick={signin} variant="outlined">Log In</Button>
            </center>
        </div>
    );
}


export default Login
