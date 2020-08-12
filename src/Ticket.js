import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import { Link, NavLink} from "react-router-dom"
import Data from "./dataJson.json";
var models={
    Apple:['Iphone5s', 'Iphone6s','Iphone10s'],
    Samsung:['Galaxy', 'Champ','Canvas'],
    Redmi:['Note5', 'Y3','Note6Pro'],
    Oppo:['V3', 'V5','Elite']
   }
class Ticket extends Component {
  constructor(props) {

    super(props);
    let loggedIn= false
    this.state = {
         value1: "Aircel",
         value2: "Samsung",
         value3: "Galaxy",
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(e) {
      e.preventDefault();
    //alert("Your favorite flavor is: " + this.state.value);
    this.setState({
        loggedIn:true
    })
  }

  handleChange = event => {
    /*this.setState({ value1: event.target.value1 });
    this.setState({ value2: event.target.value2 });
    this.setState({ value3: event.target.value3 });
    this.setState({
        selectedOption: event.target.value
      });
      var main=document.getElementById("main_menu");
      var sub=document.getElementById("sub_menu");
      main.addEventListener('change', function(){
          var selected_Option= models;
          while(sub.options.length > 0){
          sub.options.remove(0);
          }
          Array.from(selected_Option).forEach(function(e1){
              let option= new option(e1, e1);
              sub.appendChild();
          })
      })*/
      switch (document.getElementById("main_menu"))
        {
        case "Apple" :
            document.getElementById("sub_menu").options[0]=new Option("Select sub_menu","");
            document.getElementById("sub_menu").options[1]=new Option("OPEN","open");
            document.getElementById("sub_menu").options[2]=new Option("DELIVERED","delivered");
            break;
        case "Samsung" :
            document.getElementById("sub_menu").options[0]=new Option("Select sub_menu","");
            document.getElementById("sub_menu").options[1]=new Option("OPEN","open");
            document.getElementById("sub_menu").options[2]=new Option("DELIVERED","delivered");
            document.getElementById("sub_menu").options[3]=new Option("SHIPPED","shipped");
            break;
        case "Redmi" :
            document.getElementById("sub_menu").options[0]=new Option("Select sub_menu","");
            document.getElementById("sub_menu").options[1]=new Option("OPEN","open");
            document.getElementById("sub_menu").options[2]=new Option("DELIVERED","delivered");
            document.getElementById("sub_menu").options[3]=new Option("SHIPPED","shipped");
            break;
        case "Oppo" :
            document.getElementById("sub_menu").options[0]=new Option("Select sub_menu","");
            document.getElementById("sub_menu").options[1]=new Option("OPEN","open");
            document.getElementById("sub_menu").options[2]=new Option("DELIVERED","delivered");
            document.getElementById("sub_menu").options[3]=new Option("SHIPPED","shipped");
            break;
        }
  };

  render() {
    if(this.state.loggedIn){
        return <Redirect to="/Problem" />
    }
    return (
        <div className="Login"> 
      <form onSubmit={this.handleSubmit}>
          <center>
        <label>
          Select Sevice Provider   : <br></br>
          <select value={this.state.value1} required>
            <option value="Airtel">Airtel</option>
            <option value="Aircel">Aircel</option>
            <option value="Jio">Jio</option>
            <option value="Vodafone">Vodafone</option>
          </select><br></br><br></br>
          Select Manufacturer      : <br></br>
          <select id="main_menu" value={this.state.value2} onChange={this.handleChange} required>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Redmi">Redmi</option>
            <option value="Oppo">Oppo</option>
          </select><br></br><br></br>
          Pick Model Name           : <br></br>
          <select id="sub_menu" value={this.state.value3} required>
          <option value="Model1"></option>
            <option value="Samsung"></option>
          </select><br></br>
        </label><br></br>
        <label>
            <input type="radio" value="Prepaid"  checked={this.state.selectedOption === "Prepaid"} onChange={this.handleChange} required/>
            Prepaid
          </label>
          <label>
            <input type="radio" value="Postpaid"  checked={this.state.selectedOption === "Postpaid"}  onChange={this.handleChange} required/>
            Postpaid
          </label>
        </center>
        <br></br><center> <input type="submit" value="Next" /></center>
      </form>
      </div>
    );
  }
}

export default  Ticket;

