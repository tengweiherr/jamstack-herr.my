import { Copyright, FooterContainer, MyName } from './Footer.styled'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <Copyright>
            Designed & Built by <MyName>Teng Wei Herr</MyName>
          </Copyright>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
