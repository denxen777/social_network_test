import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {reduxStore} from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderAllTree() {
  root.render(
    <BrowserRouter>
      <Provider store={reduxStore}>
        <App/>
      </Provider>
    </BrowserRouter>
  );
}

rerenderAllTree();

reduxStore.subscribe(rerenderAllTree);