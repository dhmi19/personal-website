import React, {useEffect} from 'react';
import Courses from './containers/Courses/Courses';
import Home from './containers/Home/Home';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';
import ContactPage from './containers/ContactPage/ContactPage';
import Projects from './components/Projects/Projects';
import GAListener from './util/GAListener';

const App = () => {
  
  useEffect(() => {
    document.title = "Dhruv Mittal";
  }, []);

  let routes = (
    <GAListener>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/courses" component={Courses}/>
        <Route path="/contact" exact component={ContactPage}/>
        <Route path="/" component={Home}/>
        <Redirect to='/'/>
      </Switch>
    </GAListener>
    
  );

  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );

}

export default App;
