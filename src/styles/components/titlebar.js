import styled from 'styled-components'
import * as basestyles from './base'

export const TitleBarDiv = styled(basestyles.Div)`
  overflow: auto;
  height: 5rem;
  padding: 0rem 2rem;
`

export const TitleBarContainer = styled(basestyles.Div)`
  margin: 0rem auto;
  min-width: 20rem;
  max-width: 150rem;
  height: 100%;
`

export const TitleBarSections = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

export const Left = styled(TitleBarSections)`
  float: left;
  height: 5rem;
`

export const Mid = styled(TitleBarSections)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Right = styled(TitleBarSections)`
  float: right;
  height: 5rem;
`

export const TitleBarButton = styled.button`
  display: block;
  background-color: transparent;
  text-align: center;
  outline-style: none;
  cursor: pointer;
`

export const TitleButton = styled(TitleBarButton)`
  font-size: 2.5rem;
  line-height: 2.5rem;
  border: none;
  font-weight: bold;
  font-family: 'Helvetica Neue';
  padding: 0rem;
  margin: 0rem;
  height: 2.5rem;
  align-items: center;
  color: inherit;
`

export const HoverTitleButton = styled(TitleButton)`
  &:hover {
    color: #546e7a;
  }
`
