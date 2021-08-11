import ArrowUp from '../../assets/shared/icon-arrow-up.svg';
import CommentIcon from '../../assets/shared/icon-comments.svg';
import * as F from './FeedbackItemElements';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVote } from '../../actions';

const FeedbackItem = (item:any,index:any,clickable:boolean)=>{
    const voteCounter = useSelector((state:any)=>state.voteCounter.counter)
    const voted = useSelector((state:any)=>state.voteCounter.voted)
    const dispatch = useDispatch();
    return(                
        <F.FeedbackLi key={index} >
            <F.Vote data-voted={voted} onClick={()=>dispatch(toggleVote())}>
                <F.VoteIcon src={ArrowUp} data-voted={voted}/>
                {voteCounter}
            </F.Vote>
            <F.SuggestionWrapper to={'/feedback-detail/' + item.link} data-clickable={clickable}>
                <F.SuggestionTitle >
                    {item.title}
                </F.SuggestionTitle>
                <F.SuggestionText>
                    {item.content}
                </F.SuggestionText>
                <F.Feature data-no-pointer={true} data-no-space={true} data-text={item.feature} />
            </F.SuggestionWrapper>
            <F.CommentCounter to={'/feedback-detail/' + item.link} data-clickable={clickable} >
                <F.CommentIcon src={CommentIcon}  />
                    {item.comments}
            </F.CommentCounter>
        </F.FeedbackLi>
    )
}

export default FeedbackItem
