// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Styling/Contact.css';


// const Contact = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Navigate to the home page
//     navigate('/');
//   };

//   return (
//     <div className="contact">
//       <h1>Contact Us</h1>
//       <p>Have questions, suggestions, or feedback? Reach out to us!</p>

//       <form>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" required />

//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" required />

//         <label htmlFor="message">Message:</label>
//         <textarea id="message" name="message" rows="4" required></textarea>

//         <button type="submit" onClick={handleClick}>Submit</button>
//       </form>

//       <div id="social-media">
//         <p >Connect with us on social media:</p>
//         <ul id="ok">
//           <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
//           <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
//           <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a></li>

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend with form data
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        console.log('Form data sent successfully');
        navigate('/');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error sending form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have questions, suggestions, or feedback? Reach out to us!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div id="social-media">
        <p>Connect with us on social media:</p>
        <ul id="ok">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
