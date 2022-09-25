import React, { useState } from 'react'

import {
  ImageUploaderSubtitle,
  ImageContentsDiv,
  ImageContent,
  DeleteButton,
} from '../styles/components/imageuploader'

function ImageUploader(props) {
  const imageDataURL = props.imageDataURL
  const setImageDataURL = props.setImageDataURL
  const setImgError = props.setImgError

  const [rerenderKey, setRerenderKey] = useState(Date.now())

  function handleChange(e) {
    setImageDataURL(URL.createObjectURL(e.target.files[0]))
    setImgError(false)
  }

  function deleteImage() {
    setImageDataURL(null)
    setRerenderKey(Date.now())
  }

  return (
    <>
      {imageDataURL === null && (
        <>
          <ImageUploaderSubtitle>
            Select a square image for best results.
          </ImageUploaderSubtitle>
          <input type="file" onChange={handleChange} key={rerenderKey} />
        </>
      )}
      {imageDataURL !== null && (
        <>
          <ImageContentsDiv>
            <ImageContent src={imageDataURL} alt="upload preview" />
          </ImageContentsDiv>
          <DeleteButton onClick={deleteImage}>Delete</DeleteButton>
        </>
      )}
    </>
  )
}

export default ImageUploader
