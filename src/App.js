import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Resume from './containers/Resume/Resume';

class App extends Component {
  
  render() {
    return (
      <>
        <CssBaseline/>
        <Route exact path='/' component={Header}/>
        <Route path='/resume' component={Resume}/>
      </>
    );
  }
}

export default App;
