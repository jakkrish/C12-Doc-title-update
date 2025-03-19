import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [click,setClick] = useState(0)

  useEffect(function(){
    document.title = `My Title ${click}`
  },[click])

  const handleClick = ()=>{
    setClick(prev=>prev+1)
  }
 
  return (
    <>
      <button onClick={handleClick}>Update Document Title</button>
    </>
  )
}

export default App

//Could do with a normal onClick function handler.
//
// However, using useEffect provides additional advantages:

// Side Effects in Functional Components

// Updating document.title is a side effect because it interacts with the browser outside of React’s rendering process.
// useEffect is designed to handle such side effects properly within functional components.
// Automatic Updates

// If you use only an onClick handler, the title changes only when the button is clicked.
// With useEffect, the title can update automatically whenever the state (or any dependency) changes, without requiring explicit user interaction.
// Encapsulation & Cleanup

// useEffect ensures that the side effect (title update) runs when necessary, and React will re-run it if the dependencies change.
// If there’s cleanup needed (e.g., resetting the title when a component unmounts), useEffect helps manage that.
