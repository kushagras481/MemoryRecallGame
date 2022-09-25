import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import ImageUploader from './imageuploader'

import { db } from '../data/db'

import {
  AddItemsDiv,
  AddItemsContentsDiv,
  ImageDiv,
  ImageHeader,
  ImageContentsDiv,
  TypeDiv,
  TypeHeader,
  TypeContentsDiv,
  TypeRadioText,
  NameDiv,
  NameHeader,
  NameInputField,
  AddButtonDiv,
  AddButton,
} from '../styles/components/additemspane'

import { ScrollableDiv, ErrorText } from '../styles/components/base'

function AddItemsPane(props) {
  const navigate = useNavigate()

  const [itemType, setItemType] = useState('person')
  const [name, setName] = useState('')
  const [imageDataURL, setImageDataURL] = useState(null)

  const [nameError, setNameError] = useState(false)
  const [imgError, setImgError] = useState(false)

  function onTypeChange(e) {
    setItemType(e.target.value)
  }

  function onNameChange(e) {
    setName(e.target.value)
    if (e.target.value !== '') {
      setNameError(false)
    }
  }

  function addItem() {
    if (name === '' || imageDataURL === null) {
      setNameError(name === '')
      setImgError(imageDataURL === null)
    } else {
      var image = new Image()
      image.src = imageDataURL
      let imgData = getBase64Image(image)

      const data = {
        name: name,
        type: itemType,
        img: imgData,
      }

      db.game_data.add(data)
      navigate('/settings')
    }
  }

  function getBase64Image(img) {
    var canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height

    var ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    var dataURL = canvas.toDataURL('image/png')

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '')
  }

  return (
    <>
      <AddItemsDiv>
        <AddItemsContentsDiv>
          <ScrollableDiv>
            <ImageDiv>
              <ImageHeader>Image</ImageHeader>
              <ImageContentsDiv>
                <ImageUploader
                  imageDataURL={imageDataURL}
                  setImageDataURL={setImageDataURL}
                  setImgError={setImgError}
                />
              </ImageContentsDiv>
              {imgError && <ErrorText>Please upload an image.</ErrorText>}
            </ImageDiv>
            <TypeDiv>
              <TypeHeader>Type</TypeHeader>
              <TypeContentsDiv onChange={onTypeChange}>
                <input
                  type="radio"
                  value="person"
                  name="item-type"
                  defaultChecked={'person' === itemType}
                />{' '}
                <TypeRadioText>Person</TypeRadioText>
              </TypeContentsDiv>
            </TypeDiv>
            <NameDiv>
              <NameHeader>Name</NameHeader>
              <NameInputField value={name} onChange={onNameChange} />
              {nameError && <ErrorText>Please enter name.</ErrorText>}
            </NameDiv>
            <AddButtonDiv>
              <AddButton onClick={addItem}>Add</AddButton>
            </AddButtonDiv>
          </ScrollableDiv>
        </AddItemsContentsDiv>
      </AddItemsDiv>
    </>
  )
}

export default AddItemsPane
