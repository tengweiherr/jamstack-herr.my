import COLOR from '@/utils/styled/color'
import styled from 'styled-components'

export const ProjectsWrapper = styled.div.attrs((props) => ({
  className: 'd-flex flex-row w-100 mt-5',
}))`
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ProjectCard = styled.div.attrs((props) => ({
  className: 'mb-5 mx-3',
}))`
  padding: 2rem;
  position: relative;
  overflow: hidden;
  flex: 1 1 30.5%;
  max-width: 30.5%;
  background: ${COLOR.LIGHT_GREY};
  border-radius: 0.4rem;
  transition: all 0.3s ease;

  @media only screen and (max-width: 768px) {
    flex: 1 1 100%;
    max-width: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 1399px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  h5 {
    font-weight: 600;
    letter-spacing: 0.03rem;
    color: ${COLOR.CYAN};
    width: 80%;
  }

  p {
    font-size: 0.9rem;
  }

  span.tool {
    font-size: 0.75rem;
    padding-right: 0.8rem;
    border-radius: 1rem;
    color: ${COLOR.DIM_GREY};

    &:last-child {
      padding-right: 0rem;
    }
  }

  strong {
    color: ${COLOR.ORANGE};
  }
`

export const DescriptionBox = styled.div.attrs((props) => ({
  className: 'my-4',
}))`
  height: 100px;
  max-height: 100px;
`

export const ToolsBox = styled.div.attrs((props) => ({
  className: '',
}))``
