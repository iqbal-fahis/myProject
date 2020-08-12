import React from 'react';
import ReactDOM from 'react';
import {Component} from 'react';
import './App.css';
class Arith extends Component{
    constructor(props) {
        super(props);
        this.state = {
           name: "Iqbal",
           count: 0
        };
    } 
      Onclick = () => {
        this.setState({
         name:"paras"
        });
      }
      increment=() => {
        this.setState({
         count: this.state.count + 1
        });
      }
      increment2=() => {
        this.setState({
         count: this.state.count + 2
        });
      }
      render() 
      {
        return(
    
       <div className="Login">
       <button onClick={this.Onclick}>Change The Name!</button>
        <h1>Current Name: {this.state.name}</h1>
        <button onClick={this.increment}>Increment by 1!!!!</button>
        <h1>Current Count: {this.state.count}</h1>
        <button onClick={this.increment2}>Increment by 2!!!!</button>
      </div>
        )
        }
    }
export default Arith;
