import React from 'react'
import { Route, Redirect } from 'react-router-dom'

class AuthorizedRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props
        const isLogged = sessionStorage.getItem("userInfo") != null ? true : false
        return (
                <Route {...rest} render={props => {
                    return isLogged
                            ?  <Component {...props} />
                            : <Redirect to="/login" />
                }} />
        )
    }
}

export default AuthorizedRoute
