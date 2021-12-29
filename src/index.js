// Import Area
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Let Create another RFC
function Contact(){
  return <span>+91-7999452711</span>
}

//Let create our first RFC = F = Functio
function Course({mentor}){
  return (
    <span className="a">Join OKLABS Training For ReactJS { mentor } <Contact /> </span>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <h1>Welcome To ReactJS <Course mentor={'ANIL DOLLOR'}  /> </h1>
  </React.StrictMode>,
  document.getElementById('anil')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
