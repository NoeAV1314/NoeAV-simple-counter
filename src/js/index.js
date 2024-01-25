//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function SimpleCounter(props){
    return (<div className="bigCounter">
                <div className="calendar">0</div>
                <div className="squareFour">0 {props.digitFour}</div>
                <div className="squareThree">0 {props.digitThree}</div>
                <div className="squareTwo">0 {props.digitTwo}</div>
                <div className="squareOne">0 {props.digitOne}</div>
            </div>);
}
MyComponent.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,

}    

let counter = 0;

setInterval(function(){
    const squareFour = Math.floor(counter/10000);
    const squareThree = Math.floor(counter/1000);
    const squareTwo = Math.floor(counter/100);
    const squareOne = Math.floor(counter/10);
    console.log (squareOne, squareTwo, squareThree, squareFour);
// include your styles into the webpack bundle
    calendar++;
    ReactDOM.render(
        <SimpleCounter digitOne={squareOne} digitTwo={squareTwo} digitThree={squareThree} digitFour={squareFour} />,
        document.querySelector('#app')
    );
}, 1000);