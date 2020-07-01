import React from 'react';
import classes from './FlutterBootcamp.module.css';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/FlutterBootcamp.png';
import Certificate from '../../../res/FlutterBootcamp.pdf';

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

const FlutterBootcamp = () => {

    const technologies = ["Flutter", "Provider", "Firebase", "HTTP"];

    const materialClasses = useStyles();

    return (
        <section className={classes.FlutterBootcamp}>
            <div className={classes.Content1}>
                <img src={Picture} alt="WebUX Course"/>
            </div>
            <div className={classes.Content2}>
                <h1>Flutter 2020 Bootcamp</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>
                <br/>
                <p>Udemy's Flutter course created in collaboration with the Google Flutter team.</p>
                <br/>
                <Button 
                    className={materialClasses.SourceCodeButton}
                    variant="contained"
                    color="#341234"
                    endIcon={<LaunchIcon/>}
                    target = "_blank"
                    href = {Certificate}>    
                    Certification
                </Button>
            </div>
        </section>
    );
};

export default FlutterBootcamp;