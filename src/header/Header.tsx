import * as React from 'react'
import styled from 'styled-components'
export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeading>Typescript</StyledHeading>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  padding: 5px;
  margin: 5px;
  border: 2px solid grey;
  background: lightblue;
`
const StyledHeading = styled.h1`
  color: white;
`
