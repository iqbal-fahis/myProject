import React, {Component} from 'react';
import './index.css';
import Welcome from './Welcome';
import { Redirect, Link} from 'react-router-dom'
import Data from "./dataJson.json";

const usernameRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
class Signup extends Component
{
    constructor(props) {
        super(props);
        let loggedIn= false
        this.state = {
          firstName:"",
          lastName: "",
          username: "",
          password: "",
          phoneNumber: "",
          loggedIn,
          formErrors: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            phoneNumber: ""
          }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
      }
     
      validate = e => {
        let user = document.getElementById('phoneNo');
        let mobilepattern = /^[789][0-9]{9}$/;
        if(mobilepattern.test(user)){
            document.getElementById('user').style.
            backgroundColor ='Green';
        }    
      } 
      handleSubmit = e => {
        e.preventDefault();
        let fname= document.getElementById("firstName").value;
        let lname = document.getElementById("lastName").value;
        let uname= document.getElementById("username").value;
        let pwd = document.getElementById("password").value;
        let pno= document.getElementById("phoneNo").value;
        {Data.map(post =>{ 

          if(fname == post.firstName &&  lname == post.lastName && uname==post.userName && pwd== post.passWord && pno== post.phoneNumber){
               this.setState({
                  loggedIn:true
              })
          }
        })}
       /* if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Username: ${this.state.username}
            Password: ${this.state.password}
            Phone Number: ${this.state.phoneNumber}
          `);
          alert("Account Created Successfully  ");
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }*/
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
          case "firstName":
            formErrors.firstName =
              value.length < 3 ? "*minimum 3 characters required" : "";
            break;
          case "lastName":
            formErrors.lastName =
              value.length < 3 ? "*minimum 3 characters required" : "";
            break;
          case "username":
            formErrors.username = usernameRegex.test(value)
              ? ""
              : "*this is not a valid email";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "*minimum 6 characters required" : "";
              break;
          case "phoneNo":
            formErrors.phoneNumber =
              value.length < 10 ? "*minimum 10 characters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    
      render() {
        const { formErrors } = this.state;
        if(this.state.loggedIn){
          return <Redirect to="/Welcome" />
      }
        return (
            <div className="Login2">
            <div className="lgn_left"><h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            </div>
                 <div className="lgn_right">
                  <form onSubmit={this.handleSubmit} >
                  <label htmlFor="firstName">First Name</label>
                  <input className="field2" 
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    id="firstName"  required
                   // noValidate
                    onChange={this.handleChange} />
                  {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}<br/><br/>
                  <label htmlFor="lastName">Last Name</label>
                  <input className="field2" 
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    id="lastName"  required
                 //   noValidate
                    onChange={this.handleChange} />
                  {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}<br/><br/>
                  <label htmlFor="username">User Name</label>
                  <input className="field2" 
                    placeholder="Username"
                    type="username"
                    name="username"
                    id="username"  required
                   // noValidate
                    onChange={this.handleChange} />
                  {formErrors.username.length > 0 && (
                    <span className="errorMessage">{formErrors.username}</span>
                  )}<br/><br/>
                  <label htmlFor="password">Password</label>
                  <input className="field2" 
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password" required
                   // noValidate
                    onChange={this.handleChange} />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}<br/><br/>
                  <label htmlFor="phoneNumber">Phone No</label>
                  <input className="field2" 
                    placeholder="Phone No" 
                    maxLength = "10"
                    type="number"
                    id="phoneNo"  required
                 //   noValidate
                    onChange={this.handleChange, this.validate}/>                     
                  {formErrors.phoneNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.phoneNumber}</span>
                  )}<br/><br/>
                   
                  <a className="link" href="/One"><small>Already Registered?</small></a>
                  <center><input  type = "submit" value = "Signup" className="lgn_btn"/></center>
                 
              </form>
            </div>
          </div>
        );
      }
    }
    
    
export default Signup;