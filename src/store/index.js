import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

import rootSaga from "./sagas";
//applyMiddleware来自redux可以包装 store 的 dispatch
const sagaMiddleware = createSagaMiddleware();

const configureStore = initState => {
  const EnhancerCompose =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //应用redux devtool

  const store = createStore(
    rootReducer,
    initState,
    EnhancerCompose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga); //启动异步中间件

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
