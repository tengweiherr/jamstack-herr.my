import COLOR from '@/utils/styled/color'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 3rem;
  background: ${COLOR.LIGHT_GREY};
`

export const Copyright = styled.p.attrs((props) => ({
  className: 'm-0 p-3',
}))`
  text-align: center;
  font-size: 0.8rem;
`

export const MyName = styled.strong`
  background: -webkit-linear-gradient(
    45deg,
    ${COLOR.GRADIENT_1} 30%,
    ${COLOR.GRADIENT_2} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
