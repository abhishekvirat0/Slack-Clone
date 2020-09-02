import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

// BACKEND ENDPOINT BASE URL
console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
        ,
        document.getElementById('root')
        );


