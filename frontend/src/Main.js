import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../public/index.html';
import Category from './pages/category';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/category' component={Category}></Route>
    </Switch>
  );
}

export default Main;