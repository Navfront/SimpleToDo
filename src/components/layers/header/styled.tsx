import styled from 'styled-components'

export const StyledHeader = styled.header`
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
    background: linear-gradient(white,  #e5e5e5 );
`

export const StyledFlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
