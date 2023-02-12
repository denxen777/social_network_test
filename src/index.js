import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {reduxStore} from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderAllTree() {
  root.render(
    <BrowserRouter>
      <App state={reduxStore.getState()} dispatch={reduxStore.dispatch}/>
    </BrowserRouter>
  );
}

rerenderAllTree();

reduxStore.subscribe(rerenderAllTree);
