import React, { useState } from 'react';
import './App.css';


function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameChange = (e) => {
    setValues({...values, firstName: e.target.value})
  }
  const handleLastNameChange = (e) => {
    setValues({...values, lastName: e.target.value})
  }
  const handleEmailChange = (e) => {
    setValues({...values, email: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setValid(true);
    if(values.firstName && values.lastName && values.email) {
    } 
    
  }

  // 

  return (
    <div className="App">
      <form  className="form-wrapper" onSubmit={handleSubmit}>
        { submitted && valid ? <div className="success-message">Success! Thank you for registering!</div> : null }
        <input 
          onChange={handleFirstNameChange}
          value={values.firstName}
          className="form-input"
          type="text" 
          name="firstName" 
          placeholder="Enter first name"/>
          {submitted && !values.firstName ? <span>Enter first name</span> : null}
        <input 
          onChange={handleLastNameChange}
          value={values.lastName}
          className="form-input"
          type="text" 
          name="lastName" 
          placeholder="Enter last name"/>
          {submitted && !values.lastName ? <span>Enter last name</span> : null}
        <input 
          onChange={handleEmailChange}
          value={values.email}
          className="form-input"
          type="text" 
          name="email" 
          placeholder="Enter email"/>
          {submitted && !values.email ? <span>Enter email</span> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
