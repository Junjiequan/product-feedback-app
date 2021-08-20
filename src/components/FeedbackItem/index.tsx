import ArrowUp from "../../assets/shared/icon-arrow-up.svg";
import CommentIcon from "../../assets/shared/icon-comments.svg";
import * as F from "./FeedbackItemElements";
import { useDispatch } from "react-redux";
import { upVote, downVote } from "../../actions";
import { Item } from "../../Types";

const FeedbackItem = (item: Item, index: number, clickable: boolean) => {
  const dispatch = useDispatch();
  const handleVote = () => {
    if (!item.voted) {
      dispatch(upVote(item));
    } else {
      dispatch(downVote(item));
    }
  };

  return (
    <F.FeedbackLi key={index} data-clickable={clickable}>
      <F.Vote data-voted={item.voted} onClick={handleVote}>
        <F.VoteIcon src={ArrowUp} data-voted={item.voted} />
        {item.vote}
      </F.Vote>
      <F.SuggestionWrapper
        to={"/feedback-detail/" + item.link}
        data-clickable={clickable}
      >
        <F.SuggestionTitle>{item.title}</F.SuggestionTitle>
        <F.SuggestionText>{item.detail}</F.SuggestionText>
        <F.Feature
          data-no-pointer={true}
          data-no-space={true}
          data-text={item.category}
        />
      </F.SuggestionWrapper>
      <F.CommentCounter
        to={"/feedback-detail/" + item.link}
        data-clickable={clickable}
      >
        <F.CommentIcon src={CommentIcon} />
        {item.comments.length}
      </F.CommentCounter>
    </F.FeedbackLi>
  );
};

export default FeedbackItem;
