import React from 'react';
import classes from './ReactCompleteGuide.module.css';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/React.png';
import Certificate from '../../../res/React-The Complete Guide Certificate.pdf';

//CSS Styles
const useStyles = makeStyles((theme) => ({
    SourceCodeButton: {
      marginRight: theme.spacing(1),
      padding: 15,
      borderRadius: 5,
      '&:hover': {
        backgroundColor: "#98ff98",
       }
    },
  }));

const ReactCompleteGuide = () => {

    const technologies = ["React", "Redux", "Routing", "Hooks"];

    const materialClasses = useStyles();

    return (
        <section className={classes.ReactCompleteGuide}>
            <div className={classes.Content1}>
                <h1>React- The Complete Guide</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>c
                <br/>
                <p>An extensive 40.5 hour Udemy course on React, Redux, and Hooks.</p>
                <br/>
                <Button 
                    className={materialClasses.SourceCodeButton}
                    variant="contained"
                    color="#341234"
                    endIcon={<LaunchIcon/>}
                    target="_blank" href={Certificate}>
                        Certification
                </Button>
                
            </div>
            <div className={classes.Content2}>
                <img src={Picture} alt="WebUX Course"/>
            </div>
        </section>
    );
};

export default ReactCompleteGuide;