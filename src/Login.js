import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import logo from './logo.png'
import { actionTypes } from './reducer'
import { useStateValue } from "./StateProvider"



function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result);
            })
            .catch((error) => alert(error.message));
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
