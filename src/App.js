import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Hype from './components/Pages/Hype';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/hype" component={Hype} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
