import React from 'react';
import classes from './UWScheduler.module.css';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/UWScheduler.png';

//CSS Styles
const useStyles = makeStyles((theme) => ({
    SourceCodeButton: {
      marginRight: theme.spacing(1),
      padding: 15,
      borderRadius: 5
    },
  }));

const UWScheduler = () => {

    const technologies = ["Flask", "JavaScript", "HTML5", "CSS3"];

    const materialClasses = useStyles();

    return (
        <section className={classes.UWScheduler}>
            <div className={classes.Content1}>
                <img src={Picture} alt="ApartmentApp"/>
            </div>
            <div className={classes.Content2}>
                <h1>UWScheduler</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>
                <br/>
                <p>UWScheduler is a web application which allows students to optimise their schedule around the most reputed professors with no timing clashes.</p>
                <br/>
                <Button 
                    className={materialClasses.SourceCodeButton}
                    variant="contained"
                    color="#341234"
                    endIcon={<GitHubIcon/>}
                    target="_blank" 
                    href="https://github.com/dhmi19/UWScheduler">
                        Code
                </Button>
                
            </div>
        </section>
    );
};

export default UWScheduler;