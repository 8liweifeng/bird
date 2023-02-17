
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Introduction from './components/pages/Introduction';
import Signal_Simulation from './components/pages/Signal-Simulation';
import Signal_Processing from './components/pages/Signal-Processing';
import Achievement from './components/pages/Achievement';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router basename="/bird">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={Introduction} />
          <Route path='/Simulation' exact component={Signal_Simulation} />
          <Route path='/Process' exact component={Signal_Processing} />
          <Route path='/Results' exact component={Achievement} />
        </Switch>
      </Router>
    </>
  );
}

export default App;