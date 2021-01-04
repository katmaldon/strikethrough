

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals';
// import Users from './users'
// import Contact from './contact'
// ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render((
    <BrowserRouter>
      <Link to="/">Home</Link>
    </BrowserRouter>
  ), holder);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
