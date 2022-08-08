
import styled from 'styled-components'

export const StyledStatusWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 15px;
    left: 10px;

    span{
        margin: 10px;
        font-size: 18px;
    }
`
export const StyledStatusIcon = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    border:  3px solid grey;
    background-color: ${state => state.color || 'red'} ;
    border-radius: 50%;
    
`
