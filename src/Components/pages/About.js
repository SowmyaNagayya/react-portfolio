import React from 'react';
import myPic from "../../images/sowmya.jpg";
import myStyle from "../styles/main.css";
export default function About() {

  //style for profile images
  const myPicStyle = {
    maxHeight:'300px',
    maxWidth:'300px'
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col">
          <h1 className="text-center">About Me</h1>
        </div>
      </div>     
      
      <div className="row mb-4 justify-content-center">
        <div className="col-md-auto">
          <img src={myPic} className="rounded-circle my-4 img-responsive center-block d-block mx-auto" alt="Sowmya Pic" style={myPicStyle}/>
        </div>
      </div>

      <div className="row mx-3">
        <h6 className="my-5 text-center" style={{fontSize:"20px"}}>My name is Sowmya Nagayya and I'm a Computer Science Engineer of the Vishveshwaraya University, Karnataka, India</h6>
        <p className="mb-4">I am passionate about building large scale web applications using latest technologies.</p>
        <p className="mb-4">I attended bootcamp trainings from University of Minnesota, Minneapolis.
        Where I learned about building web applications using web technologies such as HTML, Javascripting, jQuery, Node, ReactJS. </p>
        <p className="mb-4">CSS and bootstrap were the tools I used for designing and styling my front end pages for my training projects. </p>
        <p className="mb-4">I am very much impressed working with ReactJS, on its boootup speed, and ready available plugins to build lot of features. Its Robustness  </p>
      </div>
    </div>
  );
}
