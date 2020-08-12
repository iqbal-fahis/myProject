import React from 'react';
import {Component} from 'react';
import './App.css';
class Binding extends Component{
    constructor(props) {
        super(props);
        this.state = {
           oneWayBinding: "This is one way Binding",
           twoWayBinding: ""
        };
    } 
      Onchange = () => {
        this.setState({
         oneWayBinding:"One way binding changed :)"
        });
      }
      OnchangeInput = (e) => {
        this.setState({
         twoWayBinding: e.target.value
        });
      }
      render() 
      {
        return(
       <div>
        <center>
         <button onClick={this.Onchange}>Change It!</button>
         <h1>One way binding: {this.state.oneWayBinding}</h1>
         <h1>Two way binding:</h1>
         <input type="text" value={this.state.twoWayBinding} onChange={this.OnchangeInput}/>
         <h2>{this.state.twoWayBinding}</h2>
        </center>
      </div>
        )
        }
    }
export default Binding;
