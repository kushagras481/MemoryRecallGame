import React from 'react'

import TitleBar from '../components/titlebar'
import AddItemsPane from '../components/additemspane'

import { HeaderDiv, ComponentsDiv } from '../styles/pages/base'

function AddItem(props) {
  return (
    <>
      <HeaderDiv>
        <TitleBar page="Add New Item" />
      </HeaderDiv>
      <ComponentsDiv>
        <AddItemsPane />
      </ComponentsDiv>
    </>
  )
}

export default AddItem
