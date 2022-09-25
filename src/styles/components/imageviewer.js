import styled from 'styled-components'
import * as basestyles from './base'

export const ImageContentsDiv = styled(basestyles.Div)`
  margin: 0 auto;
  width: 75%;
  aspect-ratio: 1 / 1;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 0.2rem solid transparent;
`

export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`
