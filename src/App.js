import React, { Component } from 'react';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import About from './components/About/About';

class App extends Component {
  
  
  render() {

    let routes = (
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/courses" component={Courses}/>
        <Route path="/" exact component={Home}/>
        <Redirect to='/'/>
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
