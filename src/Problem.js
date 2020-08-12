import React, {Component} from "react";
import './index.css';
import {Redirect} from 'react-router-dom';
import { Link, NavLink} from "react-router-dom"
class Problem extends Component {
    constructor(props) {
      super(props);
      let loggedIn= false
      this.state = {
        loggedIn,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit = e => {
    e.preventDefault();
    let message;
    message = document.getElementById("message");
    message.innerHTML = "";
    this.setState({
        loggedIn:true
        
    })
    message.innerHTML ="Ticket created successfully! Our service provider will call you soon.. ";

}
handleChange = event => {debugger;
    let txt =  document.getElementById('dropdown').value;
    
    if(txt == "Others")
    document.getElementById("txtBox").disabled = false;
    else
    document.getElementById("txtBox").disabled = true ;
};
render(){
    return(
        <div className="Login">
            <form onSubmit={this.handleSubmit}>
             <center><br></br>             
        <label>
          Your Problems   : <br></br><br></br>
          <select id = "dropdown" onChange={this.handleChange} required>
            <option value="Frequentcall disconnection">Frequent call disconnection</option>
            <option value="Balance deduction">Balance deduction</option>
            <option value="Network portability">Network portability</option>
            <option value="Others">Others</option>
          </select><br></br><br></br>
          </label>
          <label>
                Reason *   : <br></br>
                <input id="txtBox" placeholder="Type Here" type="text" disabled = "true" required></input>
          </label>
          </center><br></br>
          <center> <input type="submit" value="Create Ticket" /></center><br></br>
          <div className="error" id="message"></div>
          </form>
        </div>
    );
}
}
export default Problem;
