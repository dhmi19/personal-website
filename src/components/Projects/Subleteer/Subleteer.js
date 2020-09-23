import React from 'react';
import classes from './Subleteer.module.css';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/Subleteer.png';
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

const Subleteer = () => {

    const technologies = ["MongoDB", "ExpressJS", "NodeJS", "ReactJS"];

    const materialClasses = useStyles();

    return (
        <section className={classes.Subleteer}>
            <div className={classes.Content1}>
                <img src={Picture} alt="Subleteer"/>
            </div>
            <div className={classes.Content2}>
                <h1>Subleteer</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>
                <br/>
                <p>Subleteer is a platform for finding your ideal sublet quickly. 
                    The web app connects students looking to sublet their apartment with buyers. 
                    Users can sort listings by address and numerous other criteria.</p>
                <br/>
                <Button 
                    className={materialClasses.SourceCodeButton} 
                    variant="contained" color="#341234" 
                    endIcon={<GitHubIcon/>}
                    target="_blank" href="https://github.com/dotWaterlooProjects/subleteer"
                    >
                        Code
                </Button>

                <Button 
                    className={materialClasses.SourceCodeButton} 
                    variant="contained" color="#341234" 
                    endIcon={<LaunchIcon/>}
                    target="_blank" href="https://devpost.com/software/subleteer"
                    >
                        Case Study
                </Button>
                
            </div>
        </section>
    );
};

export default Subleteer;