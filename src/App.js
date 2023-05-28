import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fun from './components/pages/fun';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from './components/pages/about'
import SignUp from './components/pages/SignUp';
import { TravelPlanProvider } from '../src/components/context';

function App() {
  return (
    <>
      <Router>
        <TravelPlanProvider>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/fun' component={fun} />
            <Route path='/about' component={About} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        </TravelPlanProvider>
      </Router>
    </>
  );
}

export default App;
