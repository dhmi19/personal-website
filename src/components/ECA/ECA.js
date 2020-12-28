import React from 'react';
import classes from './ECA.module.css';

import Activity from './Activity/Activity';
import STOP from '../../images/STOP.png';
import PDB from '../../images/PDB.png';
import TechPlus from '../../images/TechPlus.png';
import Watlock from '../../images/Watlock.png';

const ECA = () => {
    return (
        <div className={classes.ECA}>
            <h1>Extra Curriculars</h1>
            <div className={classes.Activities}>
                <Activity
                    position="Logistics Organiser"
                    title="Tech+ UW"
                    image={TechPlus}
                    description="As a logistics organiser, I was responsible for event planning, outreach, and marketing of the mentorship program, coffee chats, and community events"
                />
                <Activity
                    position="Business Member"
                    title="Watlock"
                    image={Watlock}
                    description="Watlock is determined to desing an airlock that works on Mars. I helped pitch funding proposals to numerous endowment funds to raise over $7000 for the club "
                />
                <Activity
                    position="Co-President"
                    title="STOP Trafficking Of People"
                    image={STOP}
                    description="I was responsible for running the whole club, which helps fight human trafficking in Thailand by raising funds for our partnered NGO- A21."
                />
                <Activity
                    position="Co-Founder"
                    title="Patana Development Bank"
                    image={PDB}
                    description="I co-founded a service project which provides micro-finance loans to underpriviledged families in South East Asia."
                />
                <Activity
                    position="Lead Organiser"
                    title="Patana Development Bank Techathon"
                    image={PDB}
                    description="Organised the school's first inter-school charity hackathon which saw participants range from primary to high school. Raised over 50,000 Bhat for charity."
                />
            </div>
        </div>
    );
};

export default ECA;