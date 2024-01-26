import React from "react";
import PropTypes from 'prop-types';

//create your first component
function SimpleCounter(props){
    return (
        <div className="bigCounter">
            <div className="calendar"><i className="fa-solid fa-clock-rotate-left"></i></div>
            <div className="square">{props.digitSix}</div>
			<div className="square">{props.digitFive}</div>
			<div className="square">{props.digitFour}</div>
            <div className="square">{props.digitThree}</div>
            <div className="square">{props.digitTwo}</div>
            <div className="square">{props.digitOne}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

export default SimpleCounter;
