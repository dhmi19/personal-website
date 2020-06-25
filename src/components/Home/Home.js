import React, { Component } from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class Home extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <Header/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default Home;