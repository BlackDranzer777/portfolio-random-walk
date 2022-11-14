import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Intro from './components/intro/Intro';
import Curtain from './components/curtain/Curtain';
import Modes from './components/modes/Modes';
import About from './components/about/About';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  useLocation
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Facts from './components/curtain/facts';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  const [theme, setTheme] = useState(255); // 0 => black, 1 => white 
  const [curtain, setCurtain] = useState(false);
  const [facts, setFacts] = useState(Facts[Math.floor(Math.random()*5)]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(curtain === true){
        setCurtain(false);
      }
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [curtain]);

    const clickHandler = () => {
        if(theme === 0){
            setTheme(255);
            // setCurtain(true);
        }else{
            setTheme(0);
        }
    }

    const curtainClickHandler = () => {
      setFacts(Facts[Math.floor(Math.random()*5)]);
      return setCurtain(true);
    }

  return (
    <Router>
      <div className={theme ? 'App' : 'App-dark'}>
        <Modes theme={theme} curtainClickHandler={curtainClickHandler} curtain={curtain} clickHandler={clickHandler}/>
        <Curtain curtain={curtain} facts={facts}/>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/about">
                <About theme={theme}/>
            </Route>
            <Route path="/projects">
                <Projects theme={theme}/>
            </Route>
            <Route path="/contact">
                <Contact theme={theme}/>
            </Route>  
            <Route path="/">
                <Intro theme={theme}/>
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
