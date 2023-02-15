import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";

export function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <div className='wrapper_content'>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/dialogs' element={<DialogsContainer/>}/>
          <Route path='/friends' element={<FriendsContainer/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}
