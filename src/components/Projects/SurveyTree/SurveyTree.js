import React from 'react';
import classes from './SurveyTree.module.css';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';


//CSS Styles
const useStyles = makeStyles((theme) => ({
    SourceCodeButton: {
      marginRight: theme.spacing(1),
      padding: 15,
      borderRadius: 5
    },
  }));

const SurveyTree = () => {

    const technologies = ["Flutter", "Firestore", "Android Studio"];

    const materialClasses = useStyles();

    return (
        <section className={classes.SurveyTree}>
            <div className={classes.Content1}>
                <h1>SurveyTree</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>
                <br/>
                <p>The Apartment App is a mobile application available on iOS and Android. 
                    The app makes living together easier by providing shared grocery lists, 
                    notes, and expense management.</p>
                <br/>
                <Button className={materialClasses.SourceCodeButton} variant="contained" color="#341234" endIcon={<GitHubIcon/>}>Code</Button>
                
            </div>
            <div className={classes.Content2}>
            </div>
        </section>
    );
};

export default SurveyTree;