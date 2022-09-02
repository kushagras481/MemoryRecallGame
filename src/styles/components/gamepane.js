import styled from 'styled-components'
import * as basestyles from './base'

export const GameDiv = styled(basestyles.Div)`
  width: 100%;
  height: 100%;
  padding: 1rem;
`

export const LeftPane = styled(basestyles.Div)`
  width: 50%;
  height: 100%;
  float: left;
  padding: 0.5rem;
  border-right: 0.01rem solid gray;
  overflow-y: auto;
`

export const RightPane = styled(basestyles.Div)`
  width: 50%;
  height: 100%;
  float: right;
  padding: 0.5rem;
`

