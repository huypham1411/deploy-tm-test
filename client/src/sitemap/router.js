import React from 'react';
import { Switch, Route } from 'react-router';
 
export default (
    // Switch is added in v4 react-router
    <Switch>
        <Route path="/"/>
        <Route path ="/Policy" />
        <Route path="/About" />
        <Route path="/SignUp" /> 
        <Route path="/ForgetPass"/>
        <Route path="/Products"/>
        <Route path="/cart"/>
        <Route path="/Products/:id"/>
        <Route path="/Search"/>
        <Route path="/User"/>
    </Switch>
);