import styled from "styled-components"

export const QuoteSection = styled.section`
    width: 100%;
    padding-bottom: 50px;
    margin-top: 30px;

    @media only screen and (max-width: 1200px) {
        padding-top: 30px;
    }
    
    @media only screen and (max-width: 768px) {
        margin-top: 0px;
        padding-bottom: 50px;
    }
    
    @media only screen and (max-width: 480px) {
        margin-top: 0px;
        padding-bottom: 40px;
    }

    & h2 {
        font-weight: 600;
        font-size: 2.5rem;
        position: relative;
        bottom: -50px;
      }
      
      @media only screen and (max-width: 480px) {
        & h2 {
          font-size: 1.5rem;
        }
      }
      
      & p {
        font-size: 1.2rem;
        position: relative;
        bottom: -20px;
      }
      
      @media only screen and (max-width: 480px) {
        & p {
          font-size: 1rem;
        }
      }
`

export const H2 = styled.h2`
    font-weight: 600;
    font-size: 2.5rem;

    @media only screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`


