import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"; 
import thunk from "redux-thunk"; 
import "./index.css";
import App from "./App";
import todoReducer from "./reducers";

const store = createStore(todoReducer, applyMiddleware(thunk)); 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
