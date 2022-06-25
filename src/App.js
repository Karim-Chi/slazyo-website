
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        
        <Router>
      <Navbar />
     
      <Routes>
      <Route path="/" element={< Home />} />
          <Route path="About" element={< About />} />
          <Route path="Menu" element={< Menu />} />
          <Route path="Contact" element={< Contact />} />
          <Route path="Login" element={ Login } /> 
          <Route path="*" element={< ErrorPage />} />
      </Routes>
   </Router>
   <Footer/>
    </div>
  );
}

export default App;
