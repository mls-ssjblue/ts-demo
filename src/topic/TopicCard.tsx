import * as React from 'react'
import styled from 'styled-components'

interface TopicCardProps {
  title: string
  description: React.FC
  animation: string
  isCode: boolean
  onClick: () => void
}
export const TopicCard = (props: TopicCardProps) => {
  return (
    <>
      <StyledDescription data-aos={props.animation}>
        <H3>{props.title}</H3>
        <p>
          <props.description />
        </p>
      </StyledDescription>
    </>
  )
}

const H3 = styled.h3`
  font-family: 'Alegreya Sans SC';
  font-size: 3rem;
  color: white;
  letter-spacing: 3px;
`

const StyledP = styled.p`
  max-width: 300px;
`
const StyledDescription = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  padding-top: 5px;
  background: lightgrey;
  text-align: center;
  color: black;
  font-size: 1.5em;
`
const StyledCode = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  padding-top: 5px;
  background: grey;
  text-align: center;
  color: black;
  font-size: 1.5em;
`
