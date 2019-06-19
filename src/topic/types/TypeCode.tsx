import * as React from 'react'
import styled from 'styled-components'
import { StyledCode, CommonProps } from '../commonStyles'

export const TypeCode = (props: CommonProps) => {
  return (
    <StyledCode data-aos={props.animation}>
      <h3> Type examples</h3>
      <StyledCodeBox>
        <StyledPara>
          let isDone: boolean = false;<br/>
          let decimal: number = 6; <br/>
          let hex: number= 0xf00d; <br/>
          let color: string = "blue"; <br/>
          let list: number[] = [1, 2, 3]; <br/>
          let list: Array= [1, 2, 3]; // Declare a tuple type<br/>
          let x: [string,number];<br/>
          // Initialize it<br/>
          x = ["hello", 10]; // OK<br/>
          enum Color {'{'} Red, Green, Blue {'}'})<br/>
          let c: Color = Color.Green;<br/>
          let notSure:any = 4;<br/>
          notSure = "maybe a string instead";<br/>
          notSure = false<br/>
        </StyledPara>
      </StyledCodeBox>
    </StyledCode>
  )
}

const StyledPara = styled.p`
  text-align: left;
`
const StyledCodeBox = styled.div`
  font-family: 'Source Code Pro', monospace;
  margin: 20px;
  padding: 10px;
  align: left;
`
// const descriptions: string[] = [typeDescripion]

// export default descriptions
