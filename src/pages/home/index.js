import React, { Component, Fragment } from "react"
import Editor from './components'
import "./index.less"

class Home extends Component {

    state = {}

    render() {
        return (
            <Fragment>
                {/* 路由 */}
                <Editor />
            </Fragment>
        )
    }
}


export default Home