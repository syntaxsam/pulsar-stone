import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home'
import Cards from '../pages/Cards'

const Routes = () =>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cards" exact component={Cards} />
    </Switch>
  </BrowserRouter>

export default Routes