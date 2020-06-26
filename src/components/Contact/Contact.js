import React from 'react';
import classes from './Contact.module.css';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    Email: {
      padding: theme.spacing.unit*2,
      background: '#F8F8F8',
      margin: 10,
      color: 'black',
      '&:hover': {
        background: "#98ff98",
       },
    },
    LinkedIn: {
        padding: theme.spacing.unit*2,
        background: '#007BB6',
        margin: 10,
        '&:hover': {
            background: "#98ff98",
        },
    },
    GitHub: {
        padding: theme.spacing.unit*2,
        background: '#666',
        margin: 10,
        '&:hover': {
            background: "#98ff98",
        },
    },
  });

const Contact = (props) => {
    return (
    
        <section className={classes.Contact}>
            <h1 className={classes.Title}>Say Hello!</h1>
            <h3 className={classes.Subtitle}>I would love to talk to you about anything, from tech to football.
            I am also available for internship and co-op opportunities.</h3>

            <div className={classes.ContactMethods}>
                <Button 
                    variant="contained"
                    startIcon={<EmailIcon style={{ fontSize: 25 }}/>}
                    style={{
                        maxWidth: '25%',
                        maxHeight: '25%',
                        minWidth: '25%',
                        minHeight: '25%',
                        fontSize:"1em",
                        border: "1px solid white",
                        color: "black",
                        borderRadius: 15
                    }}
                    className={props.classes.Email}
                    color="primary"
                >d2mittal@uwaterloo.ca</Button>
                <Button 
                    variant="contained"
                    startIcon={<LinkedInIcon style={{ fontSize: 25 }}/>}
                    className={props.classes.LinkedIn}
                    style={{
                        maxWidth: '25%',
                        maxHeight: '25%',
                        minWidth: '25%',
                        minHeight: '25%',
                        fontSize:"1em",
                        border: "1px solid white",
                        color: "black",
                        borderRadius: 15
                    }}
                    target="_blank" 
                    href="https://www.linkedin.com/in/dhruv-mittal-1607a019b/"
                    >Dhruv Mittal</Button>
                <Button 
                    variant="contained"
                    startIcon={<GitHubIcon style={{ fontSize: 25 }}/>}
                    className={props.classes.GitHub}
                    style={{
                        maxWidth: '25%',
                        maxHeight: '25%',
                        minWidth: '25%',
                        minHeight: '25%',
                        fontSize:"1em",
                        border: "1px solid white",
                        color: "black",
                        borderRadius: 15
                    }}
                    target="_blank" 
                    href="https://github.com/dhmi19"
                >dhmi19</Button>
            </div>
        </section>
    );
};

export default  withStyles(styles)(Contact);