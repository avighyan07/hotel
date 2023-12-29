import React from 'react';
import '../Styling/Signup.css';

const Signup = () => {
  return (
    <div className="login-container">
      <form method="post" action="/signup">
        <input className="input-field" type="text" name="name" id="Name" placeholder="Name" />
        <input className="input-field" type="text" name="email" id="email" placeholder="Email address or phone number" />
        <input className="input-field" type="password" name="password" id="password" placeholder="Password" />
        <button type="submit" className="submit-button">Create New Account</button>
      </form>
      <hr />
    </div>
  );
};

export default Signup;
