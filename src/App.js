import React from 'react';
//import ReactDOM from 'react';
import {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
//import Routes from './routes';
//import axios from "axios";
import './App.css';
import store,{COUNTER_INCREMENT, COUNTER_DECREMENT} from './Store'
import { render } from '@testing-library/react';//
import One from './One'
import Signup from './Signup'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import Home from './Home'
import UserFirst from './UserFirst';
import Myprofile from './Myprofile';
import Ticket from './Ticket';
import Problem from './Problem';
import Dropdown from './Dropdown';
import Arith from './Arith';
import Add from './Add';
import LifeCycles from './LifeCycles';
import Binding from './Binding';
import ChildOne from './ChildOne';
import Parent from './Parent';
import ChildTwo from './ChildTwo';
class App extends Component{
constructor(props)
{
  super(props);
 
  this.state ={
    name : "",
    loggedInStatus: "NOT_LOGGED_IN",
    user : {}
  }
}

/*checkLoginStatus()
{
  <div><img src="/images/comm.jpg" alt=""/></div>
  axios
  .get("http://localhost:3000/logged_in", { withCredentials: true })
  .then(response => {
     console.log("logged in?", response);
  })
    .catch(error => {
    console.log("check error", error);
  })
}

componentDidMount(){
  this.checkLoginStatus();
}*/


increment =()=>{
  store.dispatch({type: COUNTER_INCREMENT});
  console.log(store.getState().count);
}
decrement =()=>{
  store.dispatch({type: COUNTER_DECREMENT});
  console.log(store.getState().count);
}
render()
{

  return (
  
  <div>
    <p className="App-header">{this.state.name}</p>
    <p className="App-header">This is Reacttt</p>
    <center>
    <button onClick={this.increment}> Increment</button>&nbsp;&nbsp;
    <button onClick={this.decrement}> Decrement</button>
    </center>
    <BrowserRouter >
<Switch>
<Route exact path="/One" component={One}/>
<Redirect from='/One/' to="/Welcome/" />
<Route path="/Welcome" component={Welcome}/>
<Route path="/Signup" component={Signup}/>
<Route path="/Dashboard" component={Dashboard}/>
<Route path="/Home" component={Home}/>
<Route path="/UserFirst" component={UserFirst}/>
<Route path="/Myprofile" component={Myprofile}/>
<Route path="/Ticket" component={Ticket}/>
<Route path="/Problem" component={Problem}/>
<Route path="/Dropdown" component={Dropdown}/>
<Route path="/Arith" component={Arith}/>
<Route path="/Add" component={Add}/>
<Route path="/LifeCycles" component={LifeCycles}/>
<Route path="/Binding" component={Binding}/>
<Route path="/ChildOne" component={ChildOne}/>
<Route path="/Parent" component={Parent}/>
<Route path="/ChildTwo" component={ChildTwo}/>

</Switch>
</BrowserRouter>
  
  </div>
  );
 
}
}
//ReactDOM.render(<App/>, <One/>, document.getElementById('root'));
export default App;
