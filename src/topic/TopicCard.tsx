import * as React from 'react'
import styled from 'styled-components'

interface TopicCardProps {
  title: string
  description: string
  animation: string
}
export const TopicCard = (props: TopicCardProps) => {
  return (
    <>
      <StyledCard data-aos={props.animation}>
        <H3>{props.title}</H3>
        <p>{props.description}</p>
      </StyledCard>
    </>
  )
}

const H3 = styled.h3`
  font-family: simplifica;
  font-size: 3rem;
  color: yellow;
  letter-spacing: 3px;
`
const StyledCard = styled.div`
  width: 500px;
  height: 500px;
  margin: 100px auto;
  padding-top: 5px;
  background: lightblue;
  text-align: center;
  color: black;
  font-size: 1.5em;
`
