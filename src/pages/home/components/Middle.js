import React, { Fragment } from 'react'
import './index.less'


const Content = () => {
    return (
        <Fragment>
            <button className='btn'>
                <i className="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu- iconArrows"></i>
            </button>
            <button className='btn centerSecondBtn'>
                <i className="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1 iconArrows"></i>
            </button>

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
