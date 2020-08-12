import React, {Component} from 'react';
import './index.css';
import Signup from './Signup';
import Welcome from './Welcome';
import {Redirect} from 'react-router-dom';
import { Link, NavLink} from "react-router-dom"
import Data from "./dataJson.json";
import Ticket from './Ticket';

class Dashboard extends Component{
    constructor(props)
    {
        super(props);
            
    }
    render()
{
    return(
        <div className="Login">  
        <h1><center>Welcome to DashBoard</center></h1>
        <center>

            <NavLink to="/Home" className="hmeLink">Home</NavLink><br></br>
            <NavLink to="/Dropdown" className="hmeLink">Create Ticket</NavLink><br></br>
            <NavLink to="/Myprofile" className="hmeLink">My Profile</NavLink><br></br>
            
        </center>
        </div>
            )
}
}
export default Dashboard;