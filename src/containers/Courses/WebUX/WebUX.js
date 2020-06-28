import React from 'react';
import classes from './WebUX.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/WebUX.png';
import LaunchIcon from '@material-ui/icons/Launch';

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

const WebUX = () => {

    const technologies = ["Layout", "Forms", "Graphics"];

    const materialClasses = useStyles();

    return (
        <section className={classes.WebUX}>
            <div className={classes.Content1}>
                <h1>User Experience for Web Design</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>
                <br/>
                <p>A LinkedIn Learning course on how to build user-friendly websites with a great user experience.</p>
                <br/>
                <Button 
                    className={materialClasses.SourceCodeButton}
                    variant="contained"
                    color="#341234"
                    endIcon={<LaunchIcon/>}
                    target="_blank" href="" //TODO: Insert certificate link here
                >
                    Certification
                </Button>
            </div>
            <div className={classes.Content2}>
                <img src={Picture} alt="WebUX Course"/>
            </div>
        </section>
    );
};

export default WebUX;