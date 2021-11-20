import React from "react";
import HeaderImage from "../images/headerimage.png";

import { FaHome, FaUser, FaFolderOpen, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";

//Destructuring
export default function Header({currentPage, handlePageChange}) {

  const faStyle = { color: "black", padding: "5px", fontSize: "1.5em" };
  const fontStyle ={ textDecoration:"none", fontSize:"20px"};

  return (
    <div id="header" className="w-100" style={{backgroundImage:`url(${HeaderImage})`,backgroundSize:"cover"}}>
       <nav className="navbar navbar-expand-lg navbar-dark ">
         <a className="nav-link" href="#about" style={{fontSize:"30px", color:"black", fontFamily:"lato, san-serif", fontStyle:"unset",}} onClick={() => handlePageChange("About")}>
           <div className= "bi d-block mx-auto mb-1"><FaHome style={faStyle}/>
         
           </div>
           Sowmya Nagayya
         </a>
       

         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         &nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#about" style={fontStyle} onClick={() => handlePageChange("About")} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            <div className="bi d-block mx-auto mb-1"><FaUser style={faStyle}/></div>
              About
            </a>
            <a className="nav-link" href="#portfolio#" style={fontStyle} onClick={() => handlePageChange("Portfolio")} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
              <div className="bi d-block mx-auto mb-1"><FaFolderOpen style={faStyle}/></div>
              Portfolio
            </a>
            <a className="nav-link" href="#resume" style={fontStyle} onClick={() => handlePageChange("Resume")} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
              <div className="bi d-block mx-auto mb-1"><FaFileAlt style={faStyle}/></div>
              Resume
            </a>
            <a className="nav-link" href="#contact" style={fontStyle} onClick={() => handlePageChange("Contact")} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              <div className="bi d-block mx-auto mb-1"><FaEnvelopeOpenText style={faStyle}/></div>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}