const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  dialogs: [
    {id: 1, name: 'Александр Максимов', img: './александр.jpg'},
    {id: 2, name: 'Алексей Морозов', img: './алексей.jpg'},
    {id: 3, name: 'Василий Пичугин', img: './василий.jpg'},
    {id: 4, name: 'Геннадий Стручков', img: './геннадий.jpg'},
    {id: 5, name: 'Иван Петров', img: './иван.jpg'},
  ],
  messages: [
    {id: 1, message: 'Ut in lacus condimentum, auctor nunc ut, hendrerit turpis.'},
    {id: 2, message: 'Ut vitae euismod tellus, id tincidunt lectus.'},
    {id: 3, message: 'Phasellus lectus dui, scelerisque nec ullamcorper ac.'}
  ],
  messageText: '',
};

export function dialogsReducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        messageText: action.text
      }
    }

    case SEND_MESSAGE: {
      return {
        ...state,
        messageText: '',
        messages: [...state.messages, {id: 4, message: state.messageText}]
      }
    }

    default:
      return state;
  }
}

export const updateMessageTextCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});
