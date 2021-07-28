import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './components/store'
import { Provider } from 'react-redux'
import Logo from './components/pages'
import About from './components/pages/about'
import Data from './components/pages/data'
import DataDetail from './components/pages/datadetail';
import Favorite from './components/pages/Favorite'
import SignUp from './components/pages/signup'
import SignIn from './components/pages/signin'

export default function App() {
  return (
    <Provider store={store}>
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Logo} />
        <Route path="/about" exact component={About} />
        <Route path="/data" exact component={Data} />
        <Route path="/data/:id" exact component={DataDetail} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/favorite" exact component={Favorite} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </Router>
    </>
    </Provider>
  )
}