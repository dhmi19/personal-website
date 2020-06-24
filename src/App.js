import React, { Component } from 'react';
import classes from './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Courses from './components/Courses/Courses';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Projects/>
        {/*<Courses/>*/}
      </div>
    );
  }
}

export default App;
