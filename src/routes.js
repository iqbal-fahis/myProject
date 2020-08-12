import React from 'react';
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
import Welcome from './Welcome';
import Signup from './Signup';
import One from './One';


const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={One}/>
<Route path="/Welcome" component={Welcome}/>
<Route path="/Signup" component={Signup}/>
</Switch>
</BrowserRouter>
);
export default Routes;