import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

class App extends Component {
  
  render() {
    return (
      <>
        <Header/>
        <Projects/>
      </>
    );
  }
}

export default App;
