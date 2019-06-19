import * as React from 'react'
import { useState } from 'react'
import { InterfaceCode } from './Interfaces/InterfaceCode'
import { InterfaceDescription } from './Interfaces/InterfaceDescription'
import { TopicCard } from './TopicCard'
import { TypeCode } from './types/TypeCode'
import { TypeDescription } from './types/TypeDescriptions'

export const TopicContent = () => {
  return (
    <>
      <TopicCard
        descriptionComponent={TypeDescription}
        codeComponent={TypeCode}
        animation="zoom-in"
      />
      <TopicCard
        descriptionComponent={InterfaceDescription}
        codeComponent={InterfaceCode}
        animation="slide-right"
      />
      <TopicCard
        descriptionComponent={TypeDescription}
        codeComponent={TypeCode}
        animation="flip-up"
      />
      <TopicCard
        descriptionComponent={TypeDescription}
        codeComponent={TypeCode}
        animation="zoom-in"
      />
      <TopicCard
        descriptionComponent={TypeDescription}
        codeComponent={TypeCode}
        animation="fade-left"
      />
    </>
  )
}
