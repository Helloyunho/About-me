import React from 'react'
import { Router } from '@reach/router'
import Index from './pages/index/index'

const App = () => {
  return (
    <Router>
      <Index path='/' />
    </Router>
  )
}

export default App
