import * as React from 'react'
import styled from 'styled-components'
import { CommonProps, StyledDescription } from '../commonStyles'

export const TypeDescription = (props: CommonProps) => {
  return (
    <StyledDescription data-aos={props.animation}>
      <h3> Types </h3>
      <StyledDiv>
        An important concept in Object oriented languages brought to the web -
        Types!
        <ul>
          <li>Boolean</li>
          <li>Number</li>
          <li>String</li>
          <li>Array</li>
          <li>Tuple</li>
          <li>Enum</li>
          <li>Any</li>
          <li>Void</li>
          <li>Null and Undefined</li>
          <li>Object</li>
        </ul>
      </StyledDiv>
    </StyledDescription>
  )
}

const StyledDiv = styled.div`
  margin: 20px;
  padding: 10px;
  align: left;
`

// const descriptions: string[] = [typeDescripion]

// export default descriptions
