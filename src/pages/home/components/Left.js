import React from 'react'
import './index.less'

const Header = () => {
    return (
        <div>
            <button className='btn'>格式化</button>
            <button className='btn btnMargin'>压缩模式</button>
        </div>
        )
}

const Content=()=>{

    return(
        <div>
            content
        </div>
    )
}

export default function Left() {
    return (
        <div className='editorLeft'>
            <Header />
            <Content/>
        </div>
    )
}
