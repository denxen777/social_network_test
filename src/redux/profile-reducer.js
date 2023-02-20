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
  postText: 'hello',
};

export function profileReducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_POST_TEXT: {
      const copyState = Object.assign({}, state);
      copyState.postText = action.text;
      return copyState;
    }

    case ADD_POST: {
      const copyState = Object.assign({}, state);

      const post = {
        id: 4,
        message: copyState.postText,
      };

      copyState.posts = Object.assign([], state.posts);
      copyState.posts.push(post);
      copyState.postText = '';
      return copyState;
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
