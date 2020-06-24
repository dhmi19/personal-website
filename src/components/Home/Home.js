import React, { Component } from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import About from '../About/About';

class Home extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <Header/>
                <Projects/>
            </div>
        );
    }
}

export default Home;