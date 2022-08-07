import styled from 'styled-components'

export const StyledAuthSection = styled.section`
    display: flex;
    gap: 7px;
    align-items: flex-start;
`

export const StyledAuthButton = styled.button`
    border: 1px solid #727272;
    border-radius: 2px;
    padding: 2px;
    background-color: transparent;
    padding: 0 5px;
    cursor: pointer;
`

export const StyledUser = styled.div`
    display: flex;
    align-items: center;
    img{
        margin-left: 5px;
    }
`

export const StyledAuthIn = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 768px ){
        flex-direction: column;
    };
`
export const StyledAuthOut = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 768px ){
        flex-direction: column;
    };
`
