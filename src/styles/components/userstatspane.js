import styled from 'styled-components'
import * as basestyles from './base'

import Select from 'react-dropdown-select'

export const UserStatsDiv = styled(basestyles.ScrollableDiv)`
  width: 100%;
  padding: 1rem;
`

export const UserStatsContainer = styled(basestyles.Div)`
  margin: 0 auto;
  min-width: 20rem;
  max-width: 150rem;
  height: 100%;
`

export const StatsSelect = styled(Select)`
  font-size: 1.5rem;
  color: black;
  background: white;
  margin: 0;
  padding: 0rem 1rem;
  border: white !important;
  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: #ff0000;
  }
  .react-dropdown-select-input {
    color: black;
  }
  .react-dropdown-select-separator {
    border-color: #ff0000;
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 0.6rem;
    max-height: 40rem;
    overflow: auto;
    z-index: 9;
    background: white;
    box-shadow: none;
    color: black !important;
  }
  .react-dropdown-select-item {
    color: black;
    border-bottom: 1px solid transparent;
    :hover {
      color: black;
      background: #ff000030;
    }
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    background: #ff0000;
    border: none;
    color: black;
    font-weight: 700;
  }
`

export const StatsDispDiv = styled(basestyles.Div)`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.4rem 0.4rem;
`

export const StatsDispHeader = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 550;
`
