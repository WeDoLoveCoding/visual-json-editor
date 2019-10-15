import React, { Component, Fragment } from "react"
import "./index.less"

class Home extends Component {

    state = {}

    render(){
        return (
            <Fragment>
                {/* 路由 */}
                <h1>导航</h1>
                <ul>
                  <li><Link to='/home'>首页</Link></li>
                </ul>
            </Fragment>
        )
    }
}


export default Home