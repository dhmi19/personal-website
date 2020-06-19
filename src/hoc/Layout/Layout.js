import React, { Component } from 'react';
import Aux from '../Aux';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <NavBar />
                <Header />
            </Aux>
        );
    }
}

export default Layout;