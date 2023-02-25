/*import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {friendsReducer} from "./friends-reducer";

export const store = {
  _state: {
    profilePage: {
      user: [
        {name: 'Иван Петров', dateOfBirth: '1 декабря 1982г.', job: 'IT-KAMASUTRA', city: 'Москва', language: 'Русский'}
      ],
      posts: [
        {id: 1, message: 'Hello, world!'},
        {id: 2, message: 'Quisque sapien felis, facilisis id enim a, condimentum rhoncus purus.'},
        {id: 3, message: 'Quisque posuere neque eros, nec bibendum mauris dictum nec.'},
      ],
      postText: 'hello',
    },
    dialogsPage: {
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
    },
    friendsPage: {
      friends: [
        {id: 7, name: 'Денис Сидоров', img: './денис.jpg'},
        {id: 5, name: 'Иван Петров', img: './иван.jpg'},
        {id: 1, name: 'Александр Максимов', img: './александр.jpg'},
        {id: 3, name: 'Василий Пичугин', img: './василий.jpg'},
        {id: 6, name: 'Максим Купец', img: './максим.jpg'},
        {id: 2, name: 'Алексей Морозов', img: './алексей.jpg'},
        {id: 4, name: 'Геннадий Стручков', img: './геннадий.jpg'},
      ]
    }
  },
  _subscribes() {
    console.log('State changed');
  },
  subscribe(observer) {
    this._subscribes = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

    this._subscribes(this.getState());
  }
}*/
