import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Home from './components/Home';
import Launch from './components/Launch';
import Breakfast from './components/Breakfast';
import Dinner from './components/Dinner';
import Contact from './components/Contact';
import Img from './components/Img';




function App() {
  return (
    <div className='App'>
      <Router>
       <Switch>
  <Route exact path='/' component={Home}/>
   <Route path="/Breakfast" component={Breakfast} />    
   <Route path="/Launch" component={Launch}/>
   <Route path="/Dinner" component={Dinner}/> 
   <Route path="/Contact" component={Contact}/> 
   <Route path="/Img"    component={Img}/>
       </Switch>
      </Router>
    

    </div>
  )
}

export default App