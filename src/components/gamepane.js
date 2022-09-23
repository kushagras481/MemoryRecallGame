import React, { useState } from 'react'

import ImageViewer from './imageviewer'
import QuestionSection from './questionsection'
import MCOptions from './mcoptions'
import CurrentStatus from './currentstatus'

import { GameDiv, LeftPane, RightPane } from '../styles/components/gamepane'

function GamePane(props) {
  const gameData = props.gameData
  const setLoaded = props.setLoaded

  const [selectedAnswer, setSelectedAnswer] = useState(0)
  const [revealAnswer, setRevealAnswer] = useState(false)

  return (
    <>
      <GameDiv>
        <LeftPane>
          <ImageViewer src={gameData.img_path} />
          <QuestionSection question={gameData.question} />
        </LeftPane>
        <RightPane>
          <MCOptions
            options={gameData.options}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            correctAnswerId={gameData.correct_answer_id}
            revealAnswer={revealAnswer}
          />
          <CurrentStatus
            selectedAnswer={selectedAnswer}
            correctAnswerId={gameData.correct_answer_id}
            setLoaded={setLoaded}
            revealAnswer={revealAnswer}
            setRevealAnswer={setRevealAnswer}
          />
        </RightPane>
      </GameDiv>
    </>
  )
}

export default GamePane
