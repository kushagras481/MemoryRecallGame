import styled from 'styled-components'
import * as basestyles from './base'

export const AddItemsDiv = styled(basestyles.Div)`
  width: 100%;
  height: 100%;
  padding: 1rem;
`

export const AddItemsContentsDiv = styled(basestyles.Div)`
  margin: 0 auto;
  min-width: 20rem;
  max-width: 150rem;
  height: 100%;
`

export const ImageDiv = styled(basestyles.Div)`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.4rem 0.4rem;
`

export const ImageHeader = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 450;
`

export const ImageContentsDiv = styled(basestyles.Div)`
  width: 100%;
`

export const TypeDiv = styled(basestyles.Div)`
  width: 100%;
  margin: 2rem 0;
  padding: 1.4rem 0.4rem;
  overflow: hidden;
`

export const TypeHeader = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 450;
`

export const TypeContentsDiv = styled(basestyles.Div)`
  width: 100%;
`

export const TypeRadioText = styled.label`
  font-size: 1.4rem;
  align-items: center;
  margin-right: 5rem;
`

export const NameDiv = styled(basestyles.Div)`
  width: 100%;
  margin: 2rem 0;
  padding: 1.4rem 0.4rem;
  overflow: hidden;
`

export const NameHeader = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 450;
`

export const NameInputField = styled(basestyles.InputField)`
  font-size: 1.4rem;
  height: 3rem;
  width: 100%;
  padding: 0rem 0.2rem;
  outline: none;
`

export const RelationDiv = styled(basestyles.Div)`
  width: 100%;
  margin-top: 2rem;
  padding: 1.4rem 0.4rem;
  background-color: purple;
`

export const AddButtonDiv = styled(basestyles.Div)`
  width: 100%;
  margin-top: 2rem;
  padding: 1.4rem 0.4rem;
`

export const AddButton = styled.button`
  padding: 1rem 2rem;
  display: block;
  background-color: transparent;
  text-align: center;
  outline-style: none;
  cursor: pointer;
  border: 0.2rem solid green;
  border-radius: 0.8rem;
  &:hover {
    background-color: #b3ffb3;
  }
`
