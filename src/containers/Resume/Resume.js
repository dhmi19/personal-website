import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, } from '@material-ui/core';
import NavBar from '../../components/NavBar/NavBar';

const Resume = () => {
    return (
        <>
            <NavBar/>
            <Box component="header">
                <Typography variant="h4" align="center"> </Typography>
            </Box>
        </>
        
    );
};

export default Resume;