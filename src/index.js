
import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client';
// import '@styles/main.css';
//import '@styles/Header.scss';
import '@styles/style.scss';
import github from '@images/github.png';
import twitter from '@images/twitter.png';
import instagram from '@images/instagram.png';
import 'boxicons';


import App from './routes/App'

// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.createRoot (document.getElementById('app')).render(<App />, );