import React from 'react';
import classes from './Courses.module.css';
import Footer from '../../components/Footer/Footer';

import CoursesOnline from '../../components/CoursesOnline/CoursesOnline';
import CoursesUniversity from '../../components/CoursesUniversity/CoursesUniversity';

import Coursera from '../../images/Coursera.png';
import Udemy from '../../images/Udemy.png';
import Waterloo from '../../images/Waterloo.png';

import NNAndDeepLearningCoursera from '../../res/Neural Networks and Deep Learning.pdf'
import MERNCertificate from '../../res/The MERN Fullstack Guide.pdf';
import ReactCertificate from '../../res/React-The Complete Guide Certificate.pdf';
import FlutterCertificate from '../../res/FlutterBootcamp.pdf';

const Courses = () => {

    return (
        <div style={{backgroundColor:"#121211"}}>
            <h1 className={classes.title}>Online Certifications</h1>
            <section className={classes.Courses}>
                <CoursesOnline 
                    company = "Coursera"
                    image = {Coursera}
                    title = "Neural Networks and Deep Learning"
                    description = "A 20 hour introductory course as part of the Deep Learning Specialisation on Coursera."
                    topics = {["Binary Classification", "Deep Neural Networks"]}
                    link = {NNAndDeepLearningCoursera}
                />
                <CoursesOnline 
                    company = "Udemy"
                    image = {Udemy}
                    title = "The MERN Fullstack Guide"
                    description = "A wholistic 19 hour Udemy fullstack course covering React, Express, NodeJS, and MongoDB."
                    topics = {["MongoDB", "Express", "React", "NodeJS"]}
                    link = {MERNCertificate}
                />
                <CoursesOnline 
                    company = "Udemy"
                    image = {Udemy}
                    title = "React- The Complete Guide"
                    description = "An extensive 40.5 hour Udemy course on React, Redux, and Hooks."
                    topics = {["React", "Redux", "Routing", "Hooks"]}
                    link = {ReactCertificate}
                />
                <CoursesOnline 
                    company = "Udemy"
                    image = {Udemy}
                    title = "Flutter 2020 Bootcamp"
                    description = "Udemy's Flutter course created in collaboration with the Google Flutter team."
                    topics = {["Flutter", "Provider", "Firebase", "HTTP"]}
                    link = {FlutterCertificate}
                />
            </section>

            <h1 className={classes.title}>Relevant University Courses</h1>
            <section className={classes.Courses}>
                <CoursesUniversity 
                    company = "Waterloo"
                    image = {Waterloo}
                    title = "CS 135: Designing Functional Programs"
                    description = "An introduction to the fundamentals of computer science in the functional style of programming in Racket."
                    grade = "91%"
                    link = "https://uwflow.com/course/cs135"
                />
                <CoursesUniversity 
                    company = "Waterloo"
                    image = {Waterloo}
                    title = "MATH 136: Linear Algebra 1"
                    description = "Covers systems of linear equations, matrix algebra, elementary matrices, computational issues."
                    grade = "87%"
                    link = "https://uwflow.com/course/math136"
                />
                <CoursesUniversity 
                    company = "Waterloo"
                    image = {Waterloo}
                    title = "CS 136: Algorithm Design and Data Abstraction"
                    description = "An introduction to the design and analysis of algorithms with imperitive programming using C."
                    grade = "79%"
                    link = "https://uwflow.com/course/cs136"
                />
                <CoursesUniversity 
                    company = "Waterloo"
                    image = {Waterloo}
                    title = "STAT 230: Probability"
                    description = "Covers conditional probability, named distributions, marginal probability functions, The Central Limit Theorem, and more."
                    grade = "95%"
                    link = "https://uwflow.com/course/stat230"
                />
            </section>
            <Footer/>
        </div>
    );
};

export default Courses;