import { JSXElement } from '@babel/types'
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { CommonProps } from './commonStyles'

interface TopicCardProps {
  descriptionComponent: (props: any) => React.ReactElement<any>
  codeComponent: (props: CommonProps) => React.ReactElement<any>
  animation: string
}

export const TopicCard = (props: TopicCardProps) => {
  const [isCode, setIsCode] = useState(false)
  const Component = isCode ? props.codeComponent : props.descriptionComponent

  function flip() {
    setIsCode(!isCode)
  }

  return (
    <StyledTopicCard onClick={() => flip()}>
      <Component animation={props.animation} />
    </StyledTopicCard>
  )
}

const StyledTopicCard = styled.div`
  transition: transform 0.6s;
  position: relative;
  min-height: 600px;
  margin-bottom: 250px;
 
`
