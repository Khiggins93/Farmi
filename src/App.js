import React from 'react';
//import logo from './logo.svg';

import './App.css';
//COMPONENTS
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import Drive from './pages/Drive';
import About from './pages/About';
import Investigacion from './pages/Investigacion'
import Error from './pages/Error';
//
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

/*const Welcome = (props) =>{
  return <h1>Hello, {props.name} </h1>
}*/

function App() {
  return (

    <>
      <Navbar />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/drive" component={Drive}/>
        <Route exact path="/I+D+i" component={Investigacion}/>
        <Route exact path="/about" component={About}/>
        <Route component={Error} />
      </Switch>
    </>

  );
}

export default App;
