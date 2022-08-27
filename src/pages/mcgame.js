import React from 'react'

import TitleBar from '../components/titlebar'
import { HeaderDiv, ComponentsDiv } from '../styles/pages/base'
import { ImageDiv, AnswersDiv } from '../styles/pages/mcgame'

function MCGame(props) {
  return (
    <>
      <HeaderDiv>
        <TitleBar page="Memory Recall" />
      </HeaderDiv>
      <ComponentsDiv>
        <ImageDiv></ImageDiv>
        <AnswersDiv></AnswersDiv>
      </ComponentsDiv>
    </>
  )
}

export default MCGame
