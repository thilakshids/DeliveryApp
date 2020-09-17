import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { Nav, Navbar, NavItem } from "react-bootstrap";

import { BrowseRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FirstView from './components/FirstView';
import LogIn from './components/LogIn';
import Registration from './components/Registration';

 class App extends Component {

  

  render() {
    
    return (
           
      <router>
        <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
             <li><Link to={'/'} className="nav-link"> Use Me </Link></li>
             <li><Link to={'/login'} className="nav-link">LogIn</Link></li>
             <li><Link to={'/register'} className="nav-link">Register</Link></li> 
            
    
          <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
            </ul>     
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={FirstView} />
               <Route path='/login' component={LogIn} />
              <Route path='/register' component={Registration} /> 
          </Switch>
          

        </div>
      </router>
     
    );

  }
}

export default  App;