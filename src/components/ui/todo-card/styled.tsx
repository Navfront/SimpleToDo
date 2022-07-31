import styled from 'styled-components'

type TitleProps = {
    isDone: boolean
}

export const StyledTodoCard = styled.div`
    padding: 10px 15px;
    border: 1px solid grey;
    color: #3a3a3a86;
    display: flex;
    justify-content: space-between;
`

export const StyledTitle = styled.h2<TitleProps>`
margin-left: 10px;
    text-decoration: ${(props) => !props.isDone ? 'none' : 'line-through'};
    color: #000000;
`

export const StyledButton = styled.button`
    background-color: transparent;
    border: 1px solid #3a3a3a86;
    border-radius: 2px;
    width: 80px;
    &:not(:last-of-type){
        margin-bottom: 5px;
    }
    
`
export const StyledButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
