import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { LandingPage, AboutPage, DashboardGuildPage, DashboardPage, DocumentationPage } from './Pages';


function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/documentation' component={DocumentationPage} />
      <Route exact path='/dashboard' component={DashboardPage} />
      <Route exact path='/dashboard/:id' component={DashboardGuildPage} />
    </Router>
  );
}

export default App;
