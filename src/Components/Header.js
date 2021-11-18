import React from "react";

//Destructuring
export default function Header({currentPage, handlePageChange}) {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#about" onClick={() => handlePageChange("About")}>Sowmya Nagayya</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#about" onClick={() => handlePageChange("About")} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            <a class="nav-link" href="#portfolio#" onClick={() => handlePageChange("Portfolio")} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            <a class="nav-link" href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            <a class="nav-link" href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}