import { AWS_S3_PREFIX } from "@/utils/const"
import COLOR from "@/utils/styled/color"
import styled from "styled-components"

export const HighlightSection = styled.section.attrs(props=>({
    className:'highlight',
    ref: props.ref
}))`
    padding: 40px 0 60px 0;
    background: -webkit-linear-gradient(0deg, #659999, #f4791f);
`

export const H2 = styled.h2.attrs(props=>({
    className:'white text-break pe-3',
}))`
    white-space: nowrap;

    span {
        white-space: nowrap
    }
`

export const SliderContainer = styled.div.attrs(props=>({
    className: 'container slider-container overflow-visible'
}))`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
`

export const HorizontalContainer = styled.div.attrs(props=>({
    className: 'horizontal-container desktop ipad ' + ( props.className ? props.className : '' )
}))`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;

    @media only screen and (max-width: 480px) {
        padding: 0 0.75rem;
    }

    &.active {
        cursor: -webkit-grab;
        cursor: grab;
    }

    &.active .item {
        -webkit-transform: scale(0.95) !important;
        transform: scale(0.95) !important;
    }
`

export const Slide = styled.div.attrs(props=>({
    className: 'item ' + ( props.className ? props.className : '' ),
    id: props.id
}))`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: flex-start;
    -ms-flex-pack: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 80%;
    min-width: 800px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    background: #e8ece6;
    border-radius: 15px;
    padding: 50px;
    margin-right: 25px;
    -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    &#item-4 {
        margin-right: 0px !important;
    }

    @media only screen and (max-width: 768px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 300px;
        min-width: 300px;
        padding: 20px;
    }

    &:hover {
        -webkit-box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
    }

    &:hover .highlight-img-div {
        -webkit-transform: scale(1.05) !important;
        transform: scale(1.05) !important;
    }
     
    &#item-last {
        min-width: 400px;
        background: rgba(255,255,255,0.4);
        justify-content: center;
        align-items: center;
    }

`

export const AwardWrapper = styled.div`
    position: absolute; 
    top: 45px;
    right: -60px;
    z-index: 99999;
`

export const AwardInner = styled.div.attrs(props=>({
    className: 'award-winning'
}))`
    width: 250px;
    height: 50px;
    background: #e3852d;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);

    h6 {
        margin-bottom: 0;
        font-weight: 700;
        font-size: 1.2rem;
    }
`

export const HighlightImgContainer = styled.div.attrs(props=>({
    className: 'highlight-img-div'
}))`
    background: url(${AWS_S3_PREFIX}${props => props["aria-label"]}) no-repeat;
    width: 250px;
    min-width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 10px solid #0c6b66;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-position: center !important;
    background-size: cover !important;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    @media only screen and (max-width: 768px) {
        height: 200px;
        width: 200px;
        min-width: 200px;
    }

    img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }

    &:hover .hover-icon-bg {
        background: rgba(0, 0, 0, 0.5);
    }

    &:hover .hover-icon {
        opacity: 1;
        margin-bottom: 0;
    }

    &:hover .hover-icon-bg {
        background: rgba(0, 0, 0, 0.5);
    }

`

export const HoverIconContainer = styled.div.attrs(props=>({
    className: 'position-absolute hover-icon'
}))`
    z-index: 999;
    opacity: 0;
    margin-bottom: -20px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;

    img {
        width: 2.2rem !important;
        height: 2.2rem !important;
        -o-object-fit: contain !important;
        object-fit: contain !important;
        -webkit-filter: brightness(0) invert(0.95);
        filter: brightness(0) invert(0.95);
    }
`

export const HoverIconBG = styled.div.attrs(props=>({
    className: 'hover-icon-bg position-absolute w-100 h-100'
}))`
    background: rgba(0, 0, 0, 0);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
`

export const SlideInner = styled.div.attrs(props=>({
    className: 'item-inner ' + ( props.className ? props.className : '' )
}))`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 250px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-left: 2.5rem;

    @media only screen and (max-width: 480px) {
        margin-left: 0;
        height: -webkit-fit-content;
        height: -moz-fit-content;
        height: fit-content;
        margin-top: 20px;
    }

    p.description {
        -ms-flex-preferred-size: 40%;
        flex-basis: 40%;
        text-align: justify;
        font-size: 0.9rem;

        strong {
            color: ${COLOR.ORANGE};
        }
    }

    @media only screen and (max-width: 768px) {
        p.description {
          text-align: left;
          -ms-flex-preferred-size: 45%;
          flex-basis: 45%;
        }
    }

    p.description.sotm {
        font-weight: 500;
        color: #e3852d;
        font-style: italic;
    }

    .read-more {
        font-size: 0.8rem;
        padding: 6px 18px !important;
    }

    #item-last &{
        justify-content: center;
        align-items: center;
        text-align: center;

        h4 {
            margin-bottom: 1rem;
        }
    }
`

export const H3 = styled.h3.attrs(props=>({
    className: 'cyan'
}))`
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;

    @media only screen and (max-width: 768px) {
        -ms-flex-preferred-size: 20%;
        flex-basis: 20%;
    }
`

export const RoleTools = styled.div.attrs(props=>({
    className: 'role-tools'
}))`
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;

    @media only screen and (max-width: 768px) {
        -ms-flex-preferred-size: 35%;
        flex-basis: 35%;
    }
` 