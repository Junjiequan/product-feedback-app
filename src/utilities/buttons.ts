import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import { COLORS,FONT,TRANSITION,DEVICE } from './constants'; 

export const FilterBtn = styled.button`
    background:${COLORS.grayDark};
    border-radius:10px;
    color:${COLORS.blue};
    padding:.5rem 1.6rem;
    width:fit-content;
    height:fit-content;
    margin-right:.8rem;
    margin-bottom:${(props:any)=>props['data-no-space']?'':'1.2rem'};
    pointer-events:${(props:any)=>props['data-no-pointer']?'none':'auto'};
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    ${FONT.semiBold};
    transition:all ${TRANSITION.ease};
    &:hover{
        background:${COLORS.blueHoverLight};
    }
    &:focus{
        background:${COLORS.blue};
        color:${COLORS.white};
    }
    &:before{
        content:attr(data-text);
    }
`
export const FeedBackBtn = styled(LinkR)`
    background:${COLORS.purple};
    border-radius:10px;
    cursor:pointer;
    position:relative;
    font-weight:700;
    padding:1.05rem 2.5rem;
    transition:box-shadow ${TRANSITION.ease};
    &:before{
        opacity:.9;
        content:attr(data-text);
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center; 
    }
    &:hover{
        box-shadow:inset 0 0 0 100px hsla(0,0%,100%,0.2);
    }
    &:active{
        transform:translateY(2px);
    }
    @media ${DEVICE.sm}{
        font-size:1.3rem;
        line-height:1.8rem;
        padding:1.05rem 1.6rem;
    }
`
export const FeedBackBtnBlue = styled(LinkR)`
    background:${COLORS.blue};
    color:${COLORS.white};
    border-radius:10px;
    cursor:pointer;
    position:relative;
    font-weight:700;
    padding:1.05rem 2.5rem;
    transition:box-shadow ${TRANSITION.ease};
    &:before{
        opacity:.9;
        content:attr(data-text);
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center; 
    }
    &:hover{
        box-shadow:inset 0 0 0 100px hsla(0,0%,100%,0.2);
    }
    &:active{
        transform:translateY(2px);
    }
    @media ${DEVICE.sm}{
        font-size:1.3rem;
        line-height:1.8rem;
        padding:1.05rem 1.6rem;
    }
`
export const FeedBackBtnPurple = styled.button`
    background:${COLORS.purple};
    color:${COLORS.white};
    border-radius:10px;
    cursor:pointer;
    height:4.4rem;
    width:fit-content;
    padding:0 2.4rem;
    font-size:1.4rem;
    position:relative;
    white-space:nowrap;
    font-weight:700;
    transition:box-shadow ${TRANSITION.ease};
    &:before{
        opacity:.9;
        content:attr(data-text);
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center; 
    }
    &:hover{
        box-shadow:inset 0 0 0 100px hsla(0,0%,100%,0.2);
    }
    &:active{
        transform:translateY(2px);
    }
    @media ${DEVICE.sm}{
        font-size:1.3rem;
        line-height:1.8rem;
        padding:1.05rem 1.6rem;
    }
`