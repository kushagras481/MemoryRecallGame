import React, { useState, useEffect } from 'react'

import TitleBar from '../components/titlebar'
import GamePane from '../components/gamepane'

import { HeaderDiv, ComponentsDiv } from '../styles/pages/base'

import initGameData from '../data/gamedata.json'

function MCGame() {
  const [loaded, setLoaded] = useState(false)
  const [gameData, setGameData] = useState({})

  useEffect(() => {
    if (!loaded) {
      // this is where function will get called to randomly select what the question will be and populate all details
      setGameData({
        img_path: initGameData.img_path,
        question: initGameData.question,
        options: shuffle(initGameData.options),
        correct_answer_id: initGameData.correct_answer_id,
      })
      setLoaded(true)
    }
  }, [loaded])

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  return (
    loaded && (
      <>
        <HeaderDiv>
          <TitleBar page="Memory Recall" />
        </HeaderDiv>
        <ComponentsDiv>
          <GamePane gameData={gameData} setLoaded={setLoaded} />
        </ComponentsDiv>
      </>
    )
  )
}

export default MCGame
