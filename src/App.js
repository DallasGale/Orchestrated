/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import Header from './components/ui_elements/header'
import Games from './components/games'

function App() {
  return (
    <div className="App">
      <Header title="Games Cart" cart={0} />
      <Games />
    </div>
  )
}

export default App
