import styled from 'styled-components'
import * as basestyles from './base'

export const MCOptionsContentsDiv = styled(basestyles.Div)`
  margin: 0 auto;
  width: 75%;
  aspect-ratio: 1 / 1;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 0.2rem solid black;
`

export const TopHalf = styled(basestyles.Div)`
  width: 100%;
  height: 50%;
  border-bottom: 0.2rem solid black;
`

export const BottomHalf = styled(basestyles.Div)`
  width: 100%;
  height: 50%;
`

export const TL = styled(basestyles.Div)`
  width: 50%;
  height: 100%;
  float: left;
  border-right: 0.2rem solid black;
`

export const TR = styled(basestyles.Div)`
  width: 50%;
  height: 100%;
  float: right;
`

export const BL = styled(basestyles.Div)`
  width: 50%;
  height: 100%;
  float: left;
  border-right: 0.2rem solid black;
`

export const BR = styled(basestyles.Div)`
  width: 50%;
  height: 100%;
  float: right;
`
