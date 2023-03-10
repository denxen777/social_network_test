//Action Type
import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

//Reducer
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    }

    default:
      return state;
  }
}

//Action Creators
export const setAuthUserData = (id, login, email) => ({
  type: SET_AUTH_USER_DATA,
  data: {id, login, email}
})

//Thunk
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.auth().then(data => {
      if (data.resultCode === 0) {
        const {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  }
}