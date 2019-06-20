import * as React from 'react'
import styled from 'styled-components'
import { CommonProps, StyledCode, StyledDescription } from '../commonStyles'

export const GenericDescription = (props: CommonProps) => {
  return (
    <StyledDescription data-aos={props.animation} style={{ lineHeight: 1.5 }}>
      <h3> Generics </h3>

      <StyledDiv>
        A way to achieve more than could be using 'any'
        <br />
        Used to capture the type of the argument <br />
        ability to pass in a range of types to a component, adding an extra
        layer of abstraction and re-usability to your code
        <ul>
          <li>Generic Types</li>
          <li>Generic Classes</li>
          <li>Generic Constraints</li>
          <li>Generic Interfaces</li>
        </ul>
      </StyledDiv>
    </StyledDescription>
  )
}

const StyledDiv = styled.div`
  margin: 20px;
  padding: 10px;
  text-align: left;
`

