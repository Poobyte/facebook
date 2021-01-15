import React from 'react';
import './App.css';
import Header from './Header.js';
import Left from './Left.js';
import Right from './Right.js';
import Middle from './Middle';
import Fbchat from './Fbchat';
import Footer from './Footer.js';
import  './index.css';

function App() {
  
  return (
      <div className="App">
        <Header />
        <Footer />
       <div className="facebook">
        <Left /> 
        <Middle />
        <Right />
        <Fbchat/>
        </div>
       </div>
  );
}


export default App;
