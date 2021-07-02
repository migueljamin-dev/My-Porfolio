import React from 'react';
import CustomTimeline,{CustomTimelineSeparator} from '../../components/Timeline/timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Grid from '@material-ui/core/Grid';

import resumeData from '../../utils/resumeData';
import './resume.css';
import { Icon, Typography,Paper } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Resume = () => {
    return (    
        <>
        {/* About */}
        <Grid container className='section pb-45'>
               <Grid item className='section-title mb-30' >
                    <span></span>
                  <h6 className='section-title-text'>About Me </h6>
               </Grid>
               <Grid item xs={12}>
                    <Typography className='aboutme-text'>
                         {resumeData.about}
                    </Typography>
               </Grid>
        </Grid>

             {/* Exp and Educations */}
        <Grid container className='section pb-45'>
                    <Grid item className='section-title mb-30' >
                         <span></span>
                          <h6 className='section-title-text'>Resume</h6>
                    </Grid>

               <Grid item xs={12} >        
                    <Grid container className='resumeTimeline' direction='row'>

                         {/* Working History */}
                         <Grid item sm={12} md={6} style={{color:'green'}}>
                              <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                                   {resumeData.experince.map(exp => (
                                        <TimelineItem>
                                             <CustomTimelineSeparator />
                                             <TimelineContent className='timeline-content'>
                                        <Typography className='timeline-title'>{exp.title}</Typography>
                                        <Typography variant='caption' className='timeline-date'>{exp.date}</Typography>
                                        <Typography variant='body2' className='timeline-description'>{exp.description}</Typography>
                                        </TimelineContent>
                                        </TimelineItem>
                                   ))}
                              </CustomTimeline>
                         </Grid>

                         {/* education */}
                         <Grid item sm={12} md={6} style={{color:'green'}}>
                         <CustomTimeline title='Work Experience' icon={<SchoolIcon />}>
                                   {resumeData.education.map(educ => (
                                        <TimelineItem>
                                            <CustomTimelineSeparator />
                                             <TimelineContent className='timeline-content'>
                                        <Typography className='timeline-title'>{educ.title}</Typography>
                                        <Typography variant='caption' className='timeline-date'>{educ.date}</Typography>
                                        <Typography variant='body2' className='timeline-description'>{educ.description}</Typography>
                                        </TimelineContent>
                                        </TimelineItem>
                                   ))}
                              </CustomTimeline>
                         </Grid>
                    </Grid>
                </Grid>  
        </Grid>



             {/* Services */}
        <Grid container className='section pb-45'>
               <Grid item className='section-title mb-30' >
                         <span></span>
                          <h6 className='section-title-text'>My Services</h6>
               </Grid>

                    <Grid item xs={12} >
                         <Grid container justify='space-around'>
                              {resumeData.services.map(service => (
                                   <Grid item xs={12} sm={6} md={3}>
                                        <div className='service'>
                                            
                                             <Icon className='service-icon'>{service.icon}</Icon>
                                             <Typography className='service-title'>{service.title}</Typography>
                                             <Typography className='service-description' variant='body2'>{service.description}</Typography>
                                        </div>
                                   </Grid>
                              ))}
                         </Grid>
                    </Grid>
        </Grid>
            
             {/* Skills */}
             <Grid container className='section graybg pb-45' spacing={3} justify='space-between'>
                   {resumeData.skills.map(skill => (
                        <Grid item xs={6} md={3}>
                              <Paper elavation={0} className='skill'>
                                   <Typography variant='h6' className='skill-title'>
                                        {skill.title}
                                   </Typography>
                                   {skill.description.map(element => (
                                        <Typography variant='body2' className='skill-description'>
                                             <TimelineDot variant={'outlined'} className='timeline-dot' />
                                                  {element}
                                                  
                                        </Typography>
                                   ))}
                              </Paper>
                        </Grid>
                   ))}                
            </Grid>
                 {/* Contact */}
        <Grid container className='section'>
            
            </Grid>
        </>
      );
}
 
export default Resume;