import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/week18Populater", { useNewUrlParser: true });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

