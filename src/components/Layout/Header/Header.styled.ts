import styled from 'styled-components'

export const HeaderContainer = styled.header.attrs((props) => ({
  className: props.className ? props.className : '',
}))``

export const Navbar = styled.nav.attrs((props) => ({
  className:
    'navbar navbar-expand-lg ' + (props.className ? props.className : ''),
}))`
  background-color: none;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  @media only screen and (max-width: 768px) {
    &.mobile-nav-expand {
      background: rgba(0, 0, 0, 0.1);
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }
  }

  & .logo {
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
  }

  & .logo img {
    position: relative;
  }

  @media only screen and (max-width: 768px) {
    .logo img {
      width: 40px;
      height: auto;
    }
  }
`

export const NavbarToggler = styled.a.attrs((props) => ({
  className: 'navbar-toggler ' + (props.className ? props.className : ''),
}))`
  border: none;
`

export const NavbarCollapse = styled.div.attrs((props) => ({
  className: 'navbar-collapse ' + (props.className ? props.className : ''),
}))`
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`

export const NavbarItemList = styled.ul.attrs((props) => ({
  className:
    'navbar-nav mx-auto justify-content-around align-items-center w-100 ' +
    (props.className ? props.className : ''),
}))`
  padding: 1rem 3rem;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0;
  }
`

export const NavItem = styled.li.attrs((props) => ({
  className: 'nav-item ' + (props.className ? props.className : ''),
}))`
  width: 150px;
  margin: 5px 0;

  & a.nav-link {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    text-align: center;
    padding: 0 1rem;
    position: relative;
    bottom: 100px;
  }

  & a.nav-link.resume {
    color: black;
    border: solid 2px black;
    padding: 8px 20px !important;
  }

  & a.nav-link:hover {
    color: black;
  }

  & a.nav-link.active {
    color: #0c6b66 !important;
    font-weight: 600;
  }
`
