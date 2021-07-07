import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import DSA from './components/DSA';
import WebDev from './components/WebDev';
import { Route } from 'react-router';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/engg/cs/dsa' component={DSA} />
        <Route path='/engg/cs/webdev' component={WebDev} />
      </Switch>
    </Router>
  );
}

export default App;
