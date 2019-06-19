import * as React from 'react'
import styled from 'styled-components'
import { StyledCode } from './commonStyles'

export const TSIntro = () => {
  const tscode = ` 
    class Greeter {
      greeting: string;
      constructor (message: string) {
        this.greeting = message;
      }
      greet() {
        return "Hello, " + this.greeting;
      }
    }
            `
  const jscode = `
    var Greeter = (function () {
      function Greeter(message) {
          this.greeting = message;
      }
      Greeter.prototype.greet = function () {
          return "Hello, " + this.greeting;
      };
      return Greeter;
    })();
  `
  return (
    <>
      <StyledContainer>
        <StyledCircle>
          <p style={{ fontSize: 20 }}><i>Types, Interfaces ... </i></p>
          <StyledSmallCircle>
            <p>JS</p>
          </StyledSmallCircle>
        </StyledCircle>
      </StyledContainer>
      <StyledDiv>
        <h2> Why Typescript?</h2>
        <p>
          Types increase your agility when doing refactoring. It's better for
          the compiler to catch errors than to have things fail at runtime.
          <br />
          Types are one of the best forms of documentation you can have. The
          function signature is a theorem and the function body is the proof. TS
          provides compile time safety for JS code. <br />
          Types can be implicit or explicit.
        </p>
        <h2> How does it work?</h2>
        TS gets compiled to JS. The types are used by IDE and compiler to spot
        errors and also does type inference. eg. if an array is passed to a
        function that expects a string as a parameter:{' '}
        <i>
          error TS2345: Argument of type 'number[]' is not assignable to
          parameter of type 'string'{' '}
        </i>
        <div style={{ display: 'inline' }}>
          <StyledCode>
            <pre
              style={{ textAlign: 'left', lineHeight: '20px' }}
              className="line-numbers"
            >
              {tscode}
              <br />
              is converted to ... <br />
              {jscode}
            </pre>
          </StyledCode>
        </div>
        Source: &nbsp;
        <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">
          https://www.typescriptlang.org/docs/handbook/basic-types.html
        </a>
      </StyledDiv>
    </>
  )
}
const StyledDiv = styled.div`
  margin: 20px;
  padding: 10px;
  text-align: left;
  line-height: 40px;
`
const H1 = styled.h1`
  margin-left: 200px;
  text-align: left;
  font-size: 50px;
`
const StyledContainer = styled.div`
  margin-top: 100px;
  margin-left: 30%;
  position: relative;
  width: 50%;
  padding-bottom: 40%;
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
  height: 60%;
  background-color: #47c5e5;
  border-radius: 50%;
  font-size: 50px;
  :hover {
    background-color: #5acfed;
  }
`
