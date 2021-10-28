import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from './modules/login'
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();


// import reportWebVitals from './reportWebVitals';
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import { applyMiddleware, createStore } from "redux";
// import { createAction, handleActions } from "redux-actions";
// import axios from "axios";
// import { all, call, put, takeLatest } from "redux-saga/effects";
// import middleware from "redux-saga";
// import { composeWithDevTools } from "redux-devtools-extension";

// const saga_middleware = middleware();
// const axios_client = axios.create();
// const get_request = (payload) => axios_client.get("/api/check/check");

// export const axios_login = createAction("axios_reducer", (payload) => payload);
// export const saga_login = createAction("async_action", (payload) => payload);

// function* async_register() {
//   yield takeLatest("async_action", async_create);
// }

// const async_create = saga_async_post(get_request);

// function saga_async_post(axios_return) {
//   return function* (action) {
//     console.log("액션 = ", action);
//     try {
//       const response = yield call(axios_return, action.payload);
//       console.log("응답 = ", response);
//       yield put({
//         type: "saga_reducer",
//         payload: response.data,
//       });
//     } catch (error) {
//       console.log(error);
//       yield put({
//         type: "saga_reducer",
//         payload: error,
//       });
//     }
//   };
// }

// const reducer = handleActions(
//   {
//     axios_reducer: (ogstate, { payload: action }) => ({
//       ...ogstate,
//       axios_result: action,
//     }),
//     saga_reducer: (ogstate, { payload: action }) => ({
//       ...ogstate,
//       saga_result: action,
//     }),
//   },
//   { axios_result: undefined, saga_result: undefined }
// );


// function* async_combine() {
//   yield all([async_register()]);
// }

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(saga_middleware))
// );

// saga_middleware.run(async_combine);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();