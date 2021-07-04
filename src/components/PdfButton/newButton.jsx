import React from 'react';
import Button from '@material-ui/core/Button';

import Resume from '../../assets/resume.pdf';
import './button.css';

const NewCustomButton = ({text,icon}) => {
    return ( 
        <Button className='custom-btn'
         endIcon={icon ? (<div className='btn-icon-container'>{icon}</div>) : null}>
        {/* <span className='btn-text'></span> */}
        <a className='btn-text' href={Resume} download='Resume.pdf'>{text}</a>
        </Button>
     );
}
 
export default NewCustomButton;