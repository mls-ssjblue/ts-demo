import * as React from 'react'
import styled from 'styled-components'

export const TSIntro = () => {
  return (
    <StyledContainer>
      <StyledCircle>
        <p style={{fontSize:20}}>Types, Interfaces ... </p>
        <StyledSmallCircle>
          <p>JS</p>
        </StyledSmallCircle>
      </StyledCircle>
    </StyledContainer>
  )
}

const H1 = styled.h1`
  margin-left: 200px;
  text-align: left;
  font-size: 50px;
`
const StyledContainer = styled.div`
  margin-top: 100px;
  margin-left: 30%;
  position: relative;
  width: 75%;
  padding-bottom: 75%;
`
const StyledCircle = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: #0998bc;
  border-radius: 50%;
  font-size: 30px;
  :hover {
    background-color: #1c9cbc;
  }
`

const StyledSmallCircle = styled.div`
  margin-top: 5%;
  margin-left: 15%;
  position: absolute;
  width: 70%;
  height: 70%;
  background-color: #47c5e5;
  border-radius: 50%;
  font-size: 100px;
  :hover {
    background-color: #5acfed;
  }
`
