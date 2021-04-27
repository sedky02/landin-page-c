import React from "react";
import Home from "./home";
import Product from './product';
import About from './about';
function Content(){
    return(
        <div className="content center-content">
            
            <Home/>
            <Product/>
            <About/>
        </div>
    );
}


export default Content ;