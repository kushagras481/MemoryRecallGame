import React from 'react'

import { useNavigate } from 'react-router-dom'

import {
  SettingsDiv,
  SettingsButtonDiv,
  SettingsButton,
} from '../styles/components/settingspane'

import { ScrollableDiv } from '../styles/components/base'

function SettingsPane(props) {
  const data = [
    {
      text: 'Add Item',
      click: goToAddItem,
    },
    {
      text: 'User Stats',
      click: goToUserStats,
    },
  ]

  const navigate = useNavigate()

  function goToAddItem() {
    navigate('/additem')
  }

  function goToUserStats() {
    navigate('/userstats')
  }

  return (
    <>
      <SettingsDiv>
        <SettingsButtonDiv>
          <ScrollableDiv>
            {data.map((item, i) => {
              return (
                <SettingsButton key={i} onClick={item.click}>
                  {item.text}
                </SettingsButton>
              )
            })}
          </ScrollableDiv>
        </SettingsButtonDiv>
      </SettingsDiv>
    </>
  )
}

export default SettingsPane
