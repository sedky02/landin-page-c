import React from 'react';
import {BrowserRouter as Router, Switch,Route}from 'react-router-dom';
import Nav from './compoments/nav';
import Content from './compoments/content';
import Home from "./compoments/home";
import Product from './compoments/product';
import About from './compoments/about';
import Notavialable from './compoments/notAvaliable';
import Footer from './compoments/footer';
import {SiteProvider} from './siteContext';
import './App.scss';

function App() {
  //<rect width="310.431" height="708" x="205" y="410" rx="155.215" transform="scale(1 -1) rotate(-45 -1484.244 0)"/>
  return (
    <Router>
      <SiteProvider>
        <div className="app">
        <div className="bubble"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="home-bg bg-mobile">
            <rect width="310.431" height="708" x="-10%" y="60%" fill="hsl(12, 88%, 59%)" fill-rule="evenodd" opacity=".071" rx="155.215" transform="scale(1 -1) rotate(-45 -951.398 26.5)"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg"  className="home-bg bg-desktop">
            <g fill="hsl(12, 88%, 59%)" fill-rule="evenodd" opacity=".071" >
              <rect width="310.431" height="708" x="1000" y="7" rx="-50" transform="scale(1 -1) rotate(-45 552.684 0)"/>
            </g>
          </svg>        
          <Nav/>
          <Switch>
            <Route path="/" key="home" exact component={Content}/>
            <Route path="/pricing" key="pricing" exact component={Home}/>
            <Route path="/product" key="product" exact component={Product}/>
            <Route path="/about"  key="about" exact component={About}/>
            <Route path="/pageNotFound" key="not" exact component={Notavialable}/>
          </Switch>
          <Footer/>
        </div>
      </SiteProvider>
    </Router>
  );
}

export default App;
