import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/homePage/home.jsx';
import QuizPage from './pages/quizPage/quiz.jsx';
import ResultsPage from './pages/comedianPage/comedianResults.jsx';
import ComedianInfo from './pages/comedianPage/comedianInfoPage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/questions/comedian-quiz' element={<QuizPage/>} />
          <Route path='/comedians/results' element={<ResultsPage/>} />
          <Route path='/comedians/info/:comedianName/:comedianId' element={<ComedianInfo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
