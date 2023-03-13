import './App.css';
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";

export function App() {
  return (
    <div className='wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className='wrapper_content'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/dialogs' element={<DialogsContainer/>}/>
          <Route path='/friends' element={<FriendsContainer/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </div>
  );
}
