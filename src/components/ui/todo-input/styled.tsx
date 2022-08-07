import styled from 'styled-components'

export const StyledForm = styled.form`
  p {
    display: flex;
    justify-content: center;
  }

  button + button {
    margin-left: 20px;
  }

  textarea {
    resize: none;
    width: 50vw;
    height: 30vh;
    padding:  10px;
  }


`
export const StyledError = styled.p`
position: absolute;
left: 0;
bottom: 5px;
width: 100%;

  font-size: 20;
  font-weight: 700;
  color: #fb3c3c;

  margin: 0;
`
export const StyledTextWrapper = styled.div`
  position: relative;
`

export const StyledBtn = styled.button`
  padding: 7px 10px;
`
