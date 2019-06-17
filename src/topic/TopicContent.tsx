import * as React from 'react'
import { useState } from 'react'
import { TopicCard } from './TopicCard'
import { TypeDescription } from './types/TypeDescriptions'

export const TopicContent = () => {
  const [isCode, setIsCode] = useState(false)
  return (
    <>
      <TopicCard
        title="Types"
        description={TypeDescription}
        animation="fade-left"
        isCode={isCode}
        onClick={() => setIsCode(!isCode)}
      />
      {/*<TopicCard title="Interface" description="a" animation="fade-right" />*/}
      {/*<TopicCard title="Class" description="a" animation="fade-left" />*/}
      {/*<TopicCard title="" description="a" animation="fade-right" />*/}
    </>
  )
}
