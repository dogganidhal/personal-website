import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import Axios from "axios";

const BASE_URL = process.env["REACT_APP_API_URL"] || "http://localhost:8080";
const API_KEY = process.env["REACT_APP_API_KEY"];

Axios.defaults.baseURL = BASE_URL;
Axios.defaults.params = {
	'api-key': API_KEY
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
