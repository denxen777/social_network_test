import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export function App(props) {
  const state = props.store.getState();

  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <div className='wrapper_content'>
        <Routes>
          <Route path='/profile' element={<Profile store={props.store}/>}/>

          <Route path='/news' element={<News/>}/>
          <Route path='/dialogs' element={<DialogsContainer store={props.store}/>}/>

          <Route path='/friends' element={<Friends state={state.friendsPage}/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}
