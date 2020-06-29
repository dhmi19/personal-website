import React, {Component} from 'react';
import Typed from 'react-typed';
import Particles from '../../components/UI/Particles/Particles';
import classes from './Header.module.css';
import Resume from '../../res/resume.pdf';


class Header extends Component {

    state={
        isMobile: false
    }

    handleWindowResize = () => {
        this.setState({ isMobile: window.innerWidth < 480 });
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
        this.setState({isMobile: window.innerWidth < 480});
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    render() {

        const typedFontSize = this.state.isMobile ? "1.2em" : "1.5em";
        console.log(typedFontSize);
        const typedFontPrefix = this.state.isMobile ? "I'm a " : "I'm a passionate "
        return(
            <div>
                <Particles/>
                <div className={classes.Header}>
                    <div className={classes.title}>
                        <p className={classes.greetings}>Hi! My name is</p>
                        <p className={classes.name}>Dhruv Mittal<span style={{color:"#98ff98"}}>.</span></p>
                        <p style={{fontSize: typedFontSize}}>
                            {typedFontPrefix} <span><Typed 
                                strings={["Android Developer", "Flutter Developer", "Web Developer"]} 
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                                style={{color:"#98ff98"}}
                            /></span>
                        </p>
                        <div className={classes.bio}>
                        <p>I am an international student studying computer science
                                at the <span style={{color:"#98ff98"}}>University of Waterloo.</span> You can scroll down to see some of the 
                                projects I have worked on or click to find my <a href = {Resume} target = "_blank" rel="noopener noreferrer"><span style={{color:"#98ff98"}}>resume</span></a> here.</p>  
                        </div>
                        <button 
                            className={classes.contactMe}
                            onClick={this.props.clicked}>Get In Touch</button>  
                    </div>
                </div> 
            </div>
            
        );
    }
};

export default Header;