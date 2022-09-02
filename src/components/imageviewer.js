import React from 'react'

import {
  ImageContentsDiv,
  ImageContent,
} from '../styles/components/imageviewer'

function ImageViewer(props) {
  const src = props.src

  return (
    <>
      <ImageContentsDiv>
        <ImageContent src={src} />
      </ImageContentsDiv>
    </>
  )
}

export default ImageViewer
