import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
