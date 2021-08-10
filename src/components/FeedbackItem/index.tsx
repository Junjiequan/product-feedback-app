import React,{useState} from 'react'
import ArrowUp from '../../assets/shared/icon-arrow-up.svg';
import CommentIcon from '../../assets/shared/icon-comments.svg';
import * as F from './FeedbackItemElements';

const FeedbackItem = (item:any,index:number,clickable:boolean)=>{
    const [vote, setVote] = useState(false);
    const [count, setCount] = useState(0);
    const handleVoteClick = ()=>{
        vote ? setCount(count - 1) : setCount(count + 1);
        setVote(!vote);
    }
    return(                
        <F.FeedbackLi key={index} >
            <F.Vote data-voted={vote} onClick={handleVoteClick}>
                <F.VoteIcon src={ArrowUp} data-voted={vote}/>
                {count}
            </F.Vote>
            <F.SuggestionWrapper to={item.link} data-clickable={clickable}>
                <F.SuggestionTitle >
                    {item.title}
                </F.SuggestionTitle>
                <F.SuggestionText>
                    {item.content}
                </F.SuggestionText>
                <F.Feature data-no-pointer={true} data-no-space={true} data-text={item.feature} />
            </F.SuggestionWrapper>
            <F.CommentCounter to={item.link} data-clickable={clickable} >
                <F.CommentIcon src={CommentIcon}  />
                    {item.comments}
            </F.CommentCounter>
        </F.FeedbackLi>
    )
}

export default FeedbackItem
