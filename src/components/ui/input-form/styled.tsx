import styled, { css } from 'styled-components'

const input = css`
    padding: 5px;
    width: 100px;
    @media (max-width:  768px){
        width: 70px;
    }
`

export const StyledLoginForm = styled.form`
    display: flex;
    input+input{
        margin-left: 10px;
        
    }

    @media (max-width:  768px){
        flex-direction: column;
        input+input{
        margin-left: 0px;
        margin-top: 5px;
    }
    };
`

export const StyledInput = styled.input`
    ${input}
`

export const StyledLoginBtn = styled.button`
    ${input}
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    background-color: #1dbc1d;
    font-weight: 600;
    width: 100px;

    img{
        position: absolute;
        right: 4px;
        top: 5px;
    }

    @media (max-width:  768px){
        width: 100%;
        margin: 5px 0;
    }
    border: 1px solid lightgray
`
