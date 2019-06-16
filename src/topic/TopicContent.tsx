import * as React from 'react'
import styled from 'styled-components'
import { TopicCard } from './TopicCard'

export const TopicContent = () => {
  return (
    <>
      <TopicCard title="Types" description="a"  animation="fade-left"/>
      <TopicCard title="Interface" description="a"  animation="fade-right"/>
      <TopicCard title="Class" description="a"  animation="fade-left"/>
      <TopicCard title="" description="a"  animation="fade-right"/>
    </>
  )
}
