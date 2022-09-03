import React from "react";
import {Switch, Route, BrowserRouter, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Ourservices from "./pages/Ourservices/Ourservices";
import Clients from "./components/Clients/Clients";
import Partners from "./components/Partners/Partners";
import Whatsappchat from "./components/Whatsappchat/Whatsappchat";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Wrapper>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/services" exact component={Ourservices} />
        </Switch>
      </main>
      <Clients />
      <Partners />
      <Footer />
      <Whatsappchat />
      </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
