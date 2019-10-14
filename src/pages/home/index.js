import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import * as actions from "store/actions";
import "./index.less";

const mapStateToProps = state => ({
    userinfo: state.user,
    common: state.common
});

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        ...actions
    },
    dispatch);

class Home extends Component {

    state = {
        userinfo: null, //用户信息
        errMsg: "", //错误信息
    }

    static getDerivedStateFromProps(nextProps, prevState){
        // console.log(nextProps.userinfo)
        let { userinfo, errMsg } = nextProps.userinfo
        if(!prevState.userinfo && nextProps.userinfo){
            return {
                userinfo: userinfo?userinfo:null,
                errMsg: errMsg
            }
        }
        return null
    }

    componentDidMount() {
        let params = {
            username: 'zhangsan',
            password: '123456'
        }
        this.props.reqLogin(params);
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(prevProps,prevState)
    }

    change = () => {
        let num = this.props.common.count;
        this.props.changeCount(++num)
    }

    render(){
        const { userinfo, errMsg } = this.state;
        const { count } = this.props.common;
        return (
            <Fragment>
                {/* 路由 */}
                <h1>导航</h1>
                <ul>
                  <li><Link to='/home'>首页</Link></li>
                  <li><Link to='/about'>关于</Link></li>
                  <li><Link to='/user'>用户</Link></li>
                  <li><Link to='/other'>其他</Link></li>
                </ul>
                {/* 同步方式 */}
                <Button type='primary' onClick={this.change}>点击改变数字</Button>
                <h2>{count}</h2>
                {/* 异步方式 */}
                { errMsg && <p style={{ color: 'red' }}>{errMsg}</p> }
                { userinfo && <h1>用户信息：{`${userinfo.name}-${userinfo.age}-${userinfo.addr}`}</h1> }
            </Fragment>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);