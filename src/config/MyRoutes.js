import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import CoursesContainer from '../containers/CoursesContainer';

export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/course' component={ CoursesContainer }/>
    </Switch>
)
