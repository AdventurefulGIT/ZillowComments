// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Page Component
const Home = () => {
  return (
    <div className="page">
      <h1>Hello, World!</h1>
      <p>Welcome to the home page.</p>
    </div>
  );
};

// About Page Component
const About = () => {
  return (
    <div className="page">
      <h1>About</h1>
      <p>This is a simple React app with React Router.</p>
    </div>
  );
};

// Contact Page Component
const Contact = () => {
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>Get in touch with us at example@example.com</p>
    </div>
  );
};

// Not Found (404) Page Component
const NotFound = () => {
  return (
    <div className="page">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Hello World App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;