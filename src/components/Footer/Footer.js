import React from 'react';
import classes from './Footer.module.css';
import Typed from 'react-typed';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <p>Made by Dhruv Mittal, with love.</p>
            <br/>
            <Typed 
                strings={[
                    "Thank you for visiting",
                    "आने के लिए धन्यवाद",
                    "谢谢浏览",
                    "Merci pour votre visite",
                    "ขอบคุณสำหรับการเยี่ยมชม",
                ]} 
                typeSpeed={40}
                backDelay={3000}
                backSpeed={60}
                loop
                style={{color:"white", textAlign:"center", display:"block"}}
            />
        </footer>
    );
};

export default Footer;