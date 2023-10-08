import styled from 'styled-components'

export const IntroductionSection = styled.section.attrs((props) => ({}))`
  padding-top: 120px;

  h2 {
    font-size: 60px;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      padding-bottom: 12px;
    }
  }

  @media only screen and (max-width: 480px) {
    section.introducing h2 {
      text-align: center;
      padding-bottom: 0px;
    }
  }
`

export const AboutMe = styled.div.attrs((props) => ({
  className: 'about-me',
}))`
  background-color: #e8ece6;
  padding: 0 0 80px 0;

  @media only screen and (max-width: 768px) {
    & .container .intro-photos {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
  }
`

export const IntroPhotoContainer = styled.div.attrs((props) => ({
  className: 'row mb-5 intro-photos',
}))``

export const Parallax = styled.div.attrs((props) => ({
  className: 'col-lg-6 layer-container parallax',
  'data-parallax': '1',
}))`
  position: relative;

  img {
    width: 300px;
    height: 400px;
    -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    position: absolute;
    -o-object-fit: cover;
    object-fit: cover;
  }

  @media only screen and (max-width: 992px) {
    img {
      position: relative;
      width: 100%;
    }
  }

  .layer-1 img {
    top: 0px;
    right: 20px;
  }

  @media only screen and (max-width: 992px) {
    .layer-1 img {
      display: none;
    }
  }

  .layer-2 img {
    top: 100px;
    left: 0px;
  }

  @media only screen and (max-width: 992px) {
    .layer-2 img {
      display: none;
    }
  }

  @media only screen and (max-width: 992px) {
    .mobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      width: 100%;
    }
  }

  @media only screen and (max-width: 480px) {
    .mobile {
      display: block;
    }
  }

  .mobile img {
    display: none;
  }

  @media only screen and (max-width: 992px) {
    .mobile img {
      display: block;
      width: 49%;
    }
  }

  @media only screen and (max-width: 480px) {
    .mobile img {
      display: block;
      width: 100%;
    }
  }

  .mobile img.ipad {
    display: none;
  }

  @media only screen and (max-width: 992px) {
    .mobile img.ipad {
      display: block;
    }
  }

  @media only screen and (max-width: 480px) {
    .mobile img.ipad {
      display: none;
    }
  }
`

export const IntroContainer = styled.div.attrs((props) => ({
  className: 'col-lg-6 intro position-relative',
}))`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

export const DescriptionContainer = styled.div.attrs((props) => ({
  className: 'row description pe-5',
}))`
  @media only screen and (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
`

export const SkillsContainer = styled.div.attrs((props) => ({
  className: 'row position-relative skills',
}))``

export const SkillsListContainer = styled.div.attrs((props) => ({
  className: 'row mt-4 px-3 skillsListContainer',
}))``

export const SkillsList = styled.ul.attrs((props) => ({
  className: 'col-6',
}))``
