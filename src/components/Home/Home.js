import React, { Component } from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

class Home extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <Header/>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

export default Home;