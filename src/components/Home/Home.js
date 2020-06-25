import React, {useRef} from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Element } from 'react-scroll'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {

    const contactRef = useRef(null);
    const executeScroll = () => scrollToRef(contactRef);

    const scrollToContact = () => {
        const anchor = document.querySelector('#contact')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return(
        <div>
            <NavBar contactScroll = {scrollToContact}/>
            <Header clicked={executeScroll}/>
            <Projects/>

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