import React from "react";

const headLook = {
    backgroundColor: '#2c323c',
    color: '#fff',
    padding: '180px 20px',
    paddingBottom: '140px',
    textAlign: 'center'
  }

function Directions() {
    return (
        <header className="header"  style={headLook}>
            <h1>Clicky Game!</h1>
            <h2>Click on a team to earn points, but don't click on the same team more than once!</h2>
        </header>
    );
  }



export default Directions;