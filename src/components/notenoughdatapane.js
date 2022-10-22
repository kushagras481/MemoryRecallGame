import React from 'react'

import {
  NotEnoughDataPaneDiv,
  NotEnoughDataText,
} from '../styles/components/notenoughdatapane'

function NotEnoughDataPane(props) {
  return (
    <>
      <NotEnoughDataPaneDiv>
        <NotEnoughDataText>{props.children}</NotEnoughDataText>
      </NotEnoughDataPaneDiv>
    </>
  )
}

export default NotEnoughDataPane
