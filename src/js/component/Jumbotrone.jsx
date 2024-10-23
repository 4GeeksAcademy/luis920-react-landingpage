import React from "react";

function Jumbotrone() {
    return (
      <div className="p-5  m-5 text-center  rounded-3 bg-dark ">
        <svg className="bi mt-4 mb-3" width="100" height="80"></svg>
        <h1 className="text-light">A WARM WELCOM!</h1>
        <p className="col-lg-8 mx-auto fs-5  text-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam blanditiis quidem laborum nesciunt vero in? Ab amet voluptatem distinctio sapiente. Ex magni deserunt odit id repudiandae sint, earum tempora dolor!
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
            type="button"
          >
            Call to action
            <svg className="bi ms-2" width="24" height="24"></svg>
          </button>
        </div>
      </div>
    );
  }
  export default Jumbotrone;
  