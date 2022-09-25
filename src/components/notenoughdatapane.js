import React from 'react'

import {
  NotEnoughDataPaneDiv,
  NotEnoughDataText,
} from '../styles/components/notenoughdatapane'

function NotEnoughDataPane(props) {
  const itemsNeeded = props.itemsNeeded

  var itemsPhrase = itemsNeeded > 1 ? 'items' : 'item'

  return (
    <>
      <NotEnoughDataPaneDiv>
        <NotEnoughDataText>
          Not enough data to run game. Please add {itemsNeeded} more{' '}
          {itemsPhrase} through settings.
        </NotEnoughDataText>
      </NotEnoughDataPaneDiv>
    </>
  )
}

export default NotEnoughDataPane
