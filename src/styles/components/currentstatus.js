import styled from 'styled-components'
import * as basestyles from './base'

export const CurrentStatusDiv = styled(basestyles.Div)`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0.8rem;
  width: 60%;
  text-align: center;
  overflow-wrap: break-word;
`

export const CurrentStatusText = styled.p`
  font-size: 1.8rem;
  font-weight: 550;
`

export const LinkText = styled.span`
  font-size: 1.4rem;
  font-weight: 450;
  color: #007a99;
  cursor: pointer;
  &:hover {
    color: #33d6ff;
  }
`
