// import { Heading } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Book from './Components/Book';
import Footer from './Components/Footer';
// Example component to be rendered for the route
// const Home = () => <div>Home Component</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Specify a path and the component to be rendered */}
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
