import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
