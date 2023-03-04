import COLOR from "@/utils/styled/color"
import styled from "styled-components"

export const AwardWrapper = styled.div.attrs(props=>({
    className: '' + (props.className ? props.className : '')
}))`
    position: absolute; 
    top: 25px;
    right: -50px;
    z-index: 99999;

    &.sm {
        top: 20px;
    }
`

export const AwardInner = styled.div.attrs(props=>({
    className: 'award-winning ' + (props.className ? props.className : '')
}))`
    width: 200px;
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

    &.sm {
        width: 170px;
        height: 35px;
    }

    span {
        color: ${COLOR.WHITE};
        margin-bottom: 0;
        font-weight: 700;
        font-size: 1rem;
    }

    &.sm span {
        font-size: 0.7rem;
    }
`