import React, {useRef} from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Recommendations from '../../components/Recommendations/Recommendations';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import { Element } from 'react-scroll'
import classes from './Home.module.css';
import AboutMe from '../../components/AboutMe/AboutMe';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {

    const contactRef = useRef(null);
    const executeScroll = () => scrollToRef(contactRef);

    const scrollToContact = () => {
        const anchor = document.querySelector('#contact')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return(
        <div className={classes.Home}>
            <NavBar contactScroll = {scrollToContact}/>
            <Header clicked={executeScroll}/>
            <AboutMe/>
            <Recommendations/>
            <Element id='contact' name="contact">
                <div ref={contactRef}>
                    <Contact/>
                </div>
            </Element>
            <Footer/>
        </div>
    );
};

export default Home;