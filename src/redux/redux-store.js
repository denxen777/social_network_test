import {combineReducers, legacy_createStore as createStore} from "redux";
import {friendsReducer} from "./friends-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

export const reduxStore = createStore(reducers);
