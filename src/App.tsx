import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import './App.css'
import { Header } from './header/Header'
import { TopicCard } from './topic/TopicCard'
import { TopicContent } from './topic/TopicContent'

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
    })
  })
  return (
    <div className="App">
      <StyledContainer>
        <Header />
        <TopicContent />
      </StyledContainer>
    </div>
  )
}
const StyledContainer = styled.div`
  margin: 0 50px 0 50px;
`
export default App
