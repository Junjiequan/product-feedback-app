import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {COLORS,TRANSITION,FONT} from '../../utilities/constants'

export const FeedbackLi = styled.li`
    display:flex;
    justify-content:space-between;
    padding:2.4rem 3.2rem;
    background:${COLORS.white};
    height:fit-content;
    margin-bottom:2rem;
    border-radius:10px;
`
export const Vote = styled.button`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:.9rem 0;
    width:4rem;
    height:5.3rem;
    border-radius:10px;
    font-weight:700;
    font-size:1.3rem;
    letter-spacing:-0.02rem;
    cursor:pointer;
    transition:all ${TRANSITION.ease};
    background:${(props:any)=>props['data-voted']? `${COLORS.blue}`:`${COLORS.grayMid}`};
    color:${(props:any)=>props['data-voted']? `${COLORS.white}`:`${COLORS.darkBlueDark}`};
    &:hover{
        background:${(props:any)=>props['data-voted']? `${COLORS.blueMid}`:`${COLORS.blueHoverLight}`};

    }
`
export const VoteIcon = styled.img`
    filter:${(props:any)=>props['data-voted']? 'brightness(5)':'0'};
`
export const SuggestionTitle = styled.p`
    ${FONT.suggestionTitle};
    color:${COLORS.darkBlue};
    margin-bottom:.4rem;
    transition:color ${TRANSITION.ease};
`
export const SuggestionWrapper = styled(LinkR)`
    display:flex;
    flex-direction:column;
    flex:1 1 60%;
    margin:0 4rem;
    pointer-events: ${(props:any) =>props['data-clickable']?'':'none'};
    cursor:pointer;
    &:hover ${SuggestionTitle}{
        color:${COLORS.blue};
    }
`

export const SuggestionText = styled.p`
    ${FONT.regular};
    color:${COLORS.darkBlueLight};
    margin-bottom:1.2rem;
`
export const Feature = styled.span`
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
export const CommentCounter = styled(LinkR)`
    display:flex;
    align-items:center;
    align-self:center;
    font-weight:700;
    cursor:pointer;
    height:fit-content;
    pointer-events: ${(props:any) =>props['data-clickable']?'':'none'};
`
export const CommentIcon = styled.img`
    margin-right:.8rem;
    width:1.8rem;
    height:1.6rem;
`