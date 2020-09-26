import {applyMiddleware, compose, createStore} from "redux";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

// import {initSagas} from "../sagas/sagas";
import rootReducer from "../reducers/reducers";
import {initSagas} from "../sagas/sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  )
);

export default function configureStore() {
  const store = createStore(
    rootReducer(history),
    enhancer
  );

  // initSagas(sagaMiddleware);
  return store;
};
