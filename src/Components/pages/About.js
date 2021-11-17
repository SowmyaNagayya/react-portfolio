import React from "react";

export default function About() {
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col">
                    <h1 className="text-center">About Me</h1>
                </div>
            </div>
            
            {/* My Image with Text */}
            <div className="row mb-4 justify-content-center">
                <div className="col-md-auto">
                    <img src="" className="rounded-circle my-4 img-responsive center-block d-block mx-auto" alt="Sowmya Pic" title="Sowmya Nagayya"/>
                </div>
            </div>
          
            <div className="row mx-3">
                <h6 className="my-5 text-center">My name is Sowmya and I'm a Computer Science Engineering graduate of the Vishweshwaraya University, Karnataka, India</h6>
                <p className="mb-4">
                    I'm currently taking a Web Development Bootcamp to continue to learn new technologies and build on my skillset while I apply to full-time roles.
                </p>
                <p className="mb-4">
                    I'm currently taking a Web Development Bootcamp to continue to learn new technologies and build on my skillset while I apply to full-time roles.
                </p>
                <p className="mb-4">
                    I'm currently taking a Web Development Bootcamp to continue to learn new technologies and build on my skillset while I apply to full-time roles.
                </p>
                <p className="mb-4">
                    When I don't have VSCode pulled up, do exercise or play with my Boy.
                </p>
            </div>
        </div>
    )
}