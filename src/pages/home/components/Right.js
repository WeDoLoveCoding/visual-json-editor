import React, { Fragment } from 'react'
import './index.less'

const Header = () => {
    return (
        <div>
            <button className='btn'>展开</button>
            <button className='btn btnMargin'>收起</button>
            <button className='btn btnMargin'>撤销</button>
            <button className='btn btnMargin'>重做</button>
            <button className='btn btnMargin'>保存到本地</button>
            <button className='btn btnMargin'>清空</button>
        </div>
    )
}

const Content = () => {

    return (
        <div>
            content
        </div>
    )
}


export default function Right() {
    return (
        <div className='editorRight'>
            <Header />
            <Content />
        </div>
    )
}
