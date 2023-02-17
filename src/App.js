
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Introduction from './components/pages/Introduction';
// import Process from './components/pages/Process';
// import Results from './components/pages/Results';
// import Simulation from './components/Simulation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router basename="/bird">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={Introduction} />
          {/* <Route path='/Simulation' exact component={Simulation} />
          <Route path='/Process' exact component={Process} />
          <Route path='/Results' exact component={Results} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;