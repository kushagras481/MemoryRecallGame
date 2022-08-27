import React from 'react'

import TitleBar from '../components/titlebar'
import { HeaderDiv, ComponentsDiv } from '../styles/pages/base'

function Settings(props) {
  const page = props.page

  return (
    <>
      <HeaderDiv>
        <TitleBar page="Settings" />
      </HeaderDiv>
      <ComponentsDiv></ComponentsDiv>
    </>
  )
}

export default Settings
