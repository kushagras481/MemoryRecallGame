import React from 'react'

import { QuestionDiv, QuestionText } from '../styles/components/questionsection'

function QuestionSection(props) {
  const question = props.question
  return (
    <>
      <QuestionDiv>
        <QuestionText>{question}</QuestionText>
      </QuestionDiv>
    </>
  )
}

export default QuestionSection
