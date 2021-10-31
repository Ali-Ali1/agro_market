import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact component={WelcomePage} />
        <Route path='/login' component={Login} />
      </div>
    </Router>

  );
}

export default App;
