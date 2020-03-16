import React from 'react';
import Home from './Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path="/" component={Home} />
     </Router>
    </div>
  );
}

export default App;
