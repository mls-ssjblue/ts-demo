import * as React from 'react'
import styled from 'styled-components'
import { CommonProps, StyledCode, StyledDescription } from '../commonStyles'

export const GenericCode = (props: CommonProps) => {
  const code = `
    function identity<T>(arg: T): T {
      return arg;
    }
    let output = identity<string>("myString");  // type of output will be 'string'
   
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };
    
    interface Lengthwise {
        length: number;
    }
  
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }
    
    interface Identities<V, W> {
       id1: V,
       id2: W
    }
  `
  return (
    <StyledCode data-aos={props.animation}>
      <h3> Generics example </h3>

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
