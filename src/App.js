import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Dropdown from './components/Dropdown';
import { useEffect, useState } from 'react';
import Contact from './pages/Contact';


function App() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  }

  useEffect(()=>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setOpen(false);
      }
    }
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })
  return (
    <Router>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
