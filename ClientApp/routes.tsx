import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FlaggedImages } from './components/FlaggedImages';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/flaggedimages' component={ FlaggedImages } />
</Layout>;
