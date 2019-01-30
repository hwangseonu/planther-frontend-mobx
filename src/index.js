import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import UserStore from './stores/user';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EventEmitter from 'events';
import axios from 'axios';

axios.defaults.baseURL = 'https://planther-api.herokuapp.com/';
React.Component.prototype.event = new EventEmitter();

const user = new UserStore();

ReactDOM.render(<Provider user={user}>
  <App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
