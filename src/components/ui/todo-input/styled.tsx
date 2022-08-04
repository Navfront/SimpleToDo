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
  }
`
