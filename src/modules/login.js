import { takeLatest } from '@redux-saga/core/effects';
import {createAction, handleActions } from 'redux-actions'
import {checkApi, loginApi} from '../api/auth'
import createRequsetSaga from '../createRequestSaga'
const LOGIN = 'login/LOGIN';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAIL = 'login/LOGIN_FAIL';
export const loginfail = createAction(LOGIN_FAIL);
export const loginsuccess = createAction(LOGIN_SUCCESS);
export const login = createAction(LOGIN);

const loginSaga = createRequsetSaga(LOGIN, checkApi)

export function* authSaga(){
    yield takeLatest(LOGIN, loginSaga)
}

const initState = {
    status: 0,
    message: ''
}

const auth = handleActions(
    {
        [LOGIN_SUCCESS]: (state, {payload: data}) => ({
           status: data, message: (data===200) ? '성공' : '실패'
        }),
        [LOGIN_FAIL]: (state, {payloaad: data}) => ({
           status: data, message: (data===200) ? '성공' : '실패'
        })
    },
    initState
)

export default auth;
