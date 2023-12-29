import React from 'react'
import '../Styling/Book.css';

const Book = () => {
  return (
    <div>
 <h1 id="hd">Hotel Booking</h1>     




 <form method="post" action="/signup">

 <input className="input-field" type="text" name="name" id="Name" placeholder="Name" />

 <input className="input-field" type="text" name="email" id="email" placeholder="Email address or phone number" />

 <label for="rooms" >Room Type </label>
        <select id="room" name="room" >
            <option value="single" >Single Bed</option>
            <option value="double">Double Bed</option>
            <option value="family">Family Bed</option>
           
        </select>
        <label for="guests">Number of Guests</label>
        <input class="input-field" type="number" name="guests" id="guests" placeholder="Enter number of guests" />

        <label for="arrivalDate">Arrival Date</label>
        <input class="input-field" type="date" name="arrivalDate" id="arrivalDate" />
        <label for="departureDate">Departure Date</label>
        <input class="input-field" type="date" name="departureDate" id="departureDate" />
        <label for="file">Upload Aadhar Card or any other Identity Proof</label>
        <input class="input-field" type="file" name="file" id="file" />

        <button type="submit" className="submit-button">Book My Rooms</button>
 </form>
 
    </div>
  )
}

export default Book
