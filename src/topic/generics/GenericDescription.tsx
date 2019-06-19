import * as React from 'react'
import styled from 'styled-components'
import { CommonProps, StyledCode, StyledDescription } from '../commonStyles'

export const GenericDescription = (props: CommonProps) => {
  return (
    <StyledDescription data-aos={props.animation}>
      <h3> Generics </h3>

      <StyledDiv>
        <ul>
          <li>Generic Types</li>
          <li>Generic Classes</li>
          <li>Generic Constraints</li>
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
