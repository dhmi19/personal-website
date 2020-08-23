import React from 'react';
import classes from './MERN.module.css';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/The MERN Fullstack Guide.png';
import Certificate from '../../../res/The MERN Fullstack Guide.pdf';

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

const MERNCourse = () => {

    const technologies = ["React", "Redux", "Routing", "Hooks"];

    const materialClasses = useStyles();

    return (
        <section className={classes.ReactCompleteGuide}>
            <div className={classes.Content1}>
                <h1>The MERN Fullstack Guide</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>c
                <br/>
                <p>A wholistic 19 hour Udemy fullstack course covering React, Express, NodeJS, and MongoDB.</p>
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

export default MERNCourse;