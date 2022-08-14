import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
function handlekeydown(e){
    console.log(e);
  }
ReactDOM.render(<div onKeyDown={handlekeydown} style={{height:"100vh",width:"100vw"}}><App/></div>,document.getElementById('root'));




