// import React from 'react';
// import '../Styling/Signup.css';

// const Signup = () => {
//   return (
//     <div className="login-container">
//       <form method="post" action="/signup">
//         <input className="input-field" type="text" name="name" id="Name" placeholder="Name" />
//         <input className="input-field" type="text" name="email" id="email" placeholder="Email address or phone number" />
//         <input className="input-field" type="password" name="password" id="password" placeholder="Password" />
//         <button type="submit" className="submit-button">Create New Account</button>
//       </form>
//       <hr />
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Signup.css';
const Signup = () => {
    const navigate = useNavigate();
    
    const [credentials, setCredentials] = useState({ name:'',email: '', password: '' });

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { name, email, password } = credentials;
      
      try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const json = await response.json();

        if (response.ok) {
          console.log('User created successfully');
          navigate('/'); // Redirect to the login page
      } else if (!json.success && json.error === 'duplicate email') {
          console.error('Duplicate email. Redirecting to login page.');
          navigate('/login'); // Redirect to the login page
      } else {
          console.error('Signup failed:', json.message);
          alert('Signup failed. Please check your input and try again.');
      }} catch (error) {
        console.error('Error during form submission:', error);
        alert('An error occurred during form submission. Please try again.');
    } 
  };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        
    };

    return (
      <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="input-field"
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="nameHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="input-field"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="input-field"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Create New Account
        </button>
      </form>
      <hr />
    </div>
    );
};

export default Signup;
