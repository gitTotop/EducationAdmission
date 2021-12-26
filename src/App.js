import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import Navbar from "./Components/Navbar";
import Programs from "./Components/Programs";
import Footer from "./Components/Footer";
import Admission from "./Components/Admission";
import Universities from "./Components/Universities";
import ContactUs from "./Components/ContactUs";

class App extends Component {
  render() {
    return (
      // <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Programs" element={<Programs />}></Route>
          <Route exact path="/Admission" element={<Admission />}></Route>
          <Route exact path="/Universities" element={<Universities />}></Route>
          <Route exact path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      // </div>
    );
  }
}

export default App;
