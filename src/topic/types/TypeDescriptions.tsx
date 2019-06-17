import * as React from 'react'
import styled from 'styled-components'

export const TypeDescription: React.FC = () => {
  return (
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
