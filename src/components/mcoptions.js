import React from 'react'

import MCOption from './mcoption'

import {
  MCOptionsContentsDiv,
  TopHalf,
  BottomHalf,
  TL,
  TR,
  BL,
  BR,
} from '../styles/components/mcoptions'

function MCOptions(props) {
  const options = props.options
  const selectedAnswer = props.selectedAnswer
  const setSelectedAnswer = props.setSelectedAnswer
  const correctAnswerId = props.correctAnswerId
  const revealAnswer = props.revealAnswer

  return (
    <>
      <MCOptionsContentsDiv>
        <TopHalf>
          <TL>
            <MCOption
              optionData={options[0]}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              correctAnswerId={correctAnswerId}
              revealAnswer={revealAnswer}
            />
          </TL>
          <TR>
            <MCOption
              optionData={options[1]}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              correctAnswerId={correctAnswerId}
              revealAnswer={revealAnswer}
            />
          </TR>
        </TopHalf>
        <BottomHalf>
          <BL>
            <MCOption
              optionData={options[2]}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              correctAnswerId={correctAnswerId}
              revealAnswer={revealAnswer}
            />
          </BL>
          <BR>
            <MCOption
              optionData={options[3]}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              correctAnswerId={correctAnswerId}
              revealAnswer={revealAnswer}
            />
          </BR>
        </BottomHalf>
      </MCOptionsContentsDiv>
    </>
  )
}

export default MCOptions
