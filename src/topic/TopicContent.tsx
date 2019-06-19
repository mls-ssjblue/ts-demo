import * as React from 'react'
import { useState } from 'react'
import { InterfaceCode } from './Interfaces/InterfaceCode'
import { InterfaceDescription } from './Interfaces/InterfaceDescription'
import { TopicCard } from './TopicCard'
import { TSIntro } from './TSIntro'
import { TypeCode } from './types/TypeCode'
import { TypeDescription } from './types/TypeDescriptions'
import { GenericDescription } from './generics/GenericDescription'
import { GenericCode } from './generics/GenericCode'
import { FunctionsDescription } from './functions/FunctionsDescription'
import { FunctionsCode } from './functions/FunctionsCode'

export const TopicContent = () => {
  return (
    <>
      <TSIntro />
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
        descriptionComponent={GenericDescription}
        codeComponent={GenericCode}
        animation="flip-up"
      />
      <TopicCard
        descriptionComponent={FunctionsDescription}
        codeComponent={FunctionsCode}
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
