import styled from 'styled-components'
import * as basestyles from './base'

export const ButtonDiv = styled(basestyles.Div)`
  width: 100%;
  padding: 1rem;
`

export const LDButtonDiv = styled(basestyles.Div)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  height: 100%;
`

export const LDButton = styled.button`
  padding: 2rem 6rem;
  display: block;
  background-color: transparent;
  text-align: center;
  outline-style: none;
  cursor: pointer;
  border: 0.2rem solid #6f7378;
  border-radius: 0.8rem;
  &:hover {
    background-color: #6f7378;
    color: white;
  }
`
