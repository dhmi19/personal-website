import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import classes from './ContactPage.module.css';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <div className={classes.ContactPage}>
                    <Contact/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ContactPage;