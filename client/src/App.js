import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../src/views/Home.jsx";
import Footer from "./components/Footer/index.jsx";
import Header from './components/Header/index.jsx';

function App() {
  return (
    <div className="App">
      <Router>
<Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
