import 'react-app-polyfill/ie11'; //Internet Explorer 11 compatibility
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Routes from "./Routes";
import history from "./history";
import "./scss/main.scss";
const App = () =>{
    return (
    <Router history={history} >
        <Routes/>
    </Router>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));
