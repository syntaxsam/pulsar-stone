import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home'
import Cards from '../pages/Cards'
import TheGridPage from '../pages/TheGrid'
import AdvancedPatterns from '../pages/AdvancedPatterns';
import ControlledComponents from '../pages/ControlledComponents';

const Routes = () =>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cards" exact component={Cards} />
      <Route path="/thegrid" exact component={TheGridPage} />
      <Route path="/advancedpatterns" exact component={AdvancedPatterns} />
      <Route path="/controlledcomponents" exact component={ControlledComponents} />
    </Switch>
  </BrowserRouter>

export default Routes