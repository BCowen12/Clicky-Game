import React from "react";

const look = {
    float: 'left', 
    paddingLeft: '80px',
    paddingRight: '80px'
}

const Header = (props) =>
        <div>
            <div style={look}>
                <p>Baseball Team Memory Game</p>
            </div>
            <div style={look}>
                <p>{props.message}</p>
            </div>
            <div style={look}>
                <p>Score: {props.score} | Top Score: {props.topScore}</p>
            </div>
       </div>



export default Header;