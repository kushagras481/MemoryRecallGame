import React from 'react'

import {
  ButtonDiv,
  LDButtonDiv,
  LDButton,
} from '../styles/components/loaddatabutton'

import { db } from '../data/db'

import demousers from '../data/demousers.json'
import demoimages from '../data/demoimages.json'
import demouserstats from '../data/demouserstats.json'

function LoadDataButton(props) {
  const setLoadingData = props.setLoadingData
  const setLoaded = props.setLoaded

  async function loadDemoUsers() {
    let demoUsersData = demousers.data
    for (const user of demoUsersData) {
      try {
        await db.users.add(user)
      } catch (e) {
        console.log(e)
      }
    }
  }

  async function loadSingleImage(src) {
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = src
    })
  }

  async function loadDemoImages() {
    let demoImagesData = demoimages.data
    for (const imagedata of demoImagesData) {
      let image = await loadSingleImage(imagedata.path)
      let imgData = getBase64Image(image)

      const data = {
        name: imagedata.name,
        type: imagedata.type,
        img: imgData,
      }

      await db.game_data.add(data)
    }
  }

  async function loadDemoUserStats() {
    let demoUserStatsData = demouserstats.data
    for (const userstats of demoUserStatsData) {
      try {
        await db.user_stats.add(userstats)
      } catch (e) {
        console.log(e)
      }
    }
  }

  function getBase64Image(img) {
    var canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    canvas.getContext('2d').drawImage(img, 0, 0)

    var dataURL = canvas.toDataURL('image/png')

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '')
  }

  async function loadDemoData() {
    setLoadingData(true)
    localStorage.setItem('qPos', 0)
    localStorage.setItem('qOrder', JSON.stringify([]))
    await loadDemoUsers()
    await loadDemoUserStats()
    await loadDemoImages()
    setLoadingData(false)
    if (setLoaded !== null) {
      setLoaded(false)
    }
  }

  return (
    <>
      <ButtonDiv>
        <LDButtonDiv>
          <LDButton onClick={loadDemoData}>Load Data</LDButton>
        </LDButtonDiv>
      </ButtonDiv>
    </>
  )
}

export default LoadDataButton
