import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
const container = document.getElementById('root');
const root=createRoot(container);
root.render(<React.StrictMode>
  <App />
</React.StrictMode>)

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
