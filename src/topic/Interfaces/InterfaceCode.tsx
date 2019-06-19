import * as React from 'react'
import styled from 'styled-components'
import { CommonProps, StyledCode, StyledDescription } from '../commonStyles'

export const InterfaceCode = (props: CommonProps) => {
  const code = `
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: &quot;white&quot;, area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({color: 'black'});
  `
  return (
    <StyledCode data-aos={props.animation}>
      <h3> Interface examples</h3>
      <pre style={{ textAlign: 'left' }} className="line-numbers">
        <code className="language-jsx"> {code}</code>
      </pre>
    </StyledCode>
  )
}

// const descriptions: string[] = [typeDescripion]

// export default descriptions
