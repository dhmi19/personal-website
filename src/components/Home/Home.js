import React, { Component } from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

class Home extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <Header/>
            </div>
        );
    }
}

export default Home;