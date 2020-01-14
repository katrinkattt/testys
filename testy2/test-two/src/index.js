import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// const idBtn = document.getElementById('idBtn')
// const nameBtn = document.getElementById('nameBtn')
// const dateBtn = document.getElementById('dateBtn')
// const countBtn = document.getElementById('countBtn')
// var countVal = false
// countBtn.addEventListener('click', (e) =>{
//     countVal =true
// })


serviceWorker.unregister();
