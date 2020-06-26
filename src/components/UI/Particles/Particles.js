import Particles from 'react-particles-js';
import React from 'react';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
    particlesCanva:{
        position: "absolute",
        opacity: "0.3",
    }
});

const CustomParticles = () => {

    const classes = useStyles();

    return(
        <Particles 
            canvasClassName={classes.particlesCanva}
            params={{
                particles:{
                    number:{
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    size: {
                        value: 3,
                    },
                },
                interactivity:{
                    events:{
                        onHover:{
                            enable: true,
                            mode: "repulse"
                        }
                    }
                },
        }}/>
    )
}

export default CustomParticles;