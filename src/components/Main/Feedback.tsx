import React,{useState} from 'react';
import * as F from './MainElements';
import ArrowUp from '../../assets/shared/icon-arrow-up.svg';
import CommentIcon from '../../assets/shared/icon-comments.svg';
import {FilterBtn} from '../../utilities/buttons';

const Feedback = () => {
    const [vote, setVote] = useState(false);
    const [count, setCount] = useState(0);
    const handleVoteClick = ()=>{
        vote ? setCount(count - 1) : setCount(count + 1);
        setVote(!vote);
    }
    return (
        <F.FeedbackWrapper>
                <F.FeedbackLi>
                    <F.Vote data-voted={vote} onClick={handleVoteClick}>
                        <F.VoteIcon src={ArrowUp} data-voted={vote}/>
                        {count}
                    </F.Vote>
                    <F.SuggestionWrapper>
                        <F.SuggestionTitle to="/">
                            Add tags for solutions
                        </F.SuggestionTitle>
                        <F.SuggestionText>
                            Easier to search for solutions based on a specific stack.
                        </F.SuggestionText>
                        <FilterBtn data-no-pointer={true} data-no-space={true} data-text="Enhancement" />
                    </F.SuggestionWrapper>
                    <F.CommentCounter>
                        <F.CommentIcon src={CommentIcon} />
                            2
                    </F.CommentCounter>
                </F.FeedbackLi>
                <F.FeedbackLi>
                    <F.Vote data-voted={vote} onClick={handleVoteClick}>
                        <F.VoteIcon src={ArrowUp} data-voted={vote}/>
                        {count}
                    </F.Vote>
                    <F.SuggestionWrapper>
                        <F.SuggestionTitle to="/">
                            Add tags for solutions
                        </F.SuggestionTitle>
                        <F.SuggestionText>
                            Easier to search for solutions based on a specific stack.
                        </F.SuggestionText>
                        <FilterBtn data-no-pointer={true} data-no-space={true} data-text="Enhancement" />
                    </F.SuggestionWrapper>
                    <F.CommentCounter>
                        <F.CommentIcon src={CommentIcon} />
                            2
                    </F.CommentCounter>
                </F.FeedbackLi>
        </F.FeedbackWrapper>
    )
}

export default Feedback
