import NotesApp from "./components/NotesApp/NotesApp.js";
import React from 'react'
import {Accordion} from "./components/Accordion/Accordion.js";
import ColorPalette from "./components/ColorPalette/ColorPalette.js";
import Budgets from "./components/Budgets/Budgets.js";
import Home from "./components/Home/Home.js";
import Navbar from "./Navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp/TodoApp.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
           <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/colorpalette" element={<ColorPalette />} />
            <Route exact path="/budgets" element={<Budgets />} />
            <Route exact path="/Accordion" element={<Accordion />} />
            <Route exact path="/notesapp" element={<NotesApp />} />
            <Route exact path="/todos" element={<TodoApp />} />
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
