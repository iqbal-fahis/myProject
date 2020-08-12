import React, {Component} from 'react';
import './index.css';
import Signup from './Signup';
import Welcome from './Welcome';
import {Redirect} from 'react-router-dom';
import { Link, NavLink} from "react-router-dom"
import Data from "./dataJson.json";
import One from './One';

class Myprofile extends Component{
    constructor(props)
    {
        super(props);
            
    }
    render()
{
    return(
        <div className="Login">  
        <h1><center>Your Profile</center></h1>
        <p>
        <label htmlFor="firstName">First Name  :</label><br/><br/>        
        <label htmlFor="lastName">Last Name  :</label><br/><br/>
        <label htmlFor="username">User Name  :</label><br/><br/>
        <label htmlFor="phoneNumber">Phone No  :</label><br/><br/>
        </p>
        <center>
        <NavLink to="/Dashboard" className="hmeLink">Home</NavLink><br></br>
        </center>
        </div>
            )
}
}
export default Myprofile;