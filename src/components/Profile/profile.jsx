import { Typography } from '@material-ui/core';
import CustomTimeline,{CustomTimelineSeparator} from '../Timeline/timeline';
import PersonalIcon from '@material-ui/icons/Person';
import Pimage from '../../assets/images/Pimage.jpg';
import React from 'react';

import resumeData from '../../utils/resumeData'

import './profile.css';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from "../Button/button";
import GetAppIcon from '@material-ui/icons/GetApp'

const CustomTimelineItem = ({title,text,link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline-content'>
            { link ? (<Typography className='timelineItem-text'>
                <span>{title}:</span> <a href={link} target='_blank'>{text}</a>
            </Typography>) : (
                <Typography className='timelineItem-text'>
                <span>{title}:</span>{text}
            </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (    
        <div className="profile container-shadow ">
           <div className='profile-name'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
           </div>
           <figure className='profile-image'>
               <img src={Pimage} alt="" />
           </figure>

            <div className="profile-information">
                <CustomTimeline icon={<PersonalIcon />}>
                    <CustomTimelineItem title={'Name'} text={resumeData.name}/>
                    <CustomTimelineItem title={'Title'} text={resumeData.title}/>

                    {Object.keys(resumeData.social).map(key => (
                        <CustomTimelineItem title={key} text={resumeData.social[key].text} link={resumeData.social[key].link}/>
                    ))}
                   
                </CustomTimeline>

                <br/>
                <div className='button-container'>
               <CustomButton text={'Download CV'} icon={<GetAppIcon />}/>
               </div>
            </div>
        </div>
      );
}
 
export default Profile;