import React from 'react'
import { Router } from '@reach/router'
import Index from './pages/index/index'
import MyInfo from './pages/myInfo'

const App = () => {
  return (
    <Router>
      <MyInfo path='/myinfo' />
      <Index path='/' />
    </Router>
  )
}

export default App
