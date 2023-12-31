// // src/Book.jsx
// import React, { useState } from 'react';
// import '../Styling/Book.css';
// import { useNavigate } from 'react-router-dom';


// const Book = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     room: 'single',
//     guests: 1,
//     arrivalDate: '',
//     departureDate: '',
//     file: null, // Add a file property to the formData state
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       file: e.target.files[0], // Store the selected file in the state
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make a POST request to your backend with form data
//       const response = await fetch('http://localhost:5000/book', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Handle success, e.g., show a success message or redirect
//         navigate('/');
//         alert("Congratulations")
//         console.log('Booking request sent successfully');
//       } else {
//         // Handle error, e.g., show an error message
//         console.error('Error sending booking request');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1 id="hd">Hotel Booking</h1>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           className="input-field"
//           type="text"
//           name="name"
//           id="Name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           className="input-field"
//           type="text"
//           name="email"
//           id="email"
//           placeholder="Email address or phone number"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor="room">Room Type:</label>
//         <select
//           className="input-field"
//           name="room"
//           id="room"
//           value={formData.room}
//           onChange={handleInputChange}
//         >
//           <option value="single">Single Bed</option>
//           <option value="double">Double Bed</option>
//           <option value="family">Family Bed</option>
//         </select>

//         <label htmlFor="guests">Number of Guests:</label>
//         <input
//           className="input-field"
//           type="number"
//           name="guests"
//           id="guests"
//           placeholder="Enter number of guests"
//           value={formData.guests}
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor="arrivalDate">Arrival Date:</label>
//         <input
//           className="input-field"
//           type="date"
//           name="arrivalDate"
//           id="arrivalDate"
//           value={formData.arrivalDate}
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor="departureDate">Departure Date:</label>
//         <input
//           className="input-field"
//           type="date"
//           name="departureDate"
//           id="departureDate"
//           value={formData.departureDate}
//           onChange={handleInputChange}
//           required
//         />

//  <label htmlFor="file">Upload Aadhar Card or any other Identity Proof</label>
//         <input
//           className="input-field"
//           type="file"
//           name="file"
//           id="file"
//           onChange={handleFileChange}
//         />

//         <button type="submit" className="submit-button">
//           Book My Rooms
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Book;
// src/Book.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Book.css';

const Book = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    room: 'single',
    guests: 1,
    arrivalDate: '',
    departureDate: '',
    file: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { name, email, room, guests, arrivalDate, departureDate, file } = formData;
  
      const formDataForRequest = new FormData();
      formDataForRequest.append('name', name);
      formDataForRequest.append('email', email);
      formDataForRequest.append('room', room);
      formDataForRequest.append('guests', guests);
      formDataForRequest.append('arrivalDate', arrivalDate);
      formDataForRequest.append('departureDate', departureDate);
      formDataForRequest.append('file', file);
  
      const response = await fetch('http://localhost:5000/book', {
        method: 'POST',
        body: formDataForRequest,
      });
  
      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        navigate('/');
        alert('Congratulations! Booking request sent successfully');
        console.log('Booking request sent successfully');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error sending booking request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1 id="hd">Hotel Booking</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          className="input-field"
          type="text"
          name="name"
          id="Name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          className="input-field"
          type="text"
          name="email"
          id="email"
          placeholder="Email address or phone number"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="room">Room Type:</label>
        <select
          className="input-field"
          name="room"
          id="room"
          value={formData.room}
          onChange={handleInputChange}
        >
          <option value="single">Single Bed</option>
          <option value="double">Double Bed</option>
          <option value="family">Family Bed</option>
        </select>

        <label htmlFor="guests">Number of Guests:</label>
        <input
          className="input-field"
          type="number"
          name="guests"
          id="guests"
          placeholder="Enter number of guests"
          value={formData.guests}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="arrivalDate">Arrival Date:</label>
        <input
          className="input-field"
          type="date"
          name="arrivalDate"
          id="arrivalDate"
          value={formData.arrivalDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="departureDate">Departure Date:</label>
        <input
          className="input-field"
          type="date"
          name="departureDate"
          id="departureDate"
          value={formData.departureDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="file">Upload Aadhar Card or any other Identity Proof</label>
        <input
          className="input-field"
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
        />

        <button type="submit" className="submit-button">
          Book My Rooms
        </button>
      </form>
    </div>
  );
};

export default Book;
