import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import ActIns from './components/ActIns';
import Profile from './components/Profile';

export default (
    <Route path="/" handler={App}>
        <DefaultRoute handler={Home} />
        <Route path='/actins' handler={ActIns} />
        <Route path='/profile/:id' handler={Profile} />
        <NotFoundRoute handler={Home}></NotFoundRoute>
    </Route>
);
