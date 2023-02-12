import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Settings/Settings";

export function App(props) {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <div className='wrapper_content'>
        <Routes>
          <Route path='/profile' element={<Profile state={props.state.profilePage}
                                                   dispatch={props.dispatch}
          />}/>

          <Route path='/news' element={<News/>}/>
          <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}
                                                   dispatch={props.dispatch}
          />}/>

          <Route path='/friends' element={<Friends state={props.state.friendsPage}/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}
