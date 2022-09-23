import React, { useState } from 'react'

import {
  MCOptionContents,
  MCOptionTextDiv,
  MCOptionText,
} from '../styles/components/mcoption'

function MCOption(props) {
  const optionData = props.optionData
  const selectedAnswer = props.selectedAnswer
  const setSelectedAnswer = props.setSelectedAnswer
  const correctAnswerId = props.correctAnswerId
  const revealAnswer = props.revealAnswer

  const locked = selectedAnswer !== 0

  const [hover, setHover] = useState(false)

  var styles = {}

  if (revealAnswer && optionData.id === correctAnswerId) {
    styles = { backgroundColor: '#b3ffb3' }
  }

  if (selectedAnswer === optionData.id) {
    if (selectedAnswer === correctAnswerId) {
      styles = { backgroundColor: '#b3ffb3' }
    } else {
      styles = { backgroundColor: '#fccfcf' }
    }
  }

  if (hover) {
    styles = { backgroundColor: '#e8e8e8' }
  }

  function select() {
    if (!locked) {
      setHover(false)
      setSelectedAnswer(optionData.id)
    }
  }

  function showHover() {
    if (!locked) {
      setHover(true)
    }
  }

  function hideHover() {
    if (!locked) {
      setHover(false)
    }
  }

  return (
    <>
      <MCOptionContents
        id={optionData.id}
        onClick={() => select()}
        style={styles}
        onMouseEnter={() => showHover()}
        onMouseLeave={() => hideHover()}
      >
        <MCOptionTextDiv>
          <MCOptionText>{optionData.option}</MCOptionText>
        </MCOptionTextDiv>
      </MCOptionContents>
    </>
  )
}

export default MCOption
