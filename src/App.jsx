import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <div className='wrapper_content'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/dialogs' element={<DialogsContainer/>}/>
          <Route path='/friends' element={<FriendsContainer/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
        </Routes>
      </div>
    </div>
  );
}
