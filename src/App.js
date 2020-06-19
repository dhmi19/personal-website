import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  
  render() {
    return (
      <>
        <CssBaseline/>
        <Layout></Layout>
      </>
    );
  }
}

export default App;
