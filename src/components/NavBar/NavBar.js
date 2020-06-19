import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, Toolbar, ListItemIcon} from '@material-ui/core';
import { Menu, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';
import avatar from '../../images/avatar.png';
import Aux from '../../hoc/Aux';
import LeftMenuSlider from '@material-ui/core/Drawer';

//CSS Styles:
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%",
    },
    avatar: {
        display: "block",
        height: theme.spacing(13),
        width: theme.spacing(13),
        margin: "0.5rem auto"
    },
    listItem:{
        color: "tan",

    }
}));


const menuItems = [
    { listIcon: <Home/>, listText: "Home"},
    { listIcon: <AssignmentInd/>, listText: "Resume"},
    { listIcon: <Apps/>, listText: "Portfolio"},
    { listIcon: <ContactMail/>, listText: "Contact Me"},
]

const NavBar = () => {

    const [state, setState] = useState({
        left: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    };
 
    const classes = useStyles();

    const sideList = slider => (
        <Box 
            component="div" 
            className={classes.menuSliderContainer}
            onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Dhruv Mittal"/>
            <Divider/>
            <List>
                {menuItems.map((menuItem, index) => (
                    <ListItem button key= {index}>
                        <ListItemIcon className={classes.listItem}>
                            {menuItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={menuItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    ); 

    return (
        <Aux>
            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("left", true)}>
                            <Menu style={{color:"#FFF"}}/>
                        </IconButton>
                        <Typography variant="h5" >Dhruv Mittal</Typography>
                        <LeftMenuSlider 
                            anchor='left' 
                            open={state.left}
                            onClose={toggleSlider("left", false)}>
                            {sideList("left")}
                        </LeftMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </Aux>
        
    );
};

export default NavBar;