import {profileAPI} from "../api/api";

//Action Type
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  profile: null,
  posts: [
    {id: 1, message: 'Hello, world!'},
    {id: 2, message: 'Quisque sapien felis, facilisis id enim a, condimentum rhoncus purus.'},
    {id: 3, message: 'Quisque posuere neque eros, nec bibendum mauris dictum nec.'},
  ],
  postText: '',
  status: ''
};

//Reducer
export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        postText: action.text
      };
    }

    case ADD_POST: {
      return {
        ...state,
        postText: '',
        posts: [...state.posts, {id: 4, message: state.postText}]
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status ? action.status : '---'
      };
    }

    default:
      return state;
  }
}

//Action Creators
export const updatePostTextCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text
});

export const addPostCreator = () => ({
  type: ADD_POST
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status
});

//Thunk
export const getProfile = (params) => {
  return (dispatch) => {
    profileAPI.getProfile(params).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}

export const getStatus = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then(data => {
      dispatch(setStatus(data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) dispatch(setStatus(status));
    });
  }
}
