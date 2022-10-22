import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/css/index.css'

import MCGame from './pages/mcgame'
import Settings from './pages/settings'
import AddItem from './pages/additem'
import UserStats from './pages/userstats'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MCGame />} />
      <Route path="settings" element={<Settings />} />
      <Route path="/additem" element={<AddItem />} />
      <Route path="/userstats" element={<UserStats />} />
    </Routes>
  </BrowserRouter>
)
