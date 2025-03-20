import { Copyright, FooterContainer, MyName } from './Footer.styled'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <Copyright className="m-0 p-3">
            Designed & Built by <MyName>Teng Wei Herr</MyName>
          </Copyright>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
