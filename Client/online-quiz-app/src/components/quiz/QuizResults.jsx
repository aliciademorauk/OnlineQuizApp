import React from 'react'
import { useLocation } from 'react-router-dom'

const QuizResults = () => {
    const location = useLocation
    const {quizQuestions, totalScore} = location.state
    const numOfQuestions = quizQuestions.length
    const percentScore = Math.round((totalScore/numOfQuestions) * 100)
    const handleRetake = () => {
        alert('Oops, this didn\'t work...')
    }
  return (
    <section className='container mt-5'>
        <h3>Your Quiz Summary</h3>
        <hr/>
        <h5>You answered {totalScore} correctly out of {numOfQuestions} questions.</h5>
        <p>Your score is {percentScore}%.</p>
        <button 
        className='btn-primary btn-sm'
        onClick={handleRetake}>
            Retake Quiz
        </button>
    </section>
  )
}

export default QuizResults