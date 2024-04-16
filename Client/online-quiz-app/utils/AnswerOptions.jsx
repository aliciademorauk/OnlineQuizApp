import React from 'react'

const AnswerOptions = ({question, isChecked, handleChangeAnswer, handleChangeCheckbox}) => {
    if (!question) {
        return <div>No questions available.</div>
    }

    const {id, questionType, choices} = question

    if (questionType === 'single') {
    return (
    <div>
        {choices.sort().map((choice, index) => (
            <div key={choice} className='form-check mb-3'>
                <input
                    className='form-check-input'
                    type='radio'
                    id={choice}
                    value={choice}
                    checked={isChecked(question.id, choice)}
                    onChange={() => handleChangeAnswer(id, choice)}/>
                <label htmlFor={choice} className='form-check-label ms-2'>{`${index + 1}. ${choice}`}</label>
            </div>
        ))}
    </div>
  )} else if (questionType === 'multiple') {
    return (
    <div>
        <p>Select all that apply:</p>
        {choices.sort().map((choice, index) => (
            <div key={choice} className='form-check mb-3'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    id={choice}
                    value={choice}
                    name={question.id}
                    checked={isChecked(question.id, choice)}
                    onChange={() => handleChangeCheckbox(id, choice)}/>
                <label className='form-check-label ms-2'>{`${index + 1}. ${choice}`}</label>
            </div>
        ))}
    </div>
    )
  } else {
    return null
  }
}

export default AnswerOptions