import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Question1 from "./pages/question1";
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Bday from './pages/Bday';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/question1' element={<Question1 />} />
            <Route path='/question2' element={<Question2 />} />
            <Route path='/question3' element={<Question3 />} />
            <Route path='/bday' element={<Bday />} />
        </Routes>
    )
}

export default App