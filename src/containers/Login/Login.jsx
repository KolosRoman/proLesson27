import React from 'react';
import {LoginForm} from '../../components/login-form/LoginForm.jsx';

export class Login extends React.Component {
    constructor() {
        super()
    }

    login = ({email, password}) => {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('token', response.token)
                this.props.onLoginSuccess(response.token)
            })
    }

    render() {
        return (
            <LoginForm loginAction={this.login}/>
        )
    }
}