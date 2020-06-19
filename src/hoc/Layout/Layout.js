import React from 'react';
import Aux from '../Aux';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Particles from 'react-particles-js';
import{makeStyles} from '@material-ui/core/styles'

//CSS Styles
const useStyles = makeStyles({
    particlesCanva:{
        position: "absolute",
        opacity: "0.3"
    }
});

const Layout = () => {

    const classes = useStyles();

    return (
        <Aux>
            <NavBar />
            <Header />
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
                    }
                }}/>
        </Aux>
    );
}

export default Layout;