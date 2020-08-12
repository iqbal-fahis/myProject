import React from 'react';
import {Component} from 'react';
import './App.css';
class Add extends Component{
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            total: 0
        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    add = () => {
        const{number1, number2} = this.state;
        this.setState({
            total: (parseInt(number1)+parseInt(number2))
            //  or We can give Like this
            // * total: (parseInt(this.state.number1)/parseInt(this.state.number2))
        })
    }
    sub = () => {
        const{number1, number2} = this.state;
        this.setState({
            total: (parseInt(number1)-parseInt(number2))
        })
    }
    mul = () => {
        const{number1, number2} = this.state;
        this.setState({
            total: (parseInt(number1)*parseInt(number2))
        })
    }
    div = () => {
        const{number1, number2} = this.state;
        this.setState({
            total: (parseInt(number1)/parseInt(number2))
        })
        
    }
    render() {
        const {total} = this.state;
        return (
            <div className="Login">
                     <label>Number 1</label>
                     <input type="text" name="number1" onChange={this.handleChange} required/><br></br><br></br>
                     <label>Number 2</label>
                     <input type="text" name="number2" onChange={this.handleChange} required/><br></br><br></br>
                <button className="lgn_btn" onClick={this.add}>Add</button>
                <button className="lgn_btn" onClick={this.sub}>Subtract</button>
                <button className="lgn_btn" onClick={this.mul}>Multiply</button>
                <button className="lgn_btn" onClick={this.div}>Divide</button>
                <p>Result  :   {total}</p>
            </div>
        );
    }
    }
  
export default Add;
