import React, { Fragment } from 'react'
import './index.less'

const Header = () => {
    return (
        <div>
            <button>展开</button>
            <button>收起</button>
            <button>撤销</button>
            <button>重做</button>
            <button>保存到本地</button>
            <button>清空</button>
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
