import React, { useState, useEffect } from 'react'

import TitleBar from '../components/titlebar'
import NotEnoughDataPane from '../components/notenoughdatapane'
import UserStatsPane from '../components/userstatspane'
import LoadDataButton from '../components/loaddatabutton'

import { HeaderDiv, ComponentsDiv } from '../styles/pages/base'

import { db } from '../data/db'

function UserStats(props) {
  const [loaded, setLoaded] = useState(false)
  const [pane, setPane] = useState(null)
  const [loadingDemoData, setLoadingDemoData] = useState(false)

  async function getUserStats() {}

  let loadingDataPane = (
    <>
      <NotEnoughDataPane>
        <span>Loading example data... (Can take up to a few minutes)</span>
      </NotEnoughDataPane>
    </>
  )

  useEffect(() => {
    async function setup() {
      let userCount = await db.users.count()
      let questionCount = await db.game_data.count()
      if (userCount === 0 && questionCount === 0) {
        setPane(
          <>
            <NotEnoughDataPane>
              <span>
                There are no users, image questions, or game statistics data for
                the application yet. Please change the user, add image
                questions, and play the game to generate user game statistics.
                <br />
                <br />
                Click the button below to load demo data including questions,
                users, and user statistics.
              </span>
            </NotEnoughDataPane>
            <LoadDataButton
              setLoadingData={setLoadingDemoData}
              setLoaded={setLoaded}
            />
          </>
        )
      } else if (userCount === 0) {
        setPane(
          <>
            <NotEnoughDataPane>
              <span>
                There are no users or game statistics data for the application
                yet. Please change the user and play the game to generate user
                game statistics.
              </span>
            </NotEnoughDataPane>
          </>
        )
      } else if (questionCount === 0) {
        setPane(
          <>
            <NotEnoughDataPane>
              <span>
                There are no game statistics data for the application yet.
                Please add image questions and play the game to generate user
                game statistics.
              </span>
            </NotEnoughDataPane>
          </>
        )
      } else {
        setPane(<UserStatsPane />)
      }
      setLoaded(true)
    }

    if (!loaded) {
      setup()
    }
  }, [loaded])

  return (
    loaded && (
      <>
        <HeaderDiv>
          <TitleBar page="User Stats" />
        </HeaderDiv>
        <ComponentsDiv>
          {loadingDemoData && loadingDataPane}
          {!loadingDemoData && pane}
        </ComponentsDiv>
      </>
    )
  )
}

export default UserStats
