import React, {Component} from 'react';
import './index.css';
import { render } from '@testing-library/react';
import{BrowserRouter as Router} from 'react-router-dom'
import {Link, Redirect, NavLink} from 'react-router-dom';
import One from './One.js';

class Welcome extends Component{
 constructor(props){
     super(props);
     this.setState={
          
     }
 
 }

render()
{
    return(
        <div className="Login">        
            
           <h1><center>Explore here!!!  {this.props.match.params.username}</center></h1>
           <center>
           <Link to="/One" className="hmeLink">Go Home</Link> <br></br>
           <Link to="/Dashboard" className="hmeLink">Dashboard</Link> <br></br>
           <NavLink to="/One" className="hmeLink">Logout</NavLink><br></br>
          
           </center>
        </div>
    )
}
}

export default Welcome;