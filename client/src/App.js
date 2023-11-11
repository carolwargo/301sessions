import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../src/views/Home.jsx";
import Footer from "./components/Footer/index.jsx";
import Header from './components/Header/index.jsx';
import Sessions from './components/Sessions.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Sessions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
