import React from 'react'
import styled from 'styled-components'
import './App.css'
import { Header } from './header/Header'
import { TopicCard } from './topic/TopicCard'

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledContainer>
        <Header />
        <TopicCard title="types" description="a" />
      </StyledContainer>
    </div>
  )
}
const StyledContainer = styled.div`
  margin: 0 50px 0 50px;
`
export default App
