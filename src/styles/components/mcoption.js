import styled from 'styled-components'
import * as basestyles from './base'

export const MCOptionContents = styled(basestyles.Div)`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`

export const MCOptionTextDiv = styled(basestyles.Div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  overflow-wrap: break-word;
  cursor: pointer;
`

export const MCOptionText = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
`
