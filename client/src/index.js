import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import cartReducer from './reducer/cartReducer';
import loginReducer from './reducer/loginReducer';
import sortReducer from './reducer/sortReducer';
import searchReducer from './reducer/searchReducer';
import paginationReducer from './reducer/paginationReducer';
import { Provider } from 'react-redux';
import { createStore,combineReducers } from 'redux';

// import "bootstrap/dist/css/bootstrap.css";

// const store = createStore(cartReducer);
const rootReducer = combineReducers({cartReducer,loginReducer,sortReducer,paginationReducer,searchReducer});
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
