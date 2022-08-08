
import styled from 'styled-components'

export const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 991px;
    
    @media (max-width: 991px) {
        max-width: 768px;
    }

    @media (max-width: 768px) {
        max-width: auto;
        padding: 0 15px;
        min-width: 360px;
    }



`
