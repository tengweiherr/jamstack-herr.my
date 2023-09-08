import COLOR from '@/utils/styled/color'
import styled from 'styled-components'

export const BannerSection = styled.section.attrs((props) => ({
  className: props.className ? props.className : '',
}))`
  width: 100%;
  background-size: cover;

  @media only screen and (max-width: 480px) {
    height: 100%;
  }
`

export const BannerContainer = styled.div.attrs((props) => ({
  className: 'container banner-container banner',
}))`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  overflow: visible;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;

  p {
    font-size: 0.9rem;
  }
`

export const IntroContainer = styled.div.attrs((props) => ({
  className: 'intro py-5',
}))`
  margin-top: 1.5rem;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    background: -webkit-linear-gradient(
      45deg,
      ${COLOR.GRADIENT_1} 30%,
      ${COLOR.GRADIENT_2} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    bottom: -200px;
    opacity: 0;
  }

  @media only screen and (max-width: 1200px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export const H1_name = styled.h1.attrs((props) => ({
  className: 'name',
}))``

export const AniContainer = styled.div.attrs((props) => ({
  className: 'ani-container',
}))`
  overflow: visible;
`
