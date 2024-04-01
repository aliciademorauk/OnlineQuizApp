import React, { useState } from 'react'
import { getQuestion, updateQuestion } from '../../../utils/QuizService'
import { useParams } from 'react-router-dom'

const UpdateQuestion = () => {
    const[question, setQuestion] = useState('')
    const[choices, setChoices] = useState([''])
    const[correctAnswers, setCorrectAnswers] = useState([''])
    const[isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetchQuestion()
    }, [])

    const fetchQuestion = async() => {
        try {
            const questionToUpdate = await getQuestion(id)
            if (questionToUpdate) {
                setQuestion(questionToUpdate.question)
                setChoices(questionToUpdate.choices)
                setCorrectAnswers(questionToUpdate.correctAnswers)
            }
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChangeQuestion = (e) => {
        setQuestion(e.target.value)
    }

    const handleChangeChoice = (index, e) => {
        const updatedChoices = [...choices]
        updatedChoices[index] = e.target.value
        setChoices(updatedChoices)
    }

    const handleChangeCorrectAnswer = (e) => {
        setCorrectAnswers(e.target.value)
    }

    const handleUpdateQuestion = async(e) => {
        e.preventDefault()
        try {
            const updatedQuestion = {
                question, 
                choices, 
                correctAnswers: correctAnswers.toString().split(',').map((answer) => answer.trim())
            }
            await updateQuestion(id, updatedQuestion)
            // To do: navigate back to All Questions
        } catch (error) {
            console.error(error)
        }
    }

    if (isLoading) {
        return <p>
            Loading...
        </p>
    }
    
  return (
    <section className='container'>
        <h4 className='mt-5' style={{color: 'GrayText'}}>Update Question</h4>
        <div className='col-md-8'>
            <form onSubmit={handleUpdateQuestion}>
                <div className='form-group'>
                    <label className='text-info'>Question</label>
                    <textarea
                    className='form-control'
                    rows={4}
                    value={question}
                    onChange={handleChangeQuestion}/>
                </div>
                <div>
                    <label className='text-info'>Choices:</label>
                    {choices.map((choice, index) => (
                        <input
                        key={index}
                        type='text'
                        className='form-control mb-4'
                        value={choice}
                        onChange={(e) => handleChangeChoice(index, e)}
                        />
                    ))}
                </div>
                <div className='form-group'>
                    <label className='text-info'>Correct Answer(s):</label>
                    <input
                    className='form-control mb-4'
                    type='text'
                    value={correctAnswers}
                    onChange={handleChangeCorrectAnswer}
                    />
                </div>
                <div className='btn-group'>
                    <button className='btn btn-outline-warning btn-sm' type='submit'>
                        Update Question
                    </button>
                    {/* To do:  */}
                </div>
            </form>
        </div>
    </section>
  )
}

export default UpdateQuestion