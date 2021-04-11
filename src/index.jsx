import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`  
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
`

ReactDOM.render(
    <BrowserRouter>
        {/*Глобальные стили*/}
        <Global/>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

