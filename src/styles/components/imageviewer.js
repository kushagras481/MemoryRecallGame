import styled from 'styled-components'
import * as basestyles from './base'

export const ImageContentsDiv = styled(basestyles.Div)`
  margin: 0 auto;
  width: 70%;
  aspect-ratio: 1 / 1;
  background-color: green;
  border-radius: 0.8rem;
  overflow: hidden;
`

export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`
