import styled from 'styled-components'

export const AwardContainer = styled.div`
  position: fixed;
  top: 120px;
  right: 0px;
  z-index: 99999;

  @media only screen and (max-width: 468px) {
    transform: scale(0.75);
    transform-origin: right;
  }
`

export const AwardLink = styled.a`
  display: block;
  width: 68px;
  height: 100px;
`
