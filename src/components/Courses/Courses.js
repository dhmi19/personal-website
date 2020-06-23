import React from 'react';
import classes from './Courses.module.css';

const Courses = () => {

    const courses = [
        {
            name: "The Complete 2020 Flutter Development Bootcamp",

        },
    ]

    return (
        <section className={classes.Courses}>
            <h1>Relevant Courses</h1>
            <div className={classes.Content}>
                <div className={classes.Course}>
                    <div className={classes.CourseInterior}>
                        <h4>Flutter 2020 Bootcamp</h4>
                        <h5>Udemy's Flutter course created in collaboration with the Google Flutter team.</h5>
                    </div>
                </div>
                <div className={classes.Course}>
                    <div className={classes.CourseInterior}>
                        <h4>React- The Complete Guide</h4>
                        <h5>An extensive 40.5 hour Udemy course on React, Redux, and Hooks.</h5>
                    </div>
                </div>
                <div className={classes.Course}>

                </div>
            </div>
        </section>
    );
};

export default Courses;