import React from "react";
import HeaderImage from "../../src/images/headerimage.png";

import { FaHome, FaUser, FaFolderOpen, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";

//Destructuring
export default function Header({currentPage, handlePageChange}) {

  const faStyle = { color: "black", padding: "10px", fontSize: "3em" };
  const fontStyle ={ fontweight: "bold" };
  const headercolor ={color: "4A718B"}

  return (
    <div id="header" style={headercolor}>
       <nav className="navbar navbar-expand-lg navbar-light bg-light" style={headercolor}>
         <a className="navbar-brand" href="#about"  style={fontStyle} onClick={() => handlePageChange("About")}>
           <div className= "bi d-block mx-auto mb-1"><FaHome style={faStyle}/></div>
           Sowmya Nagayya
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={headercolor}>
          <div className="navbar-nav">
            <a className="nav-link" href="#about" onClick={() => handlePageChange("About")} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            <div className="bi d-block mx-auto mb-1"><FaUser style={faStyle}/></div>
              About
            </a>
            <a className="nav-link" href="#portfolio#" onClick={() => handlePageChange("Portfolio")} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
              <div className="bi d-block mx-auto mb-1"><FaFolderOpen style={faStyle}/></div>
              Portfolio
            </a>
            <a className="nav-link" href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
              <div className="bi d-block mx-auto mb-1"><FaFileAlt style={faStyle}/></div>
              Resume
            </a>
            <a className="nav-link" href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              <div className="bi d-block mx-auto mb-1"><FaEnvelopeOpenText style={faStyle}/></div>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}