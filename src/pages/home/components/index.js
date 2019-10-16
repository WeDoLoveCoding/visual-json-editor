import React from 'react'
import './index.less'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'

export default function index() {
    return (
        <div className='editor'>
            <Left />
            <Middle />
            <Right />
        </div>
    )
}
