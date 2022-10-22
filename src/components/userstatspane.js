import React, { useState, useEffect } from 'react'

import {
  UserStatsDiv,
  UserStatsContainer,
  StatsSelect,
  StatsDispDiv,
  StatsDispHeader,
} from '../styles/components/userstatspane'

import { Div } from '../styles/components/base'

import { db } from '../data/db'

import * as dfd from 'danfojs'

function UserStatsPane(props) {
  const [selectedUserInfo, setSelectedUserInfo] = useState({})
  const [userOptions, setUserOptions] = useState([])
  const [questionOptions, setQuestionOptions] = useState([])
  const [yearOptions, setYearOptions] = useState([])
  const [selectedUserStats, setSelectedUserStats] = useState([])
  const [gameData, setGameData] = useState([])
  const [selectedQuestionInfo, setSelectedQuestionInfo] = useState({})
  const [selectedYear, setSelectedYear] = useState({})

  useEffect(() => {
    async function loadUsers() {
      const users = await db.users.toArray()
      var data = []
      for (const user of users) {
        data.push({ value: user.id, label: user.username })
      }
      setUserOptions(data)
    }
    async function loadGameData() {
      const qData = await db.game_data.toArray()
      setGameData(qData)
      var data = []
      for (const q of qData) {
        data.push({ value: q.id, label: q.name })
      }
      setQuestionOptions(data)
    }
    async function loadData() {
      await loadUsers()
      await loadGameData()
    }
    loadData()
  }, [])

  useEffect(() => {
    async function loadUserStats(selectedUserId) {
      const userStats = await db.user_stats
        .where('username_id')
        .equals(selectedUserId)
        .toArray()
      setSelectedUserStats(userStats)
    }

    if (!selectedUserInfo || Object.keys(selectedUserInfo).length === 0) {
      setSelectedUserStats([])
    } else {
      loadUserStats(selectedUserInfo.value)
    }
  }, [selectedUserInfo])

  useEffect(() => {
    if (selectedUserStats.length !== 0) {
      let userStatsDF = new dfd.DataFrame(selectedUserStats)
      let datetimes = userStatsDF['datetime'].dt.year().unique()

      var data = []
      for (const year of datetimes.values.sort()) {
        data.push({ value: year, label: year })
      }
      setYearOptions(data)

      generateOverallPerformanceTable()
      generateTopTenIncorrect()
    }
  }, [selectedUserStats])

  useEffect(() => {
    if (
      selectedQuestionInfo &&
      Object.keys(selectedQuestionInfo).length !== 0
    ) {
      generateQuestionPerformance()
    }
  }, [selectedQuestionInfo])

  useEffect(() => {
    if (selectedYear && Object.keys(selectedYear).length !== 0) {
      generateYearlyPerformance()
    }
  }, [selectedYear])

  function generateOverallPerformanceTable() {
    let userStatsDF = new dfd.DataFrame(selectedUserStats)
    let gameDataDF = new dfd.DataFrame(gameData)

    let overallTrackDF = userStatsDF
      .drop({ columns: ['username_id', 'id', 'datetime'] })
      .groupby(['question_id'])
      .mean()
      .rename({ result_mean: 'Percentage Correct' })
      .rename({ question_id: 'id' })

    var mergeDF = dfd.merge({
      left: overallTrackDF,
      right: gameDataDF,
      on: ['id'],
      how: 'inner',
    })

    mergeDF['Percentage Correct'] = mergeDF['Percentage Correct']
      .mul(100)
      .round(2)

    mergeDF = mergeDF
      .drop({ columns: ['img'] })
      .rename({ type: 'Type' })
      .rename({ id: 'Question ID' })
      .rename({ name: 'Name' })
      .sortValues('Percentage Correct', { ascending: false })

    mergeDF.plot('overall-performance-table').table()
  }

  function generateTopTenIncorrect() {
    let userStatsDF = new dfd.DataFrame(selectedUserStats)
    let gameDataDF = new dfd.DataFrame(gameData)

    let incorrectDF = userStatsDF
      .drop({ columns: ['username_id', 'id', 'datetime'] })
      .groupby(['question_id'])
      .agg({ result: ['sum', 'count'] })

    let incorrectCount = incorrectDF['result_count'].sub(
      incorrectDF['result_sum']
    )

    incorrectDF.addColumn('Incorrect Count', incorrectCount, { inplace: true })
    incorrectDF.drop({ columns: ['result_sum', 'result_count'], inplace: true })
    incorrectDF.rename({ question_id: 'id' }, { inplace: true })

    var mergeDF = dfd.merge({
      left: incorrectDF,
      right: gameDataDF,
      on: ['id'],
      how: 'inner',
    })

    mergeDF = mergeDF
      .drop({ columns: ['img'] })
      .rename({ type: 'Type' })
      .rename({ id: 'Question ID' })
      .rename({ name: 'Name' })
      .sortValues('Incorrect Count', { ascending: false })
      .head(10)

    mergeDF.plot('topten-incorrect-questions-table').table()
  }

  function generateQuestionPerformance() {
    let userStatsDF = new dfd.DataFrame(selectedUserStats)
    let gameDataDF = new dfd.DataFrame(gameData)

    let qPerfDF = userStatsDF
      .drop({ columns: ['username_id', 'id', 'datetime'] })
      .groupby(['question_id'])
      .agg({ result: ['sum', 'count'] })

    let incorrectCount = qPerfDF['result_count'].sub(qPerfDF['result_sum'])

    var singleQPerfDF = qPerfDF
      .addColumn('Incorrect Count', incorrectCount)
      .drop({ columns: ['result_count'] })
      .loc({ rows: qPerfDF['question_id'].eq(selectedQuestionInfo.value) })
      .rename({ result_sum: 'Correct Count' })
      .rename({ question_id: 'id' })

    var mergeDF = dfd.merge({
      left: singleQPerfDF,
      right: gameDataDF,
      on: ['id'],
      how: 'inner',
    })

    mergeDF = mergeDF.drop({ columns: ['type', 'img', 'id', 'name'] })

    mergeDF.plot('question-performance').bar()
  }

  function generateYearlyPerformance() {
    let userStatsDF = new dfd.DataFrame(selectedUserStats)

    var yearStatsDF = userStatsDF.loc({
      rows: userStatsDF['datetime'].dt.year().eq(2022),
    })

    yearStatsDF['datetime'] = yearStatsDF['datetime'].str.substring(0, 10)

    yearStatsDF = yearStatsDF
      .drop({ columns: ['username_id', 'id', 'question_id'] })
      .groupby(['datetime'])
      .agg({ result: ['sum', 'count', 'mean'] })

    yearStatsDF = yearStatsDF
      .drop({ columns: ['result_sum', 'result_count'] })
      .rename({ result_mean: 'Percentage Correct' })
      .rename({ datetime: 'Date' })

    yearStatsDF['Percentage Correct'] = yearStatsDF['Percentage Correct']
      .mul(100)
      .round(2)

    yearStatsDF = yearStatsDF
      .setIndex({ column: 'Date' })
      .drop({ columns: ['Date'] })

    const layout = {
      xaxis: {
        title: 'Date',
      },
      yaxis: {
        title: 'Percentage Correct',
      },
    }

    const config = {
      columns: ['Percentage Correct'],
    }

    yearStatsDF.plot('yearly-performance').line({ config, layout })
  }

  return (
    <>
      <UserStatsDiv>
        <UserStatsContainer>
          {userOptions.length !== 0 && (
            <StatsDispDiv>
              <StatsDispHeader>User</StatsDispHeader>
              <StatsSelect
                options={userOptions}
                required
                separator={true}
                clearable={true}
                placeholder="Select User"
                onChange={(user) => setSelectedUserInfo(user[0])}
              />
            </StatsDispDiv>
          )}
          {selectedUserStats.length !== 0 && (
            <>
              <StatsDispDiv>
                <StatsDispHeader>Overall Performance</StatsDispHeader>
                <Div id="overall-performance-table" />
              </StatsDispDiv>
              <StatsDispDiv>
                <StatsDispHeader>Top 10 Incorrect Questions</StatsDispHeader>
                <Div id="topten-incorrect-questions-table" />
              </StatsDispDiv>
              <StatsDispDiv>
                <StatsDispHeader>Question Performance</StatsDispHeader>
                <StatsSelect
                  options={questionOptions}
                  required
                  separator={true}
                  clearable={true}
                  placeholder="Select Question"
                  onChange={(question) => setSelectedQuestionInfo(question[0])}
                />
                <br />
                {selectedQuestionInfo &&
                  Object.keys(selectedQuestionInfo).length !== 0 && (
                    <Div id="question-performance" />
                  )}
              </StatsDispDiv>
              {yearOptions.length !== 0 && (
                <StatsDispDiv>
                  <StatsDispHeader>Yearly Performance</StatsDispHeader>
                  <StatsSelect
                    options={yearOptions}
                    required
                    separator={true}
                    clearable={true}
                    placeholder="Select Question"
                    onChange={(year) => setSelectedYear(year[0])}
                  />
                  <br />
                  {selectedYear && Object.keys(selectedYear).length !== 0 && (
                    <Div id="yearly-performance" />
                  )}
                </StatsDispDiv>
              )}
            </>
          )}
        </UserStatsContainer>
      </UserStatsDiv>
    </>
  )
}

export default UserStatsPane
