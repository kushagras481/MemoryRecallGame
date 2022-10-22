import React from 'react'

import {
  CurrentStatusDiv,
  CurrentStatusText,
  LinkText,
} from '../styles/components/currentstatus'

import { db } from '../data/db'

function CurrentStatus(props) {
  const selectedAnswer = props.selectedAnswer
  const correctAnswerId = props.correctAnswerId
  const setLoaded = props.setLoaded
  const revealAnswer = props.revealAnswer
  const setRevealAnswer = props.setRevealAnswer
  const userId = props.userId
  const questionId = props.questionId
  const saveStats = props.saveStats

  const defaultStatus = 'Select an answer.'
  const correctStatus = 'Correct answer!'
  const incorrectStatus = 'Incorrect answer.'

  var statusText = ''
  var linkText = ''

  if (selectedAnswer !== 0) {
    if (selectedAnswer === correctAnswerId) {
      statusText = correctStatus
      linkText = 'Next question'
    } else {
      statusText = incorrectStatus
      if (!revealAnswer) {
        linkText = 'Reveal answer'
      } else {
        linkText = 'Next question'
      }
    }
  } else {
    statusText = defaultStatus
  }

  function handleClick() {
    if (!revealAnswer && selectedAnswer !== correctAnswerId) {
      setRevealAnswer(true)
    } else {
      if (saveStats) {
        const datetime = new Date()
        const data = {
          username_id: userId,
          question_id: questionId,
          result: selectedAnswer === correctAnswerId ? 1 : 0, //incorrect = 0, correct = 1
          datetime: datetime.toISOString(),
        }
        db.user_stats.add(data)
      }
      var qPos = parseInt(localStorage.getItem('qPos'))
      localStorage.setItem('qPos', qPos + 1)
      setLoaded(false)
    }
  }

  return (
    <>
      <CurrentStatusDiv>
        <CurrentStatusText>
          {statusText}
          <br />
          <br />
          {selectedAnswer !== 0 && (
            <LinkText onClick={() => handleClick()}>
              {linkText} &#8594;
            </LinkText>
          )}
        </CurrentStatusText>
      </CurrentStatusDiv>
    </>
  )
}

export default CurrentStatus
