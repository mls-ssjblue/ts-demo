import * as React from 'react'
import styled from 'styled-components'
import { CommonProps, StyledCode, StyledDescription } from '../commonStyles'

export const FunctionsDescription = (props: CommonProps) => {
  return (
    <StyledDescription data-aos={props.animation}>
      <h3> Functions </h3>

      <StyledDiv>
        TS functions can be either named or anonymous like Javascript <br/>
        - Contextual typing: Inferring types on one side <br/>
        - Optional parameters using '?' <br/>
        - Overloading functions: Based on parameters (optional/default)
        a function can be overloaded with different implementations
      </StyledDiv>
    </StyledDescription>
  )
}

const StyledDiv = styled.div`
  margin: 20px;
  padding: 10px;
  text-align: left;
  line-height:40px;
`
// const descriptions: string[] = [typeDescripion]

// export default descriptions
