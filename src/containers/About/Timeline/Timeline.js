import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FlightIcon from '@material-ui/icons/Flight';
import HomeIcon from '@material-ui/icons/Home';

const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Aug. 2019"
                iconStyle={{ background: 'rgb(15, 114, 223)', color: '#fff' }}
                icon={<SchoolIcon/>}
            >
                <h1 className="vertical-timeline-element-title">University Of Waterloo</h1>
                <h3 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>Waterloo, Canada</h3>
                <p>
                Joined the University of Waterloo's Computer Science class of 2024.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="June 2019"
                iconStyle={{ background: 'rgb(15, 114, 223)', color: '#fff' }}
                icon={<VerifiedUserIcon />}
            >
                <h1 className="vertical-timeline-element-title">International Baccalaureate</h1>
                <h3 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>Bangkok, Thailand</h3>
                <p>
                    Completed the IB certification for my final year of high school at Bangkok Patana School.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Aug. 2017"
                iconStyle={{ background: 'rgb(15, 114, 223)', color: '#fff'}}
                icon={<FlightIcon />}
            >
                <h1 className="vertical-timeline-element-title">Moved to Thailand</h1>
                <h3 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>Bangkok, Thailand</h3>
                <p>
                    Left Singapore for Thailand. Started my IB diploma at Bangkok Patana School.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="June 2017"
                iconStyle={{ background: 'rgb(15, 114, 223)', color: '#fff'}}
                icon={<VerifiedUserIcon />}
            >
                <h1 className="vertical-timeline-element-title">IGCSE</h1>
                <h3 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>Singapore</h3>
                <p>
                    Completed my General Certification of Secondary Education.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Sept. 2015 - June 2017"
                iconStyle={{ background: 'rgb(15, 114, 223)', color: '#fff'}}
                icon={<FlightIcon />}
            >
                <h1 className="vertical-timeline-element-title">Moved to Singapore</h1>
                <h3 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>Singapore</h3>
                <p>
                    Moved from Shanghai to Singapore. Started my high schooling in the United World College Dover, Singapore. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Aug. 2007 - June 2015"
                iconStyle={{ background: 'rgb(15, 114, 223)', color: '#fff'}}
                icon={<FlightIcon/>}
            >
                <h1 className="vertical-timeline-element-title">Moved to Shanghai</h1>
                <h3 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>Shanghai, China</h3>
                <p>
                    Moved from Delhi to Shanghai. Started my middle schooling in the Nord Anglia International School. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Nov. 2000 - Aug. 2007"
                iconStyle={{ background: 'rgb(15, 114, 223)', color: '#fff'}}
                icon={<HomeIcon/>}
            >
                <h1 className="vertical-timeline-element-title">Lived in India</h1>
                <h3 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>Delhi, India</h3>
                <p>
                    Born in India, I lived there for the for the first 7 years of my life.
                </p>
            </VerticalTimelineElement>

        </VerticalTimeline>
    );
};

export default Timeline;