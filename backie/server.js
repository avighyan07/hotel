const bcrypt = require('bcryptjs');  // Import bcrypt for password hashing
const jwt = require('jsonwebtoken');  // Import jsonwebtoken for JWT
const mongoose = require('mongoose');
const JWT_SECRET = 'aviisagoodboy';

const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors package
const multer=require('multer')
const app = express();
const upload = multer({ dest: 'uploads/' });

require('dotenv').config()



// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

mongoose.connect("mongodb://localhost:27017", {
  dbName: "project2",
})
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
      next();
    } else {
      res.redirect("/login"); // Redirect to login page if not authenticated
    }
  };
  


app.get("/", (req, res) => {
    res.send("Welcome to the homepage!");
}); 


//////////////////////////////////////////////  contact page ////////////////////////////////////////////////////////////////////////////////////


// Handle POST requests to /contact
app.post("/contact", (req, res) => {
    const { name, email,message  } = req.body;

    // Do something with the name, email, and message
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send a response
    res.status(200).json({ message: 'Data received successfully' });
});








//////////////////////////////////////////////  booking page ////////////////////////////////////////////////////////////////////////////////////





// // file upload
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   });
  
//   const upload = multer({ storage: storage });
  
//   // Handle POST requests to /book
//   app.post("/book", upload.single('file'), (req, res) => {
//     const { name, email, room, guests, arrivalDate, departureDate } = req.body;
  
//     // File uploaded by multer is available at req.file
  
//     // Do something with the form data
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Room Type:', room);
//     console.log('Number of Guests:', guests);
//     console.log('Arrival Date:', arrivalDate);
//     console.log('Departure Date:', departureDate);
  
//     // If you need to access the file details:
//     if (req.file) {
//       console.log('File:', req.file.originalname);
//       console.log('File path:', req.file.path);
//     }
  
//     // Send a response
//     res.status(200).json({ message: 'Booking request received successfully' });
//   });
  


mongoose.connect("mongodb://localhost:27017", {
  dbName: "project2",
})
  .then(() => console.log("Database Connected Again"))
  .catch((e) => console.log(e));

const detailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  room: String,
  guests: Number,
  arrivalDate: Date,
  departureDate: Date,
  filePath: String,
});

const Details = mongoose.model('Details', detailsSchema);

app.post('/book', upload.single('file'), async (req, res) => {
  try {
    const { name, email, room, guests, arrivalDate, departureDate } = req.body;

    const newDetails = new Details({
      name,
      email,
      room,
      guests,
      arrivalDate,
      departureDate,
      filePath: req.file ? req.file.path : '',
    });

    await newDetails.save();

    res.status(200).json({ message: 'Booking request received successfully' });
  } catch (error) {
    console.error('Error storing booking details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




//////////////////////////////////////////////  signup page ////////////////////////////////////////////////////////////////////////////////////

app.post("/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ email: email });
  
      if (existingUser) {
        // User already exists, handle accordingly
        
            return res.status(400).json({ success: false, error: "duplicate email" });
           
      } else {
        // User doesn't exist, create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          name: name,
          email: email,
          password: hashedPassword,
        });
  
        const data = {
            user: {
              id: user.id
            }
          };
          const authtoken = jwt.sign(data, JWT_SECRET);
      
          // Send a JSON response to the client with the created user and token
          res.status(200).json({ success: true, authtoken });
        }
     } catch (err) {
          // If there's an error during user creation, log the error and return a 500 Internal Server Error response
          console.error(err);
          console.log(errors.array());
          res.status(500).json({ success: false, error: "Error creating user" });
        }
  });
  
  app.listen(5000, () => {
    console.log("Server is working fine");
  });
  


  //////////////////////////////////////////////  login page ////////////////////////////////////////////////////////////////////////////////////



  app.post("/login", async (req, res) => {
   
      const {  email, password } = req.body;
      const existingUser = await User.findOne({ email: email });
    try {
        // Find the user with the provided email
        let user = await User.findOne({ email });
        if (!user) {
          success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
  
        // Compare the provided password with the hashed password in the database
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          success = false
          return res.status(400).json({ success, error: "Please try to login with correct credentials" });
            
        }
  
        // Create a JWT token and send it in the response
        const data = {
            user: {
                id: user.id
            }
        };
        
        const authtoken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({ success: true, authtoken });
        // res.json({ authtoken });
  
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  });
  