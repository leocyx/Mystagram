import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header"
import { Provider } from "react-redux"
import store from "./store"
const router = (
    <Provider store={store}>
        <BrowserRouter>

            <Route path="/" component={Header} />
            
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
