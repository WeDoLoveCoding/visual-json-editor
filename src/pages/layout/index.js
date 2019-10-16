import React from 'react'
import './index.less'
import Hearder from './Header'
import Footer from './Footer'

export default (props) => (
  <div className='layout-wrapper'>
    <Hearder className='layout-header' />
    <div className='layout-content'>{props.children}</div>
    <Footer className='layout-footer' />
  </div>
)