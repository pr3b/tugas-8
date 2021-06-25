import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Logo from './pages'
import About from './pages/about'
import Data from './pages/data'
import SignUp from './pages/signup'
import SignIn from './pages/signin'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Logo} />
        {/* <Route path="/home" exact component={Home} /> */}
        <Route path="/about" exact component={About} />
        <Route path="/data" exact component={Data} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
