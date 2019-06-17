import * as React from 'react'
import styled from 'styled-components'

export const TypeCode: React.FC = () => {
  return (
    <StyledCodeBox>
      <p>
        let isDone: boolean = false; let decimal: number = 6; let hex: number =
        0xf00d; let color: string = "blue"; let list: number[] = [1, 2, 3]; let
        list: Array= [1, 2, 3]; // Declare a tuple type let x: [string, number];
        // Initialize it x = ["hello", 10]; // OK enum Color
        {'{'} Red, Green, Blue {'}'}) let c: Color = Color.Green;
        let notSure: any = 4;
        notSure = "maybe a string instead";
        notSure = false
      </p>
    </StyledCodeBox>
  )
}

const StyledCodeBox = styled.div`
  font-family: 'Source Code Pro', monospace;
  margin: 20px;
  padding: 10px;
  align: left;
`
// const descriptions: string[] = [typeDescripion]

// export default descriptions