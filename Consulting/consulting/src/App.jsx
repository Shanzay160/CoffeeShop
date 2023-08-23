import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import DestinationCard from './DestinationCard'
import About from './About'
import Destinations from './Destinations'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <DestinationCard/>
    <About/>
    <Destinations/>
    <Footer/>
    </>
  )
}

export default App
