import React from "react";
import '../App.css';


import {Sentry } from "react-activity";
import "react-activity/dist/library.css";

const Loader = () => {
  return (
    <div className="loading">
    <section className="">
  {/* <Dots size={70}/> */}
  <Sentry size={40} className="mx-auto mt-auto" color="blue"/>
  </section>
  </div>
  )
};

// render(<Loader />, document.getElementById("app-container"));
export default Loader;