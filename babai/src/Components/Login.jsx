import React from 'react'

const Login = () => {
  return (
       <div class="login-container">
        <form method="post" action="/login">
           
            <input class="input-field" type="text" name="email" id="email" placeholder="Email address or phone number" />
            <input class="input-field" type="password" name="password" id="password" placeholder="Password"/>
            <button type="submit" class="submit-button">Log In</button>
        </form>
        <hr />
        
    </div>
    
  );
};

export default Login
