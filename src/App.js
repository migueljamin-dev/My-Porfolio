import React from 'react';

import { Container, Grid } from "@material-ui/core";
import Profile from './components/Profile/profile';
import Header from './components/Header/header';
import Portfolio from './pages/Portfolio/portfolio';
import Resume from './pages/Resume/resume';
import Footer from './components/Footer/footer';

import  { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className={'top-60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
         <Profile />

        </Grid>

        <Grid item xs>
    
         <Router>
         <Header />
         <div className='main-content container-shadow'>
            <Switch>
            <Route path='/portfolio'>
             <Portfolio />
            </Route>
            <Route path='/'>
            <Resume />
            </Route>
            </Switch>
            </div>
          </Router>
          
          <Footer />
        </Grid>
      </Grid>

    </Container>
  );
}

export default App;
