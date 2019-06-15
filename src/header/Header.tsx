import * as React from "react"
import styledComponents from "styled-components"
export const Header: React.FC = () => {

    return(
        <StyledHeader>
            hello
        </StyledHeader>
    )

}

const StyledHeader = styledComponents.div`
    padding: 10px;
    border: 10px solid black;
`
