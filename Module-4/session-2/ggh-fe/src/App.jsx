import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './components/Avatar'

function App() {
  const family = [
    {
      id: 1,
      name: "fauzan",
      gender: "male"
    },
    {
      id: 2,
      name: "muhammad",
      gender: "male",
    },
    {
      id: 3,
      name: "Nabilla",
      gender: "female",
    },
    {
      id: 4,
      name: "Shinta",
      gender: "female",
    }

  ]
  return (
    <>
      {
        family.map((fam) => {
          return (
            <Avatar data={fam} />
          )
        })
      }
    </>
  )
}

export default App
