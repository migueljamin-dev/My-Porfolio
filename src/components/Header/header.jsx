import React from 'react';
import {Button,Form,FormControl,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

 import {Telegram,SchoolRounded,GitHub,LinkedIn,Facebook,WorkRounded,HomeRounded} from '@material-ui/icons';

import {NavLink,Link,withRouter} from 'react-router-dom';


import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/button'

import './header.css'

const Header = (props) => {

    const pathName = props?.location?.pathname;
   
    {console.log(pathName)}

    return (    
        <Navbar  expand="lg" sticky='top' className='header'>
            <Nav.Link as= {NavLink} to='/' className={'p-0 m-0'}>
                <Navbar.Brand className='header-home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
          
                <Nav className='header-left'>
                     {/* resume link */}
                    <Nav.Link as={NavLink} to='/'
                     className={(pathName == '/') ? 'header-link-active' : 'header-link'}>
                        Resume
                    </Nav.Link>
          
                  {/* portfolio link */}
                 
                    <Nav.Link 
                    as={NavLink} 
                    to='/portfolio' 
                    className= {
                        (pathName == '/portfolio') ? 'header-link-active' : 'header-link'}>
                        Portfolio
                    </Nav.Link>
                </Nav>
                <div className='header-right'>
                    {Object.keys(resumeData.social).map(key =>(
                        <a href={resumeData.social[key].link} target='_blank'>
                            {resumeData.social[key].icon}
                            </a>
                    ))}
                    <CustomButton text={'Hire Me'} icon={<Telegram />} />
                </div>
            </Navbar.Collapse>
      </Navbar>
      );
}
 
export default Header;