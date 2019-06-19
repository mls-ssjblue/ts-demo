import * as React from 'react'
import styled from 'styled-components'
import { CommonProps, StyledCode, StyledDescription } from '../commonStyles'

export const GenericCode = (props: CommonProps) => {
  return (
    <StyledCode data-aos={props.animation}>
      <h3> Generics example </h3>

      <StyledDiv>
        function identity{'<'}T{'>'}{'('}arg: T{')'}: T {'{'}
        return arg;
        {'}'}
      </StyledDiv>
    </StyledCode>
  )
}

const StyledDiv = styled.div`
  margin: 20px;
  padding: 10px;
  align: left;
`
// const descriptions: string[] = [typeDescripion]

// export default descriptions
