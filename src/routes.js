import React from 'react';
import {Route} from 'react-router';
import Home from './components/Home';

export default (
    <Route path='/' handler={Home} />
    //<Route path='/:play_id' handler={detail} />
);
