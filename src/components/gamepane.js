import React from 'react'

import ImageViewer from './imageviewer'
import QuestionSection from './questionsection'

import { GameDiv, LeftPane, RightPane } from '../styles/components/gamepane'

function GamePane(props) {
  const gameData = props.gameData

  return (
    <>
      <GameDiv>
        <LeftPane>
          <ImageViewer src={gameData.img_path} />
          <QuestionSection question={gameData.question} />
        </LeftPane>
        <RightPane></RightPane>
      </GameDiv>
    </>
  )
}

export default GamePane
