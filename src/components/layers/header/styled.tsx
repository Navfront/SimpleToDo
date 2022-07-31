import styled from 'styled-components'

export const StyledHeader = styled.header`
    padding: 10px;
    margin-bottom: 10px;
    background-color: lightgrey;
`

export const StyledFlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledLogo = styled.a`
display: flex;
align-items: center;
font-weight: 700;
font-size: 20px;
color: #385851;
text-decoration: none;

&:hover{
    cursor: pointer;
    text-decoration: underline;
}

img{
        width: 50px;
        height:  50px;
        object-fit: contain;
        margin-right: 10px;
}
`
