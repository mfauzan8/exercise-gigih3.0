import React from 'react'
import './App.css'
import TopSidebar from './Component/TopSidebar'
import SecondSidebar from './Component/SecondSidebar'
import Card from './Component/Card'

function App() {

  return (
    <div className="container">
      <div className="sidebar">
        <TopSidebar />
        <SecondSidebar />
      </div>
      <div className="content">
        <Card />
      </div>
    </div >
  )
}

export default App
