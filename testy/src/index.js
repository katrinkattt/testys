import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const btn = document.getElementById('btnClick');
const modal = document.getElementById('modal');
const btnClose = document.getElementById('btnClose');

btn.addEventListener('click', () => {
    modal.style.display='block';
});

btnClose.addEventListener('click', () => {
    modal.style.display='none';
})

serviceWorker.unregister();
