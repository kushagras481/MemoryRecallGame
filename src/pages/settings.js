import React from 'react'

import TitleBar from '../components/titlebar'
import SettingsPane from '../components/settingspane'

import { HeaderDiv, ComponentsDiv } from '../styles/pages/base'

function Settings(props) {
  return (
    <>
      <HeaderDiv>
        <TitleBar page="Settings" />
      </HeaderDiv>
      <ComponentsDiv>
        <SettingsPane />
      </ComponentsDiv>
    </>
  )
}

export default Settings
