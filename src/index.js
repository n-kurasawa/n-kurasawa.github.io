import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

// import * as firebase from "firebase";
// import config from "./config/"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();