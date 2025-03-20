import styled from 'styled-components'

export const IntroductionSection = styled.section.attrs((props) => ({}))`
  padding-top: 60px;

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
  padding-top: 30px;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }

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

export const IntroContainer = styled.div.attrs((props) => ({
  className: 'intro position-relative',
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
  className: 'row px-3 skillsListContainer',
}))``

export const SkillsList = styled.ul.attrs((props) => ({
  className: 'col-6',
}))``
