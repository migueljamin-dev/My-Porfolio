import React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {Tabs,Tab,CardActionArea,CardContent,Typography,Grow,CardMedia,Dialog,DialogTitle,DialogContent,DialogActions} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import './portfolio.css';
import { Card } from 'react-bootstrap';




const Portfolio = () => {
    const [tabValue,setTabValue] = useState("All");
    const [projectDialog,setProjectDialog] = useState(false);



    return (    
        <Grid container className='section pb-45'>
            {/* {Title} */}
            <Grid item className='section-title mb-30' >
                <span></span>
                <h6 className='section-title-text'>Portfolio</h6>
            </Grid>

            {/* { Tabs } */}
            <Grid item xs={12}>

                <Tabs value={tabValue}  className='customTabs mb-2' onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label='All' value='All' className={tabValue === 'All' ? 'customTabs-item active' :'customTabs-item'} />
                    {[...new Set(resumeData.projects.map(item => item.tag ))].map(
                        tag => (
                            <Tab key={tag} 
                                label={tag}
                                value={tag}
                                className={
                                    tabValue === tag  ? 'customTabs-item active' :'customTabs-item' 
                                }
                            />
                        )
                    )}
                </Tabs>
            </Grid>
                
            {/* {Projecs} */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {resumeData.projects.map(project => (
                        <>
                           {tabValue === project.tag || tabValue === 'All' ? (
                                <Grid item key={project} xs={12} sm={6} md={4}>
                                <Grow in timeout={1000}>
                                    <Card className='customCard' onClick={() => setProjectDialog(project)}>
                                        <CardActionArea>
                                            <CardMedia className='customCard-image' image={project.image} title={project.title}/>
                                            <CardContent>
                                                <Typography className='customCard-title'>{project.title}</Typography>
                                                <Typography variant='body2' className='customCard-caption'>{project.caption}</Typography>
                                            </CardContent>  
                                        </CardActionArea>
                                    </Card>
                                </Grow>
                            </Grid>
                           ) : null} 
                        </>
                    ))}
                </Grid>
            </Grid>
            
            {/* Modals Dialog*/}
            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog'>
            <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
            <img src={projectDialog.image} alt="" className='projectDialog-image'/>
            <DialogContent>
            <Typography className='projectDialog-description'>{projectDialog.description}</Typography>
            </DialogContent>
            <DialogActions className='projectDialog-actions'>
                {projectDialog?.links?.map(link => (
                    <a href={link.link} target='_blank' className='projectDialog-icon'>
                        {link.icon}
                    </a>
                ))}
            </DialogActions>
        </Dialog>
        </Grid>
      );
}
 
export default Portfolio;