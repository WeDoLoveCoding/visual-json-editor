import React, { Fragment } from 'react'
import { NavLink } from "react-router-dom"

const Other = (props) => {
  return (
    <Fragment>
      <h1>Other</h1>
      <div>
        <NavLink to="/other/me">关于我们</NavLink>
        <NavLink to="/other/contract">联系我们</NavLink>
      </div>
      <div>
        {props.children}
      </div>
    </Fragment>
  )
}

export default Other