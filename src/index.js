import React from "react";
import  ReactDOM from "react-dom/client"; 
import {Provider} from "react-redux";
import store from "./redux/store/store";
import Router from "./router/Router";
import './styleP.scss'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <Router />
  </Provider>
);
