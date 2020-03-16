import React, {Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
//import { render } from '@testing-library/react';


class NavControl extends Component{
    render(){
        return (
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                 <Link to="/">Home</Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
              </Navbar>
      
          );
    }
}


export default NavControl