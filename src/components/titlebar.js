import React, { useState, useEffect, useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  TitleBarDiv,
  TitleBarContainer,
  Left,
  Mid,
  Right,
  TitleButton,
  UserInputDiv,
  UserInputField,
  TitleBarIconButtonDiv,
  BackIconButton,
  SettingsIconButton,
  SwitchIconButton,
  CheckIconButton,
  XIconButton,
} from '../styles/components/titlebar'

import { db } from '../data/db'

function TitleBar(props) {
  const page = props.page
  const user = props.user
  const setUser = props.setUser
  const setUserId = props.setUserId

  const navigate = useNavigate()

  const [userViewMode, setUserViewMode] = useState(0) // 0 = viewing, 1 = editing
  const [changingUser, setChangingUser] = useState('')

  const changeUserRef = useRef(null)

  useEffect(() => {
    if (page === 'Memory Recall') {
      setChangingUser(user === '' ? 'Anonymous' : user.toLowerCase())
    }
  }, [user])

  useEffect(() => {
    if (userViewMode === 1) {
      changeUserRef.current.focus()
    }
  }, [userViewMode])

  var left = <></>
  var mid = <TitleButton>{page}</TitleButton>
  var right = <></>

  function onChangingUser(e) {
    setChangingUser(e.target.value)
  }

  function onSwitchUser() {
    if (user === '') {
      setChangingUser('')
    }
    setUserViewMode(1)
  }

  function onCancelUser() {
    setChangingUser(user === '' ? 'Anonymous' : user.toLowerCase())
    setUserViewMode(0)
  }

  async function onSaveUser() {
    let switchedUser = changingUser.toLowerCase()
    localStorage.setItem('user', switchedUser)

    let savedUser = await db.users.get({
      username: switchedUser,
    })

    if (savedUser !== undefined) {
      localStorage.setItem('user_id', savedUser.id)
      setUserId(savedUser.id)
    } else {
      if (switchedUser === '') {
        localStorage.setItem('user_id', -1)
        setUserId(-1)
      } else {
        const data = {
          username: switchedUser,
        }
        let newUserId = await db.users.add(data)
        localStorage.setItem('user_id', newUserId)
        setUserId(newUserId)
      }
    }
    setUser(switchedUser)
    setUserViewMode(0)
  }

  switch (page) {
    case 'Memory Recall':
      left = (
        <>
          <UserInputDiv>
            <UserInputField
              ref={changeUserRef}
              value={changingUser}
              disabled={userViewMode === 0}
              onChange={onChangingUser}
              placeholder="username"
            />
          </UserInputDiv>
          {userViewMode === 0 && (
            <TitleBarIconButtonDiv>
              <SwitchIconButton onClick={onSwitchUser} />
            </TitleBarIconButtonDiv>
          )}
          {userViewMode === 1 && (
            <>
              <TitleBarIconButtonDiv>
                <CheckIconButton onClick={onSaveUser} />
              </TitleBarIconButtonDiv>
              <TitleBarIconButtonDiv>
                <XIconButton onClick={onCancelUser} />
              </TitleBarIconButtonDiv>
            </>
          )}
        </>
      )
      right = (
        <TitleBarIconButtonDiv onClick={goToSettings}>
          <SettingsIconButton />
        </TitleBarIconButtonDiv>
      )
      break
    case 'Settings':
      left = (
        <TitleBarIconButtonDiv onClick={goToMCGame}>
          <BackIconButton />
        </TitleBarIconButtonDiv>
      )
      break
    case 'Add New Item':
      left = (
        <TitleBarIconButtonDiv onClick={goToSettings}>
          <BackIconButton />
        </TitleBarIconButtonDiv>
      )
      break
    case 'User Stats':
      left = (
        <TitleBarIconButtonDiv onClick={goToSettings}>
          <BackIconButton />
        </TitleBarIconButtonDiv>
      )
      break
    default:
      break
  }

  function goToSettings() {
    navigate('/settings')
  }

  function goToMCGame() {
    navigate('/')
  }

  return (
    <>
      <TitleBarDiv>
        <TitleBarContainer>
          <Left>{left}</Left>
          <Mid>{mid}</Mid>
          <Right>{right}</Right>
        </TitleBarContainer>
      </TitleBarDiv>
    </>
  )
}

export default TitleBar
