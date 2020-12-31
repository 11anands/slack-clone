// Importing React Files
import React, { useState } from 'react';

// Import Third Party Modules
import { Button } from "@material-ui/core";

// Importing the Project Directory Files
import './Login.component.css';
import './logo.jpg';
import { auth, provider } from '../../firebase';

// Code
function Login () {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                alert(error.message);
            });
    };
    return(
        <div className="login">
            <div className="login__container">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wuv.de%2Ftech%2Fdesigner_verreissen_das_neue_slack_logo&psig=AOvVaw3oaqktCnqvA467yDh6pz7i&ust=1609512084588000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiG5fK5-O0CFQAAAAAdAAAAABAD"/>
                <h1>Sign in to Slack</h1>
                <p>Use Slack for easy communication</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
};

export default Login;