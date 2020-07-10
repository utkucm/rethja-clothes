import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
