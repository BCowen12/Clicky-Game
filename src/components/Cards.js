import React from "react";

const style = {
    height: '130px',
    padding: '50px'
}

const Cards = (props) => {
    return (
      <div>
        <img
            alt="MLB Teams"
            src={props.img}
            id={props.id}
            onClick={() => props.clicky(props.id)}
            style={style}
            />
      </div>
    );
  };



export default Cards;