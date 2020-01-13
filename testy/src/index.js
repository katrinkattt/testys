import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const btn = document.getElementById('btnClick')
        const modal = document.getElementById('modal')
        btn.addEventListener('click', (display) =>{
            modal.style.display='block'
        });
serviceWorker.unregister();
