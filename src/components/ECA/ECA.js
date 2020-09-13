import React from 'react';
import classes from './ECA.module.css';

import Activity from './Activity/Activity';
import STOP from '../../images/STOP.png';
import PDB from '../../images/PDB.png';

const ECA = () => {
    return (
        <div className={classes.ECA}>
            <h1>Extra Curriculars</h1>
            <div className={classes.Activities}>
                <Activity
                    position="Co-President"
                    title="STOP Trafficking Of People"
                    image={STOP}
                    description="A service club that helps fight human trafficking in Thailand by raising funds for our partnered NGO- A21."
                />
                <Activity
                    position="Co-Founder"
                    title="Patana Development Bank"
                    image={PDB}
                    description="A service project which provides micro-finance loans to underpriviledged families in South East Asia."
                />
                <Activity
                    position="Founder and Lead Organiser"
                    title="Patana Development Bank: Techathon"
                    image={PDB}
                    description="Organised the school's first inter-school charity hackathon which saw participants range from primary to high school. Raised over 50,000 Bhat for charity."
                />
            </div>
        </div>
    );
};

export default ECA;