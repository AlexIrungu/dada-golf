import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
//import Proposition from './components/Proposition';
import OurEvents from './components/OurEvents';
import Goals from './components/Goals';
import { Route, Switch} from 'react-router-dom'
import Marketing from './components/Marketing';
import Opportunities from './components/Opportunities';
import Gallery from './components/Gallery';
 //import Homepage from './components/Homepage'

function App() {
  return (
   
    <div className="App">
      <NavBar />
      <Switch>
     
        <Route exact path="/"> < Home /> </Route>
        {/* <Route path="/home"><Home /> </Route> */}
        <Route  path="/about"> <About /> </Route>
        {/* <Route  path="/proposition">  <Proposition /></Route> */}
        <Route  path="/our-events">  <OurEvents /></Route>
        <Route  path="/goals">  <Goals /></Route>
        <Route  path="/marketing">  <Marketing /></Route>
        <Route  path="/opportunities">  <Opportunities /></Route>
        <Route  path="/gallery">  <Gallery /></Route>
       </Switch>
   
    </div>
  
  );
}

export default App;
