import React from 'react';
import {Typography} from '@material-ui/core';
import resumeData from '../../utils/resumeData'
import './footer.css';


const Footer = () => {
    return (    
        <div className='footer'>
         <div className="footer-left">
            <Typography className="footer-name">{resumeData.name}</Typography>
         </div>
         <div className="footer-right">
            <Typography className="footer-copyright">
                Design and Developed -<a href="/" target='_blank'> Miguel Jamin</a> 
                <br/>
                Clone idea from <a href="https://themeforest.net/user/tavoline" target='_blank'>Travoline</a>
            </Typography>
         </div>
        </div>
      );
}
 
export default Footer;