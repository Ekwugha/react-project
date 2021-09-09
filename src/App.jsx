import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './component/home/home.component';
import About from './component/about/about.component';
import News from './component/news/news.component';
import 'bootstrap/dist/css/bootstrap.css';
import CustomNavbar from './component/navbar/custom-navbar.component';

function App() {
  return (
      <div>
        <CustomNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/news' component={News} />
        </Switch>
      </div>
  );
}

export default App;
