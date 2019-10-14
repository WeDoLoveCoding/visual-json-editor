import { combineReducers } from "redux";
import { REQ_LOGIN, LOGIN_SUCC, LOGIN_ERR, CHANGEA_COUNT } from "../actions";

// 初始化state
const userState = {
    isLogin: false,
    userInfo: null,
    errMsg: ''
}

const userReducer = (state = userState, action) => {
    switch(action.type) {
        case REQ_LOGIN: 
            return { ...state, isLogin: false }
        case LOGIN_SUCC:
            sessionStorage.setItem("userInfo", action.payload)
            return { ...state, isLogin: true, userinfo: action.payload }
        case LOGIN_ERR:
            return { ...state, isLogin: false, errMsg: action.payload }
        default:
            return state
    }
};

const commonState = {
    count: 0
}

const commonReducer = (state = commonState, action) => {
    switch(action.type) {
        case CHANGEA_COUNT: 
            return { ...state, count: action.payload }
        default:
            return state
    }
}

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer
});
export default rootReducer;
