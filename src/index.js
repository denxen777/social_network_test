import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {store} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderAllTree(state) {
  root.render(
    <BrowserRouter>
      <App state={state} store={store}/>
    </BrowserRouter>
  );
}

rerenderAllTree(store.getState());

store.subscribe(rerenderAllTree);