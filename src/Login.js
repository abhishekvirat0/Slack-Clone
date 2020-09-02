import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // e.preventDefault();
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch((error)=>{
                alert(error.message)
            });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src={require("./logo.svg")} alt=""/>
                <h1>
                Sign in to your workspace
                </h1>
                <p>Where work happens !</p>
                <Button onClick={signIn}>Sign In with Google</Button><br/>
                {/* <Button onClick={signIn}>Sign In with Github</Button> */}
            </div>
        </div>
    )
}

export default Login
