import React from 'react';
import classes from './Constructor.module.css';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/Constructor.png';
import LaunchIcon from '@material-ui/icons/Launch';

//CSS Styles
const useStyles = makeStyles((theme) => ({
    SourceCodeButton: {
      marginRight: theme.spacing(1),
      padding: 15,
      borderRadius: 5,
      marginBottom: theme.spacing(1)
    },
    CaseStudyButton: {
        marginRight: theme.spacing(1),
        padding: 15,
        borderRadius: 5,
        marginBottom: theme.spacing(1)
    }
}));

const SurveyTree = () => {

    const technologies = ["C++", "RAII Principles", "Graphs", "MVC design pattern"];

    const materialClasses = useStyles();

    return (
        <section className={classes.SurveyTree}>
            <div className={classes.Content1}>
                <h1>Constructor</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>
                <br/>
                <p>Constructor is a board game inspired by the "Settlers of Catan". 
                    I built this game in a group of 3 for my CS246 final project using C++.</p>
                <br/>
                <Button 
                    className={materialClasses.SourceCodeButton} 
                    variant="contained" 
                    color="#341234" 
                    endIcon={<GitHubIcon/>}
                    target="_blank" href="https://youtu.be/3wkosa6_bWs"
                    >
                        Demo
                </Button>
                <Button
                    className={materialClasses.CaseStudyButton}
                    variant="contained"
                    color="red"
                    endIcon={<LaunchIcon/>}
                    target="_blank" href="https://devpost.com/software/constructor"
                    >
                        Case Study
                </Button>
            </div>
            <div className={classes.Content2}>
                <img src={Picture} alt="Constructor"/>
            </div>
        </section>
    );
};

export default SurveyTree;