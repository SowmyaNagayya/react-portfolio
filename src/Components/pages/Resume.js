import React from 'react';
import resume from "../../images/Sowmya_resume.pdf";

export default function Resume() {

  // Store proficiencies in array to list out
  const proficiencies = {
    frontend: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "React", "JSON"],
    backend: ["APIs", "Node", "Express", "Routing", "MySQL, Sequelize", "MongoDB, Mongoose", "Axios"]
  };

  //Render Resume Page
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <h2 className="text-center mb-3">Resume</h2>

          <div className="col-3 text-center mt-2">
            <button className="btn" data-bs-toggle="collapse" href="#collapseExample">View Resume</button>
          </div>

          <div className="col-3 text-center">
            <button className="btn"><a className="btn" href={resume} download="Sowmya Nagayya - Resume">Download</a></button>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <div id="collapseExample" className="collapse">
            <embed src={resume} width="500px" height="650px" />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6">
            <h4 className="mb-5 text-center">Proficiencies</h4>
          </div>
        </div>

        <div className="row">
          <div className="col mx-5">
            <h5 className="text-center">Front End</h5>
            <ul className="list-group">
              {proficiencies.frontend.map((proficiencies, i) => {
                return (
                  <li className="list-group-item text-center" key={i}>
                    {proficiencies}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="col mx-5">
            <h5 className="text-center">Back End</h5>
            <ul className="list-group">
              {proficiencies.backend.map((proficiencies, i) => {
                return (
                  <li className="list-group-item text-center" key={i}>
                    {proficiencies}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}