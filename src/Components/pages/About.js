import React from 'react';
import myPic from "../../images/sowmya.jpg"

export default function About() {

  //style for profile image
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
      
      <div class="row mb-4 justify-content-center">
        <div className="col-md-auto">
          <img src={myPic} className="rounded-circle my-4 img-responsive center-block d-block mx-auto" alt="Sowmya Pic" style={myPicStyle}/>
        </div>
      </div>

      <div className="row mx-3">
        <h6 className="my-5 text-center">My name is Sowmya Nagayya and I'm a Computer Science Engineer of the Vishveshwaraya University, Karnataka, India</h6>
        <p className="mb-4">abc</p>
        <p className="mb-4"></p>
        <p className="mb-4"></p>
        <p className="mb-4"></p>
      </div>
    </div>
  );
}
