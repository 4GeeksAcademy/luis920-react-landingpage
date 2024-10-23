import { string } from "prop-types";
import React from "react";

Card.Props={
 title: String,
 text: string
}
  
function Card(props) {
  const {title,text} = props;
    return (
      <div className="card m-3 ">
        <a href="">
          <img
            src="https://picsum.photos/200/200"
            className="card-img-top"
            alt="..."
          ></img>
        </a>
  
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {text}
          </p>
          <a href="#" className="btn btn-primary mr-3">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;
  