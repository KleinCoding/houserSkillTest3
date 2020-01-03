import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header.js'

function App() {
  return (
    <div>
    
   <Router>
   <button onClick={
// event => (window.location.href = `/#${this.props.match.url}/Dashboard/`)
event => (window.location.href = "#/Dashboard")
    }>
          Dashboard
        </button>
     <header>
       {/* <ul>
         <li><Link to ='/'>Dashboard</Link></li>  //THESE ARE BEING RENDERED ON THE DASHBOARD COMPONENT NOT HERE!!!
         <li><Link to ='/Wizard'>Wizard</Link></li>
         <li><Link to ='/Header'>Header</Link></li>
         <li><Link to ='/House'>House</Link></li>
         <li><Link to ='/ohnelly'>404 now yall</Link></li>

       </ul> */}
     </header>
   </Router> 
   </div>
  );
}

export default App;
