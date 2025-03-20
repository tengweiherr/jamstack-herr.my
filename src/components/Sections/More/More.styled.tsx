import COLOR from '@/utils/styled/color'
import { Button } from '@/utils/styled/common.styled'
import styled from 'styled-components'

export const MoreContainer = styled.section.attrs((props) => ({
  className: 'section more' + (props.className ? props.className : ''),
}))`
  padding: 80px 0 40px;

  @media only screen and (max-width: 768px) {
    padding: 80px 0 0 0;
  }

  .row {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 480px) {
    .row {
      margin-bottom: 0;
    }
  }
`

export const MoreInnerContainer = styled.div.attrs((props) => ({
  className: 'more-inner container justify-content-center align-items-center',
}))``

export const MoreCardOuter = styled.div.attrs((props) => ({
  className: 'col-md-4 col-md-6 mb-3',
}))``

export const SingleMoreCard = styled.div.attrs((props) => ({
  className: 'more-single position-relative',
}))`
  height: 300px;
  overflow: hidden !important;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  transition: all 0.3s ease;

  a {
    background: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.7) !important;
    border: 1px solid rgba(255, 255, 255, 0.7) !important;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 20, 0.5);
  }

  img {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:hover h3 {
    opacity: 0.4;
  }
`

export const MoreCardContent = styled.div.attrs((props) => ({
  className:
    'description w-100 p-4 d-flex flex-column justify-content-center align-items-center position-absolute',
}))`
  z-index: 30;
  height: inherit;

  h3 {
    top: 0;
    right: 15px;
    font-weight: 700;
    opacity: 0.1;
    font-size: 7rem;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }

  span {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
    margin-right: 10px;
  }
`

export const BlackOverlapped = styled.div.attrs((props) => ({
  className: 'more-bg position-absolute w-100 h-100',
}))`
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  .more-single:hover & {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const H4 = styled.h4.attrs((props) => ({
  className: 'mb-3 ' + (props.className ? props.className : ''),
}))`
  color: rgba(255, 255, 255, 0.7);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  .more-single:hover & {
    color: white;
  }
`
