import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CreateContextFun} from '/Users/admin/WowTraining/my-app/src/component/CreateContext.jsx'
import App1 from '/Users/admin/WowTraining/my-app/src/App1.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CreateContextFun>
      <App />
    </CreateContextFun> */}
    <App1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
