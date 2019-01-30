import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EventEmitter from 'events';

React.Component.prototype.event = new EventEmitter();

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
