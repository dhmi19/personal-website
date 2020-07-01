import React from 'react';
import classes from './CSSEssentials.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../../images/CSSEssentials.png';
import LaunchIcon from '@material-ui/icons/Launch';
import Certificate from '../../../res/CSSEssentialTraining.pdf';

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

const CSSEssentials = () => {

    const technologies = ["Flex & Grid", "Advanced Selectors", "Responsive Layouts"];

    const materialClasses = useStyles();

    return (
        <section className={classes.CSSEssentials}>
            <div className={classes.Content1}>
                <img src={Picture} alt="CSS Essential Training Course"/>
            </div>
            <div className={classes.Content2}>
                <h1>CSS Essential Training</h1>
                <div className={classes.Technologies}>
                    {technologies.map(technology => (
                        <div className={classes.Technology} key={technology}>{technology}</div>
                    ))}
                </div>
                <br/>
                <p>A LinkedIn Learning crash course covering a full range of CSS topics.</p>
                <br/>
                <Button 
                    className={materialClasses.SourceCodeButton}
                    variant="contained"
                    color="#341234"
                    endIcon={<LaunchIcon/>}
                    href = {Certificate}
                    target = "_blank">
                    Certification
                </Button>
            </div>
        </section>
    );
};

export default CSSEssentials;