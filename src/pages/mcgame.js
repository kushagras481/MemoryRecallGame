import React, { useState, useEffect } from 'react'

import TitleBar from '../components/titlebar'
import GamePane from '../components/gamepane'
import NotEnoughDataPane from '../components/notenoughdatapane'
import LoadDataButton from '../components/loaddatabutton'

import { HeaderDiv, ComponentsDiv } from '../styles/pages/base'

import { db } from '../data/db'
import { useLiveQuery } from 'dexie-react-hooks'

import questionsData from '../data/questionsdata.json'

function MCGame() {
  const [loaded, setLoaded] = useState(false)
  const [gameData, setGameData] = useState({})
  const [hasData, setHasData] = useState(false)
  const [itemsNeeded, setItemsNeeded] = useState(0)
  const [showLoadDataInfo, setShowLoadDataInfo] = useState(false)
  const [loadingDemoData, setLoadingDemoData] = useState(false)

  var localUser = localStorage.getItem('user')
  var localUserId = localStorage.getItem('user_id')

  const [user, setUser] = useState(localUser === null ? '' : localUser)
  const [userId, setUserId] = useState(
    localUserId === null ? -1 : parseInt(localUserId)
  )

  if (localUser === null) {
    localStorage.setItem('user', '')
  }

  if (localUserId === null) {
    localStorage.setItem('user_id', '-1')
  }

  let saveStats = user !== null && user !== ''
  var savedData = useLiveQuery(() => db.game_data.toArray())

  useEffect(() => {
    async function checkDataCount() {
      let userCount = await db.users.count()
      let questionCount = await db.game_data.count()
      if (userCount === 0 && questionCount === 0) {
        setShowLoadDataInfo(true)
      }
    }

    checkDataCount()
  }, [])

  useEffect(() => {
    setLoaded(false)
  }, [savedData])

  useEffect(() => {
    if (!loaded) {
      setup()
    }
  }, [loaded])

  let noDataPhrase =
    'Not enough data to run game. Please add ' +
    itemsNeeded +
    ' more ' +
    (itemsNeeded > 1 ? 'items' : 'item') +
    ' through settings.'

  function setup() {
    if (!savedData || typeof savedData === 'undefined') {
      savedData = []
    }

    if (savedData.length < 4) {
      setHasData(false)
      setItemsNeeded(4 - savedData.length)
    } else {
      var qPos = parseInt(localStorage.getItem('qPos'))
      var qOrder = JSON.parse(localStorage.getItem('qOrder'))

      if (!qPos) {
        qPos = 0
        localStorage.setItem('qPos', 0)
      }

      if (!qOrder) {
        qOrder = []
        localStorage.setItem('qOrder', JSON.stringify(qOrder))
      }

      if (qPos >= qOrder.length || savedData.length > qOrder.length) {
        for (var i = qOrder.length; i < savedData.length; i += 1) {
          qOrder.push(i)
        }
        qPos = 0
        qOrder = shuffle(qOrder)
        localStorage.setItem('qPos', 0)
        localStorage.setItem('qOrder', JSON.stringify(qOrder))
      }

      let item = savedData[qOrder[qPos]]

      var optionsData = []
      optionsData.push({ id: item.id, option: item.name })

      let otherOptions = shuffle(qOrder)

      var j = 0
      while (optionsData.length < 4) {
        if (otherOptions[j] !== qOrder[qPos]) {
          optionsData.push({
            id: savedData[otherOptions[j]].id,
            option: savedData[otherOptions[j]].name,
          })
        }
        j += 1
      }

      setGameData({
        img_path: 'data:image/png;base64,' + item.img,
        question: questionsData[item.type],
        options: shuffle(optionsData),
        correct_answer_id: item.id,
        question_id: item.id,
      })
      setHasData(true)
    }
    setLoaded(true)
  }

  function shuffle(originalArray) {
    var array = [].concat(originalArray)
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return (
    loaded && (
      <>
        <HeaderDiv>
          <TitleBar
            page="Memory Recall"
            user={user}
            setUser={setUser}
            setUserId={setUserId}
          />
        </HeaderDiv>
        <ComponentsDiv>
          {hasData && (
            <GamePane
              gameData={gameData}
              setLoaded={setLoaded}
              saveStats={saveStats}
              userId={userId}
            />
          )}
          {!hasData && (
            <>
              {!loadingDemoData && (
                <>
                  <NotEnoughDataPane>
                    <span>
                      {noDataPhrase}
                      {showLoadDataInfo && (
                        <>
                          <br />
                          <br />
                          Click the button below to load demo data including
                          questions, users, and user statistics.
                        </>
                      )}
                    </span>
                  </NotEnoughDataPane>
                  {setShowLoadDataInfo && (
                    <LoadDataButton
                      loadingData={loadingDemoData}
                      setLoadingData={setLoadingDemoData}
                    />
                  )}
                </>
              )}
              {loadingDemoData && (
                <>
                  <NotEnoughDataPane>
                    <span>
                      Loading example data... (Can take up to a few minutes)
                    </span>
                  </NotEnoughDataPane>
                </>
              )}
            </>
          )}
        </ComponentsDiv>
      </>
    )
  )
}

export default MCGame
