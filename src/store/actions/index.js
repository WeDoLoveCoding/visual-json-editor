// 定义actiontype
export const REQ_LOGIN = 'REQ_LOGIN';
export const LOGIN_SUCC = 'LOGIN_SUCC';
export const LOGIN_ERR = 'LOGIN_ERR';

export const CHANGEA_COUNT = 'CHANGEA_COUNT';

//定义action
export const reqLogin = payload => ({
    type: REQ_LOGIN,
    payload
});

export const loginSucc = payload => ({
    type: LOGIN_SUCC,
    payload
});

export const loginErr = payload => ({
    type: LOGIN_ERR,
    payload
});

export const changeCount = payload => ({
    type: CHANGEA_COUNT,
    payload
})