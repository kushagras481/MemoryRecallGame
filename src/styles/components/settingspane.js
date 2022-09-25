import styled from 'styled-components'
import * as basestyles from './base'

export const SettingsDiv = styled(basestyles.Div)`
  width: 100%;
  height: 100%;
  padding: 1rem;
`

export const SettingsButtonDiv = styled(basestyles.Div)`
  margin: 0 auto;
  min-width: 20rem;
  max-width: 150rem;
  height: 100%;
`

export const SettingsButton = styled.button`
  width: 100%;
  margin: 0.4rem 0;
  padding: 4rem;
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
