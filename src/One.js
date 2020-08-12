import React, {Component} from 'react';
import './index.css';
import Signup from './Signup';
import Welcome from './Welcome';
import {Redirect} from 'react-router-dom';
//import Routes from './routes';
import {Router, Route, RouteHandler} from 'react-router';
import { Link} from "react-router-dom"
//import { browserHistory } from 'react-router';
import Data from "./dataJson.json";
 
class One extends Component
{
   
    constructor()
    {
        super();
        let loggedIn= false
        this.state={
            username:"",
            password:"",
            loggedIn
        };
        
        //this.handleSubmit = this.handleSubmit.bind(this);
       
    }
       handleSubmit = e => {
        e.preventDefault();
        //const { username, password} = this.state
        let user= document.getElementById("username").value;
        let pwd = document.getElementById("password").value;
        
        let message;
        message = document.getElementById("message");
       // message.innerHTML = ""
        {Data.map(post =>{ 
            if(user == post.userName &&  pwd == post.passWord){
                this.setState({
                    loggedIn:true
                })
            }
            else{
                message.innerHTML ="Invalid Username or Password! :( "; 
                
            }
        })}

        
       // console.log('The form was submitted with the following data:');
        //console.log(this.state);
       // window.location.href = "http://localhost:3000/Welcome";
        //alert("Welcome  " + this.state.username);
        
        //alert('A name was submitted: ' + this.state.value);
           
    }
    
    render()
    {
        
        if(this.state.loggedIn){
            return <Redirect to="/Welcome" />
        }
        return(     
            <div className="Login">                
            <div className="lgn_left"><h1>Login</h1><p>Please enter your Username and
        Password</p>
        </div>
        <div className="lgn_right">

            <form onSubmit={this.handleSubmit} >
                
                <input className="field" placeholder="Username" type="text"
                value={this.state.username} 
                onChange={e => this.setState({ username: e.target.value})} id="username" required  />
                <br/><br/>
                <input className="field" placeholder="Password" type="password"
                value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value})} id="password" required />
                <br/><br/>
               <input  type = "submit" value = "Login"className="lgn_btn"/>
               <button className="lgn_btn2"  >
               <Link to="/Signup">Signup</Link>
               </button><br/><br/>
               <div className="error" id="message"></div> 
            </form>
            </div>
            </div>
            )
    
    }
    
}

export default One;
