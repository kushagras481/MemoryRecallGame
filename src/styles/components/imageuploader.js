import styled from 'styled-components'
import * as basestyles from './base'

export const ImageUploaderSubtitle = styled.h1`
  font-weight: 500;
  font-style: italic;
`

export const ImageContentsDiv = styled(basestyles.Div)`
  margin-top: 1rem;
  width: 40%;
  aspect-ratio: 1 / 1;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 0.2rem solid transparent;
`

export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`

export const DeleteButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.4rem
  display: block;
  background-color: transparent;
  text-align: center;
  outline-style: none;
  cursor: pointer;
  border: 0.2rem solid red;
  border-radius: 0.8rem;
  &:hover {
    background-color: #fccfcf;
  }
`
