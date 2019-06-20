import styled from 'styled-components'

export interface CommonProps {
  animation: string
}

export const StyledDescription = styled.div`
  font-family: 'Fjalla One', sans-serif;
  max-width: 1000px;
  margin: 100px auto;
  padding-top: 5px;
  background: #e1e8f4;
  text-align: center;
  color: black;
  font-size: 1.5em;
  min-height: 600px;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  border-top-right-radius: 50% 20%;
`

export const StyledCode = styled.div`
  font-family: 'Source Code Pro', monospace;
  line-height:25px;
  padding: 15px;
  font-size: 16px;
  color: #fff;
  background-color: #3d3d3d;
  -webkit-border-radius: 0px 0px 6px 6px;
  -moz-border-radius: 0px 0px 6px 6px;
  border-radius: 0px 0px 6px 6px;
  margin-bottom: 10px;
  max-width: 1000px;
  min-height: 600px
  margin: 100px auto;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  border-top-right-radius: 50% 20%;
  

`
