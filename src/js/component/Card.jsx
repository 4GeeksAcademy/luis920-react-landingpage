import React from "react";

function Card(props) {
  const {title,text,image,button} = props;
    return (
      <div className="card m-4 pt-3 " >
        <a href="">
          <img
            src={image}
            className="card-img-top"
            alt="..."
          ></img>
        </a>
  
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {text}
          </p>
          <a href="#" class="btn btn-primary "> {button} </a>
        </div>
      </div>
    );
  }
  
  export default Card;
  