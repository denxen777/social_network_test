import {combineReducers, legacy_createStore as createStore} from "redux";
import {friendsReducer} from "./friends-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer
});

export const reduxStore = createStore(reducers);
