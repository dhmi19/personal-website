import React from 'react';
import classes from './Courses.module.css';
import UdemyLogo from '../../images/UdemyLogo.png';

const Courses = () => {

    const courses = [
        {
            name: "The Complete 2020 Flutter Development Bootcamp",

        },
    ]

    return (
        <section className={classes.Courses}>
            <h1>Courses</h1>
            <div className={classes.Content}>
                <div className={classes.Course}>
                    <div className={classes.CourseInterior}>
                        <h4>Flutter 2020 Bootcamp</h4>
                        <h5>Udemy's Flutter course created in collaboration with the Google Flutter team.</h5>
                        <p>Flutter</p>
                        <p>Provider</p>
                        <p>Firebase</p>
                        <p>HTTP</p>
                    </div>
                </div>
                <div className={classes.Course}>
                    <div className={classes.CourseInterior}>
                        <h4>React- The Complete Guide</h4>
                        <h5>An extensive 40.5 hour Udemy course on React, Redux, and Hooks.</h5>
                        <p>Redux</p>
                        <p>Routing</p>
                        <p>Animations</p>
                        <p>HTTP</p>
                    </div>
                </div>
                <div className={classes.Course}>
                    <div className={classes.CourseInterior}>
                        <h4>CSS Essential Training</h4>
                        <h5>A LinkedIn Learning crash course covering a full range of CSS topics.</h5>
                        <p>Flex</p>
                        <p>Advanced Selectors</p>
                        <p>Responsive Layouts</p>
                    </div>
                </div>
                <div className={classes.Course}>
                    <div className={classes.CourseInterior}>
                        <h4>User Experience for Web Design</h4>
                        <h5>A LinkedIn Learning course on how to build user-friendly websites with a great user experience.</h5>
                        <p>Flex</p>
                        <p>Advanced Selectors</p>
                        <p>Responsive Layouts</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;