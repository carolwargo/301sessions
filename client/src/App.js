import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../src/views/Home.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
