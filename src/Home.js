import React, {Component} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import { Link, NavLink} from "react-router-dom"
import Data from "./dataJson.json";
import Welcome from './Welcome';
class Home extends Component{
    constructor(props)
    {
        super(props);
        let loggedIn= false
        this.state={
            mobNumber:"",
            loggedIn,
            lastRecharge : ""
        };
        
    }
    handleSubmit = e => {
        e.preventDefault();
        let mno= document.getElementById("mobNumber").value;
        let message;
        message = document.getElementById("message");
        message.innerHTML = "";
        {Data.map(post =>{            
            if(post.id=="1" && mno == post.value){  
                this.setState({
                    loggedIn:true
                   
                })      
            }
            else if(post.id=="2" && mno == post.value){
                this.setState({
                    loggedIn:true
                })
            }
            else if(post.id=="3" && mno == post.value){
                this.setState({
                    loggedIn:true
                })
            }
            
            else{
                message.innerHTML ="Invalid Phone Number! :( "; 
                
            }
        })}
    }
    render()
    {
       if(this.state.loggedIn){
            return <Redirect to="/UserFirst" />
        }
        
        return(
            
            <div className="Login"> 
            <p>Enter your Phone number : </p>
            <center>
                <form onSubmit={this.handleSubmit}>
                <input className="field" placeholder="Phone No:" type="number"
                value={this.state.mobNumber} 
                onChange={e => this.setState({ mobNumber: e.target.value})} id="mobNumber" required />
                <br/><br/>
               <input  type = "submit" value = "Submit"className="lgn_btn"/>
               </form>
               </center>
               <div className="error" id="message"></div> 
            </div>
        )
    }
}
export default Home;