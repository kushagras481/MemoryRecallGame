import styled from 'styled-components'

export const Div = styled.div`
  margin: 0;
  padding: 0;
`

export const ScrollableDiv = styled(Div)`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`

export const IconButton = styled.button`
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  outline-style: none;
`

export const InputField = styled.input`
  margin: 0;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  border-radius: 0.3rem;
  border-style: solid;
  border-width: 0.1rem;
  border-color: #afafaf;
`

export const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  color: red;
  overflow-wrap: break-word;
`
