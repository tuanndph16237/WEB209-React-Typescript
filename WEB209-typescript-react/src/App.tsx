import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import 
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>
    </Container>
  )
}

const Container = styled.div`
    background-color: #282c34;
`


export default App
