import { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects"

import "./App.css";

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/moi" element={<HomePage />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="*" element={<Navigate to="/moi" replace />}/>
        </Routes>
      </div>
    );
  }
}
