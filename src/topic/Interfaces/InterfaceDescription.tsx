import * as React from 'react'
import styled from 'styled-components'

export const InterfaceDescription: React.FC = () => {
  return (
    <StyledDiv>
      One of TypeScript’s core principles is that type checking focuses on the
      shape that values have. This is sometimes called “duck typing” or
      “structural subtyping”. In TypeScript, interfaces fill the role of naming
      these types, and are a powerful way of defining contracts within your code
      as well as contracts with code outside of your project.
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  font-family: 'Archivo', sans-serif;
  margin: 20px;
  padding: 10px;
  align: left;
`
// const descriptions: string[] = [typeDescripion]

// export default descriptions
