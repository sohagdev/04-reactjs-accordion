import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ item }) => {
  const { title, info } = item
  const [toggleQuestions, setToggleQuestions] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => setToggleQuestions(!toggleQuestions)}
        >
          {toggleQuestions ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggleQuestions && <p>{info}</p>}
    </article>
  )
}

export default Question
