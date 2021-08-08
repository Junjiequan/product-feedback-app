import React,{useState} from 'react';
import * as F from './MainElements';
import ArrowUp from '../../assets/shared/icon-arrow-up.svg';
import CommentIcon from '../../assets/shared/icon-comments.svg';
import Empty from '../../assets/suggestions/illustration-empty.svg'
import {FilterBtn} from '../../utilities/buttons';
import {FeedBackBtn} from '../../utilities/buttons'

const Feedback = () => {
    /////////////test section///////////
    const TEST_NO_CONTENT = false;
    const DATA = [
        {
            link:'/',
            title:'Add tags for solutions',
            content:'Easier to search for solutions based on a specific stack.',
            feature:'Enhancement',
            comments:'2'
        },
        {
            link:'/',
            title:'Add tags for solutions',
            content:'Easier to search for solutions based on a specific stack.',
            feature:'Enhancement',
            comments:'2'
        },
        {
            link:'/',
            title:'Add tags for solutions',
            content:'Easier to search for solutions based on a specific stack.',
            feature:'Enhancement',
            comments:'2'
        },
    ]
    /////////////\test section//////////

    const [vote, setVote] = useState(false);
    const [count, setCount] = useState(0);
    const handleVoteClick = ()=>{
        vote ? setCount(count - 1) : setCount(count + 1);
        setVote(!vote);
    }
    const EmptyItem = ()=>{
        return(
            <F.Empty>
                <F.EmptyIcon src={Empty} alt="empty icon"/>
                <F.EmptyTitle>There is no feedback yet.</F.EmptyTitle>
                <F.EmptyText>
                    Got a suggestion? Found a bug that needs to be squashed?<br/>
                    We love hearing about new ideas to improve our app.
                </F.EmptyText>
                <FeedBackBtn data-text="+ Add Feedback" to="/feedback-detail"/>
            </F.Empty>
        )
    }
    const FeedbackItem = (item:any,index:number)=>{
        return(                
            <F.FeedbackLi key={index}>
                <F.Vote data-voted={vote} onClick={handleVoteClick}>
                    <F.VoteIcon src={ArrowUp} data-voted={vote}/>
                    {count}
                </F.Vote>
                <F.SuggestionWrapper>
                    <F.SuggestionTitle to={item.link}>
                        {item.title}
                    </F.SuggestionTitle>
                    <F.SuggestionText>
                        {item.content}
                    </F.SuggestionText>
                    <FilterBtn data-no-pointer={true} data-no-space={true} data-text={item.feature} />
                </F.SuggestionWrapper>
                <F.CommentCounter to={item.link}>
                    <F.CommentIcon src={CommentIcon} />
                        {item.comments}
                </F.CommentCounter>
            </F.FeedbackLi>
        )
    }
    return (
        <F.FeedbackWrapper>
            { 
                TEST_NO_CONTENT
                ?EmptyItem()
                :DATA.map(FeedbackItem) 
            }
        </F.FeedbackWrapper>
    )
}

export default Feedback
