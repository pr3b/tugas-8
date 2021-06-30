import Users from "./components/pages/Users";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Logo from './components/pages'
import About from './components/pages/about'
import Data from './components/pages/data'
import SignUp from './components/pages/signup'
import SignIn from './components/pages/signin'

function App() {
  return (
    <>
    <Users />
    {/* <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Logo} />
        <Route path="/about" exact component={About} />
        <Route path="/data" exact component={Data} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </Router> */}
    </>
  );
}

export default App;
