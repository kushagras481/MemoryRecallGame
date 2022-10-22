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
  overflow: auto;
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
  border: none;
  font-weight: bold;
  font-family: 'Helvetica Neue';
  padding: 0rem;
  margin: 0rem;
  align-items: center;
  color: inherit;
`

export const HoverTitleButton = styled(TitleButton)`
  &:hover {
    color: #66ffcc;
  }
`

export const TitleBarIconButtonDiv = styled(basestyles.Div)`
  padding: 1.35rem 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 0.6rem;
  &:hover {
    transform: translateY(-0.25em);
  }
  float: right;
`

export const TitleBarIconButton = styled(basestyles.IconButton)`
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
`

export const BackIconButton = styled(TitleBarIconButton)`
  background-image: url('/icons/back-icon.png');
`

export const SettingsIconButton = styled(TitleBarIconButton)`
  background-image: url('/icons/settings-icon.png');
`

export const SwitchIconButton = styled(TitleBarIconButton)`
  background-image: url('/icons/switch-icon.png');
`

export const CheckIconButton = styled(TitleBarIconButton)`
  background-image: url('/icons/check-icon.png');
`

export const XIconButton = styled(TitleBarIconButton)`
  background-image: url('/icons/x-icon.png');
`

export const UserInputDiv = styled(basestyles.Div)`
  padding: 1.35rem 1rem;
  border: none;
  float: left;
`

export const UserInputField = styled(basestyles.InputField)`
  font-size: 1.2rem;
  height: 2.2rem;
  width: 15rem;
  padding: 0rem 0.2rem;
  outline: none;
`
