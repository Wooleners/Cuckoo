import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import ActIns from './components/ActIns';

export default (
    <Route path="/" handler={App}>
        <DefaultRoute handler={Home} />
        <Route path='/actins' handler={ActIns} />
        <NotFoundRoute handler={Home}></NotFoundRoute>
    </Route>
);
