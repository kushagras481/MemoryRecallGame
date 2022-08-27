import React from 'react'

import {
  TitleBarDiv,
  TitleBarContainer,
  Mid,
  TitleButton,
} from '../styles/components/titlebar'

function TitleBar(props) {
  const page = props.page

  return (
    <>
      <TitleBarDiv>
        <TitleBarContainer>
          <Mid>
            <TitleButton>{page}</TitleButton>
          </Mid>
        </TitleBarContainer>
      </TitleBarDiv>
    </>
  )
}

export default TitleBar
