import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('accessToken')) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to='/' />
                }
            }
            }
        />
    )
}

export default ProtectedRoute
