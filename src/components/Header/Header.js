import React, {Component} from 'react';
import Typed from 'react-typed';
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
                <div className={classes.Header}>
                    <div className={classes.title}>
                        <p className={classes.greetings}>Hi! I'm</p>
                        <p className={classes.name}>Dhruv Mittal<span style={{color:"#98ff98"}}>.</span></p>
                        <p style={{fontSize: typedFontSize}}>
                            {typedFontPrefix} <span><Typed 
                                strings={["Flutter Developer", "Web Developer", "Home Cook", "Football Enthusiast", "Traveller"]} 
                                typeSpeed={50}
                                backSpeed={60}
                                loop
                                style={{color:"#98ff98"}}
                            /></span>
                        </p>
                        <div className={classes.bio}>
                        <p>I am an international student studying <span style={{color:"#98ff98"}}>computer science</span>
                                at the <span style={{color:"#98ff98"}}>University of Waterloo.</span> You can scroll down to learn more 
                                about me or click to find my <a href = {Resume} target = "_blank" rel="noopener noreferrer"><span style={{color:"#98ff98", textDecoration:"underline"}}>resume</span></a> here.</p>  
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