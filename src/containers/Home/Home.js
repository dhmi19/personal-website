import React, {useRef} from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
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

            {/*<Element id='contact' name="contact">
                <div ref={contactRef}>
                    <Contact/>
                </div>
            </Element>*/}
            <Footer/>
        </div>
    );
};

export default Home;