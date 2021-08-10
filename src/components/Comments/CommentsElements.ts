import styled from 'styled-components';
import { SPACE,COLORS,TRANSITION } from '../../utilities/constants';


export const Wrapper = styled.div`
    display:block;
    padding:${SPACE.comments};
    background:${COLORS.white};
    border-radius:10px;
    height:auto;
`
export const Title = styled.h2`
    color:${COLORS.darkBlue};
    margin-bottom:2.8rem;
`
export const DirectComments = styled.div`
    display:flex;
    position:relative;
    padding-bottom:3.2rem;
    &:not(:first-of-type){
        padding-top:3.2rem;
    }
    &:not(:last-of-type):after{
        position:absolute;
        content:'';
        bottom:0;
        display:block;
        width:100%;
        height:1px;
        background:${COLORS.darkBlueDark};
        opacity:.1;
    }
`
export const Avatar = styled.img`
    width:4rem;
    height:4rem;
    border-radius:100%;
`
export const CommentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:3.2rem;
    width:100%;
`
export const ReplyWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:1.7rem;
`
export const Name = styled.h3`
    color:${COLORS.darkBlue};
`
export const Id = styled.span`
    font-weight:400;
    color:${COLORS.darkBlueLight};
`
export const Reply = styled.button`
    cursor:pointer;
    color:${COLORS.blue};
    position:relative;
    &:before{
        position:relative;
        font-weight:600;
        content:attr(data-text);
    }
    &:after{
        content:'';
        position:absolute;
        left:0;bottom:1px;
        display:flex;
        width:100%;
        height:1px;
        opacity:0;
        background:${COLORS.blue};
        transition:all ${TRANSITION.ease};
    }
    &:hover{
        &:after{
            opacity:1;
        }
    }
`
export const CommentText = styled.p`
    color:${COLORS.darkBlueLight};
`