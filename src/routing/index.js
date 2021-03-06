// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './app';
import { history } from './history';

render(
    <Router history = {history}>
        <App />
    </Router>,
    document.getElementById('root')
);