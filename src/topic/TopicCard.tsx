import * as React from 'react'
import styled from 'styled-components'

interface TopicCardProps {
  title: string
  description: string
}
export const TopicCard = (props: TopicCardProps) => {
  return (
    <StyledCard>
      <h2>{props.title}</h2>
      <p>
        {' '}
        Types are an integral part of typescript :. - Some important types are :
        - number - string - void - null
      </p>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  margin: 30px;
  width: 600px;
  height: 400px;
  border: 1px solid grey;
`
