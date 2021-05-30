import React from 'react'
import { useHistory } from 'react-router'
import './login.css'

const Login = (props) => {
    let history = useHistory()
    const { onLogin, login, onLogout } = props;

    let handleLogin = () => {
        localStorage.setItem("accessToken", true)
        history.replace('./products')
        onLogin()
    }

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        history.replace('/')
        onLogout()
    }
    return (
        <div className='login'>
            {login ?
                <input type='button' className='btn' onClick={handleLogout} value='Logout' /> :
                <input type='button' className='btn' onClick={handleLogin} value='Login' />}
        </div>
    )
}

export default Login
