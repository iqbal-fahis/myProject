import React from 'react'; 
import {Redirect} from 'react-router-dom';
import './index.css';
import Parent from './Parent' 
class ChildOne extends React.Component{ 
    constructor(props){
        super(props);
        let loggedIn= false
        this.state={
            loggedIn
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            loggedIn:true
        })
    }
    render(){ 
        if(this.state.loggedIn){
            return <Redirect to="/ChildTwo" />
        }
           

        return( 
            <div> 
                <form onSubmit={this.handleSubmit} >
                   <center><h1>Hi I am from Child One</h1> </center>
                   <Parent label="First Name" type="text" name="firstname"></Parent>
                   <Parent label="Last Name" type="text" name="lastname"></Parent>
                   <Parent label="Username" type="text" name="username"></Parent>
                   <Parent label="Phone No" type="number" name="phoneno"></Parent>
                   <Parent label="Address" type="text" name="address"></Parent>
                   <center><h1>*Click the button to go to Child Two</h1> </center>
                   <center><input  type = "submit" value = "Child Two"className="lgn_btn"/></center>
                </form>
            </div> 
            ); 
    } 
} 
  
export default ChildOne;