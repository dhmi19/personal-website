import React from 'react';
import classes from './MealOfTheDay.module.css';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/MealOfTheDay.png';

//CSS Styles
const useStyles = makeStyles((theme) => ({
    SourceCodeButton: {
      marginRight: theme.spacing(1),
      padding: 15,
      borderRadius: 5
    },
  }));

const MealOfTheDay = () => {

    const technologies = ["React", "NodeJS", "Express", "Puppeteer"];

    const materialClasses = useStyles();

    return (
        <section className={classes.MealOfTheDay}>
            <div className={classes.Content1}>
                <h1>Meal of the Day</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>
                <br/>
                <p>Accounting for time, ingredient complexity, and health, 
                    Meal of the Day is the perfect recipe recommendation website for everyone.</p>
                <br/>
                <Button 
                    className={materialClasses.SourceCodeButton} 
                    variant="contained" 
                    color="#341234" 
                    endIcon={<GitHubIcon/>}
                    target="_blank" href="https://github.com/dhmi19/MealOfTheDay"
                    >
                        Code
                </Button>
                
            </div>
            <div className={classes.Content2}>
                <img src={Picture} alt="MealOfTheDay"/>
            </div>
        </section>
    );
};

export default MealOfTheDay;