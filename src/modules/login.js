import {createAction, handleActions } from 'redux-actions'

const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAIL = 'login/LOGIN_FAIL';
export const loginfail = createAction(LOGIN_FAIL);
export const loginsuccess = createAction(LOGIN_SUCCESS);

const initState = {
    status: 0,
    message: ''
}

export default handleActions(
    {
        [LOGIN_SUCCESS]: (state, {payload: data}) => {
            return { status: data.status, message: (data.status===200) ? '성공' : '실패'}
        }
    },
    initState
)


