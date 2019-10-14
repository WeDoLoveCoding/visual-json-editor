/**
 * 定义saga文件
 */
import { put, takeLatest, all, delay } from "redux-saga/effects";
import * as actions from "../actions";

function* loginAsync (action) {
    const { username, password } = action.payload
    
    try{
        if(username && password){
            yield delay(1000); //模拟一个异步，替换成后端请求api即可。例如：使用yeild call(axios.get(url))
            yield put(actions.loginSucc({
                name: "zhangsan",
                age: 22,
                addr: 'chengdu'
            }));
        }
        if(!username || !password){
            yield put(actions.loginErr('用户名或密码错误！'));
        }

    } catch(error) {
        console.log(error);
    }
}


export default function* rootSaga() {
  yield all(
    [
      takeLatest(actions.REQ_LOGIN, loginAsync)
    ]
  );
}