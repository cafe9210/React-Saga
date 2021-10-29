import {call, put} from "@redux-saga/core/effects";
// import axios from 'axios';
import { checkApi, loginApi } from "./api/auth";
export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAIL`;
    return function* (action) {
        try {
            const response = yield call(request, action.payload);
            // const response =  yield call(checkApi);
            console.log(response.status);
            yield put({type: SUCCESS, payload: response.status});

        } catch (e) {
            yield put({type: FAILURE, payload: e});
        }

    };
};