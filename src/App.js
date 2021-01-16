import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Hype from './components/Pages/Hype';
import Library from './components/Pages/Library';
import Signin from './components/Pages/Signin';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/hype" component={Hype} />
        <Route path="/library" component={Library} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
