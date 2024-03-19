import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import people from "./data/people";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Persons from "./pages/Persons";
import Contact from "./pages/Contact";
import Art from "./pages/Art";

function App() {
  // function and component
  const [count, setCount] = useState(0);
  const [visibleContent, setVisible] = useState();
  
  useEffect(() => {
    document.title = `You clicked ${count}`;
    console.log("useEffect called");
  }, [count]);

  useEffect(() => {
    const onScroll = () => {
      console.log('Scrolled!', window.scrollY);
      setVisible(window.scrollY > 0);
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <Router>
      {/* App! */}
      <Header  />
      
      {/*<span onClick={() => setCount(count + 1)}>Count</span>*/}

      <Switch>
        {/* */}
        <Route path="/services">
          <Persons persons={people} />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/art">
          <Art />
        </Route>
        
        {/*  */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
