const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
  user: {
    img: './иван.jpg',
    name: 'Иван Петров',
    dateOfBirth: '1 декабря 1982г.',
    job: 'IT-KAMASUTRA',
    city: 'Москва',
    language: 'Русский'
  },
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
      }
    }

    case ADD_POST: {
      return {
        ...state,
        postText: '',
        posts: [...state.posts, {id: 4, message: state.postText}]
      }
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
