import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EventEmitter from 'events';

React.Component.prototype.event = new EventEmitter();

ReactDOM.render(<Provider>
  <App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
