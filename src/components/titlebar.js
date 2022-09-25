import React from 'react'

import { useNavigate } from 'react-router-dom'

import {
  TitleBarDiv,
  TitleBarContainer,
  Left,
  Mid,
  Right,
  TitleButton,
  BackIconButtonDiv,
  BackIconButton,
  SettingsIconButtonDiv,
  SettingsIconButton,
} from '../styles/components/titlebar'

function TitleBar(props) {
  const page = props.page
  const navigate = useNavigate()

  var left = <></>
  var mid = <></>
  var right = <></>

  switch (page) {
    case 'Memory Recall':
      mid = <TitleButton>{page}</TitleButton>
      right = (
        <SettingsIconButtonDiv onClick={goToSettings}>
          <SettingsIconButton />
        </SettingsIconButtonDiv>
      )
      break
    case 'Settings':
      left = (
        <BackIconButtonDiv onClick={goToMCGame}>
          <BackIconButton />
        </BackIconButtonDiv>
      )
      mid = <TitleButton>{page}</TitleButton>
      break
    case 'Add New Item':
      left = (
        <BackIconButtonDiv onClick={goToSettings}>
          <BackIconButton />
        </BackIconButtonDiv>
      )
      mid = <TitleButton>{page}</TitleButton>
      break
    default:
      break
  }

  function goToSettings() {
    navigate('/settings')
  }

  function goToMCGame() {
    navigate('/')
  }

  return (
    <>
      <TitleBarDiv>
        <TitleBarContainer>
          <Left>{left}</Left>
          <Mid>{mid}</Mid>
          <Right>{right}</Right>
        </TitleBarContainer>
      </TitleBarDiv>
    </>
  )
}

export default TitleBar
