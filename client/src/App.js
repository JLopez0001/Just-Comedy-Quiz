import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/homePage/home.js';
import QuizPage from './pages/quizPage/quiz.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/questions/comedian-quiz" element={<QuizPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
