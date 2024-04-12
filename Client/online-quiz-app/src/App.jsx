import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import QuizStepper from './components/quiz/QuizStepper'
import Quiz from './components/quiz/Quiz'
import QuizResults from './components/quiz/QuizResults'
import GetAllQuestions from './components/quiz/GetAllQuestions'
import AddQuestion from './components/question/AddQuestion'
import UpdateQuestion from './components/question/UpdateQuestion'
import NavBar from './components/layout/NavBar'
import Admin from './components/Admin'

function App() {
  return (
    <main className='container mt-5 mb-5'>
      <Router>
        <NavBar />
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/quiz-stepper' element={<QuizStepper />} />
            <Route path='/take-quiz' element={<Quiz />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/create-quiz' element={<AddQuestion />} />
            <Route path='/update-quiz/:id' element={<UpdateQuestion />} />
            <Route path='/all-questions' element={<GetAllQuestions />} />
            <Route path='/quiz-result' element={<QuizResults />} />
          </Routes>
      </Router>
    </main>
  )
}

export default App
