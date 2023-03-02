const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  profile: null,
  posts: [
    {id: 1, message: 'Hello, world!'},
    {id: 2, message: 'Quisque sapien felis, facilisis id enim a, condimentum rhoncus purus.'},
    {id: 3, message: 'Quisque posuere neque eros, nec bibendum mauris dictum nec.'},
  ],
  postText: '',
};

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

    default:
      return state;
  }
}

export const updatePostTextCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text
});

export const addPostCreator = () => ({
  type: ADD_POST
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});
