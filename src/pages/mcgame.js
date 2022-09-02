import React from 'react'

import TitleBar from '../components/titlebar'
import GamePane from '../components/gamepane'

import { HeaderDiv, ComponentsDiv } from '../styles/pages/base'

function MCGame() {
  var gameData = {
    img_path: 'shauryas.jpg',
    question: 'Who is this?',
  }
  return (
    <>
      <HeaderDiv>
        <TitleBar page="Memory Recall" />
      </HeaderDiv>
      <ComponentsDiv>
        <GamePane gameData={gameData} />
      </ComponentsDiv>
    </>
  )
}

export default MCGame
