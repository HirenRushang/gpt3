import React from 'react'

import { Brand, Cta,  Nav } from './components'
import {Blog, Features, Footer, Header, Possibility, Whatgpt3} from "./container"

import "./App.css"

const App = () => {
  return (
   
    <div className='App'>
        <div className='gradient_bg'>
            <Nav />
            <Header />
        </div>
        <Brand/>
        <Whatgpt3/>
        <Features/>
        <Possibility/>
        <Cta />
        <Blog />
        <Footer/>
    </div>
  )
}

export default App