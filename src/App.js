import React, {Component} from 'react';
import './App.css';
import StackList from './components/StackList';
import {Link} from 'react-router-dom';
 
const App = () => {
  return (
    <div className="App">
      <h1>Flashcardpro</h1>
      <StackList></StackList>
      <Link to='stack-form'><h2>Create a New StackList</h2></Link>
    </div>
  );
}

export default App;
