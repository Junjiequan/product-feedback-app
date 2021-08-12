import styled from 'styled-components';
import { SPACE,COLORS,TRANSITION } from '../../utilities/constants';
import { ANIM } from '../../utilities/animation'; 


/////////////////////////////
//Index 
/////////////////////////////

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


/////////////////////////////
//DirectComment  
/////////////////////////////

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
    object-fit: cover;
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
    color:${(props:any)=>props['data-text']==='Reply'?`${COLORS.blue}`:`${COLORS.darkBlueLight}`};
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
        background:${(props:any)=>props['data-text']==='Reply'?`${COLORS.blue}`:`${COLORS.darkBlueLight}`};
        transition:all ${TRANSITION.ease};
    }
    &:hover{
        &:after{
            opacity:1;
        }
    }
`
export const CommentTextWrapper = styled.div`
    display:block;
`
export const CommentText = styled.p`
    color:${COLORS.darkBlueLight};
`
export const InnerCommentWrapper = styled.div`
    position: relative;
    height:auto;
    width:105%;
    margin-left:-5%;
    word-break: break-word;
    /* overflow-wrap:anywhere;  (dosen't support safari) */  
    &:before{
        content:'';
        left:-2.5rem; top:-5rem;
        position:absolute;
        display: block;
        height:100%;
        width:1px;
        background:${COLORS.darkBlueDark};
        opacity:.1;
    }
`

/////////////////////////////
//ReplyComment 
/////////////////////////////

export const ReplyCommentWrapper = styled.div`
    display:${(props:any)=>props['data-reply-open']?'flex':'none'};
    justify-content: space-between;
    transition:all ${TRANSITION.ease};
    animation: ${ANIM.fade} .4s linear;
    margin-top:2.4rem;
`
export const TextArea = styled.textarea`
    width:80%;
    margin-right:2rem;
    min-height:8rem;
    resize:none;
    border-radius:5px;
    padding:1.6rem 2.4rem;
    border:0;
    overflow-y: auto;
    background:${COLORS.grayLight};
    color:${COLORS.darkBlue};
    transition:all ${TRANSITION.ease};
    &:focus{
        outline:0;
        box-shadow: 0 0 0 1px ${COLORS.blue};
    }
    ::-webkit-scrollbar {
        width: 7px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 5px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: hsla(0,0%,0%,0.1);
        border-radius: 5px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: hsla(231, 33%, 34%,0.5);
        opacity:0.2;
    }
`

/////////////////////////////
//InnerComments 
/////////////////////////////

export const InnerComments = styled.div`
    display:flex;
    margin-top:3.2rem;
    position:relative;
`