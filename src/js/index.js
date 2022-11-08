//import react into the bundle
import { checkPropTypes } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let time = 0;

function stop(){
    clearInterval(tr);
}

var tr = setInterval (function counter(){

    time++;
    let one = Math.floor(time/128);
    let two = Math.floor(time/32);
    let three = Math.floor(time/8);
    let four = Math.floor(time/2);
    let five = Math.floor(time/1);


ReactDOM.render(<Home None={one} Ntwo={two} Nthree={three} Nfour={four} Nfive={five}/>, document.querySelector("#app"));
},1000);