import React from 'react';
import classes from './Courses.module.css';
import Footer from '../../components/Footer/Footer';
import FlutterBootcamp from './FlutterBootcamp/FlutterBootcamp';
import ReactCompleteGuide from './ReactCompleteGuide/ReactCompleteGuide';
import CSSEssentials from './CSSEssentials/CSSEssentials';
import WebUX from './WebUX/WebUX';
import MERNGuide from './MERN/MERN';

const Courses = () => {

    return (
        <>
            <section className={classes.Courses}>
                <h1 className={classes.title}>Courses</h1>
                <MERNGuide/>
                <FlutterBootcamp/>
                <ReactCompleteGuide/>
                <CSSEssentials/>
                <WebUX/>
            </section>
            <Footer/>
        </>
    );
};

export default Courses;