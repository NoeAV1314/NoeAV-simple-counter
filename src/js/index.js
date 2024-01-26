//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.css';
import SimpleCounter from "./component/SimpleCounter";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'



// let counter = 0;
let seg, seg1, min, min1, hour, hour1;
seg = seg1 = min = min1 = hour = hour1 = 0;

setInterval(function(){
    // const squareFour = Math.floor(counter/10000);
    // const squareThree = Math.floor(counter/1000);
    // const squareTwo = Math.floor(counter/100);
    // const squareOne = Math.floor(counter/10);
    // console.log(squareOne, squareTwo, squareThree, squareFour);

    // counter++; // Corregido de calendar++ a counter++
    if (seg === 9) {
        seg = 0;
        seg1++
    } else if (seg1 === 6) {
        seg1 = 0;
        min++
    } else if (min === 9) {
        min = 0;
        min1++
    } else if (min1 === 6) {
        min1 = 0;
        hour++
    } else if (hour === 9) {
        hour = 0;
        hour1++
    }else if (hour === 2 && hour1 === 4) {
        seg = seg1 = min = min1 = hour = hour1 = 0;
    }
    seg++

    ReactDOM.render(
        <SimpleCounter digitOne={seg} digitTwo={seg1} digitThree={min} digitFour={min1} digitFive={hour} digitSix={hour1} />,
        document.querySelector('#app')
    );
}, 1000);