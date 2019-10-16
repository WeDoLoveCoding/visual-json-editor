import React,{ Fragment } from 'react'
import './index.less'


const Content = () => {
    return (
        <Fragment>
            <div>
                <button>左箭头</button>
            </div>
            <div>
                <button>右箭头</button>
            </div>
        </Fragment>
    )
}


export default function Middle() {
    return (
        <div className='editorMiddle'>
            <Content />
        </div>
    )
}
