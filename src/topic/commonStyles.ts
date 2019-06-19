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
  :before {
    content: '';
    position: absolute;
    right: 100%;
    top: 26px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid #e1e8f4;
    border-bottom: 13px solid transparent;
  }
`

export const StyledCode = styled.div`
  font-family: 'Source Code Pro', monospace;
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
    :before {
    content: '';
    position: absolute;
    right: 100%;
    top: 26px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid #3d3d3d;
    border-bottom: 13px solid transparent;
  }

`
