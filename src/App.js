import React from "react";
import "./App.css"; // Import custom CSS styles for the App component
import Display from "./Display"; // Import the Display component
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS for styling
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript for functionality (e.g., modals, tooltips)

// Main App component
function App() {
  return (
    <div className="App"> {/* Wrapper div with className 'App' */}
      <Display /> {/* Render the Display component */}
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
