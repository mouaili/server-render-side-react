import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrateRoot(
    
    document.getElementById('root'),

    <BrowserRouter>
    <App />
    </BrowserRouter>
    
);


