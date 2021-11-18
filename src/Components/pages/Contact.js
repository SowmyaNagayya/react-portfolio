import React, { useState } from 'react';

// Here we import a helper function that will check if the name,email,message is valid
import { validateName, validateEmail, validateMessage } from '../../utils/helpers';

export default function Contact() {
  //setting their initial values to an empty string
  const defaultFormValues = { name: "", email: "", message: ""}

  const [ formData, setFormData ] = useState(defaultFormValues);
  const [errorMessage, setErrorMessage] = useState('');

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
      setErrorMessage("Please Enter Your Name.");
    }
    if(!validateEmail(formData.email)) {
      setErrorMessage("Please Enter a Valid Email Address.");
    }
    if(!validateMessage(formData.message)) {
      setErrorMessage("Please include a message.");
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFormData(defaultFormValues);
    
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="text-center">Contact Me</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input type="text" value={formData.name} name="name" onChange={handleInputChange} />
            </div>
            <p id="nameError">{errorMessage}</p>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email Address</label>
              <input value={formData.email} type="text" name="email" onChange={handleInputChange} />
            </div>
            <p id="emailAddressError">{errorMessage}</p>
            <div className="mb-3">
              <label htmlFor="messageText" className="form-label">Message</label>
              <textarea value={formData.message} type="text" name="message" onChange={handleInputChange} />
            </div>
            <p id="messageError">{errorMessage}</p>
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

