import React, {useRef} from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {

    const contactRef = useRef(null);
    const executeScroll = () => scrollToRef(contactRef);

    return(
        <div>
            <NavBar />
            <Header clicked={executeScroll}/>
            <Projects/>
            <div ref={contactRef}>
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;