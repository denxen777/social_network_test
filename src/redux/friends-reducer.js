const initialState = {
  friends: [
    {id: 7, name: 'Денис Сидоров', img: './денис.jpg'},
    {id: 5, name: 'Иван Петров', img: './иван.jpg'},
    {id: 1, name: 'Александр Максимов', img: './александр.jpg'},
    {id: 3, name: 'Василий Пичугин', img: './василий.jpg'},
    {id: 6, name: 'Максим Купец', img: './максим.jpg'},
    {id: 2, name: 'Алексей Морозов', img: './алексей.jpg'},
    {id: 4, name: 'Геннадий Стручков', img: './геннадий.jpg'},
  ]
};

export function friendsReducer(state = initialState, action) {

  switch (action.type) {
    default:
      return state;
  }
}
