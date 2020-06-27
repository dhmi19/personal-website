import React, { Component } from 'react';
import Courses from './containers/Courses/Courses';
import Home from './containers/Home/Home';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';
import ContactPage from './containers/ContactPage/ContactPage';

class App extends Component {
  
  render() {

    let routes = (
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/courses" component={Courses}/>
        <Route path="/contact" exact component={ContactPage}/>
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
