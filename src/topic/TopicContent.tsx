import * as React from 'react'
import { useState } from 'react'
import { InterfaceCode } from './Interfaces/InterfaceCode'
import { InterfaceDescription } from './Interfaces/InterfaceDescription'
import { TopicCard } from './TopicCard'
import { TypeCode } from './types/TypeCode'
import { TypeDescription } from './types/TypeDescriptions'

export const TopicContent = () => {
  const [isCode, setIsCode] = useState(false)
  return (
    <>
      <TopicCard
        title={!isCode ? 'Types' : 'Example'}
        description={isCode ? TypeCode : TypeDescription}
        animation="fade-left"
        isCode={isCode}
        onClick={() => setIsCode(!isCode)}
      />
      <TopicCard
        title={!isCode ? 'Interfaces' : 'Interface Example'}
        description={isCode ? InterfaceCode : InterfaceDescription}
        animation="fade-right"
        isCode={isCode}
        onClick={() => setIsCode(!isCode)}
      />
      {/*<TopicCard title="Interface" description="a" animation="fade-right" />*/}
      {/*<TopicCard title="Class" description="a" animation="fade-left" />*/}
      {/*<TopicCard title="" description="a" animation="fade-right" />*/}
    </>
  )
}
