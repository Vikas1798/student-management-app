import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <h1> Ooops...! Page not found</h1>
            <br />
            <Link to="/">
              {" "}
              <button className="btn btn-primary">Home Page </button>
            </Link>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default Pagenotfound;
