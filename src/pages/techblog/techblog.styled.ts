import COLOR from "@/utils/styled/color"
import styled from "styled-components"

export const StoriesWrapper = styled.div.attrs(props=>({
    className: 'd-flex flex-column'
}))`
    margin-top: 4rem;
    border-radius: 0.4rem;
    background: ${COLOR.LIGHT_GREY};
`

export const StoryRow = styled.div.attrs(props=>({
    className: 'd-flex flex-row'
}))`
    border-radius: 0rem;
    background: ${COLOR.LIGHT_GREY};
    padding: 2rem;
    padding-bottom: 3rem;

    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,0.03);
    }

    &:first-child {
        border-radius: 0.4rem 0.4rem 0 0;
    }

    &:last-child {
        border-radius: 0 0 0.4rem 0.4rem;
        hr {
            display: none;
        }
    }
`

export const StoryLeftColumn = styled.div.attrs(props=>({
    className: ''
}))`
    flex-basis: 20%;

    span {
        font-size: 0.9rem;
        color: ${COLOR.DIM_GREY}
    }
`

export const StoryRightColumn = styled.div.attrs(props=>({
    className: ''
}))`
    flex-basis: 80%;
    
    h5 {
        font-weight: 600;
        color: ${COLOR.CYAN}
    }

    p {
        font-size: 0.9rem;
        color: ${COLOR.BLACK};
        padding-top: 0.5rem;
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
`

export const StoryBottomLine = styled.hr`
    width: 95%;
    height: 1px;
    color: rgba(0,0,0,0.3);
    margin: 0 auto;
`