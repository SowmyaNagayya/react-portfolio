   
import React, { useState } from 'react';

// Here we import a helper function that will check if the name,email,message is valid
import { validateName, validateEmail, validateMessage } from '../../utils/helpers';

export default function Contact() {

  const contactStyle = {
    fontweight: 'bold',
    fontsize:'300px'
  }
 
  //setting their initial values to an empty string
  const defaultFormValues = { name: "", email: "", message: ""}

  const [ formData, setFormData ] = useState(defaultFormValues);
  const [errorMessage, setErrorMessage] = useState('');  
  const [errorMessageUser, setErrorUser] = useState('');
  const [errorMessageEmail, setErrorEmail] = useState('');




  const handleInputChange = (e) => {
    //copy of formData ...formData
    //modify the copy for the field that got typed into square brackets around a variable means the variable  gets evaluated first
    //used setFormData to replace the old formData with the updated one
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleFormSubmit =(e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid, if the Name is empty or if the message is empty. If so we set an error message to be displayed on the page.
    if(!validateName(formData.name)) {
      setErrorUser("Please Enter Your Name.");
    } 
    else{
      setErrorUser("");
    }
    if(!validateEmail(formData.email)) {
      setErrorEmail("Please Enter a Valid Email Address.");
    }
    else{
      setErrorEmail("");
    } 
    if(!validateMessage(formData.message)) {
      setErrorMessage("Please include a message.");
    }
    else{
      setErrorMessage("");
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFormData(defaultFormValues);
    
  }

  // Make text of error messages red
  const errorStyle = {
    color: "red"
}

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="text-center" style={contactStyle}>Contact Me</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input type="text" className="form-control" value={formData.name} name="name" placeholder="Bob"onChange={handleInputChange} />
            </div>
            
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email</label>
              <input value={formData.email} type="text" className="form-control" name="email" placeholder="Bob@mail.com" onChange={handleInputChange} />
            </div>
            
            <div className="mb-3">
              <label htmlFor="messageText" className="form-label">Message</label>
              <textarea value={formData.message} type="text" className="form-control" name="message" placeholder="Some Text Here" onChange={handleInputChange} />
            </div>
            <p style={errorStyle}>{errorMessageUser}</p>
            <p style={errorStyle}>{errorMessageEmail}</p>
            <p style={errorStyle}>{errorMessage}</p>
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
