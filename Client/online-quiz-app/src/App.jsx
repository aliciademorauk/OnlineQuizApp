import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddQuestion from './components/question/AddQuestion'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <main className='container mt-5 mb-5'>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
					<Route path="/quiz-stepper" element={<QuizStepper />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />

					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
