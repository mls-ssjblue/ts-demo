import * as React from 'react'
import styled from 'styled-components'
import { CommonProps, StyledCode, StyledDescription } from '../commonStyles'

export const FunctionsCode = (props: CommonProps) => {
  const code = `
  function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
  }
  let result1 = buildName("Bob");              
  let result2 = buildName("Bob", undefined);      
  let result3 = buildName("Bob", "Adams", "Sr.");  
  let result4 = buildName("Bob", "Adams");
  
  type LongHand = {
    (a: number): number;
    (a: string): string;  
  };

type ShortHand = (a: number) => number;
  `
  return (
    <StyledCode data-aos={props.animation}>
      <h3> Functions example </h3>

      <pre style={{ textAlign: 'left' }} className="line-numbers">
        <code className="language-jsx">{code}</code>
      </pre>
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
