import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import logo from './logo.png'



function Login() {
    const signIn = () => {

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
        </div>
    )
}

export default Login
