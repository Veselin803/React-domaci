import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import { Switch, Route } from 'react-router-dom';
import Home from './components/layouts/pages/Home.jsx';
import Contact from './components/layouts/pages/Contact.jsx';
import NotFound from './components/layouts/pages/NotFound.jsx';

class App extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/kontakt" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
