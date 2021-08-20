import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import ArrowUp from "../../assets/shared/icon-arrow-up.svg";
import CommentIcon from "../../assets/shared/icon-comments.svg";
import * as F from "./FeedbackItemElements";
import { useDispatch } from "react-redux";
import { upVote, downVote } from "../../actions";
import { Item } from "../../Types";

const FeedbackItem = (props: Item) => {
  const location = useLocation();
  const path = location.pathname.replace("/feedback-detail/", "");
  const clickable = props.link.toLowerCase() !== path;
  const dispatch = useDispatch();
  const skipTab = useRef<any>();
  const skipTab2 = useRef<any>();
  useEffect(() => {
    if (!clickable) {
      skipTab.current.tabIndex = -1;
      skipTab2.current.tabIndex = -1;
    }
  }, [clickable]);
  const handleVote = () => {
    if (!props.voted) {
      dispatch(upVote(props));
    } else {
      dispatch(downVote(props));
    }
  };

  return (
    <F.FeedbackLi data-clickable={clickable}>
      <F.Vote data-voted={props.voted} onClick={handleVote}>
        <F.VoteIcon src={ArrowUp} data-voted={props.voted} />
        {props.vote}
      </F.Vote>
      <F.SuggestionWrapper
        to={"/feedback-detail/" + props.link}
        data-clickable={clickable}
        ref={skipTab}
      >
        <F.SuggestionTitle>{props.title}</F.SuggestionTitle>
        <F.SuggestionText>{props.detail}</F.SuggestionText>
        <F.Feature
          data-no-pointer={true}
          data-no-space={true}
          data-text={props.category}
        />
      </F.SuggestionWrapper>
      <F.CommentCounter
        to={"/feedback-detail/" + props.link}
        data-clickable={clickable}
        ref={skipTab2}
      >
        <F.CommentIcon src={CommentIcon} />
        {props.comments.length}
      </F.CommentCounter>
    </F.FeedbackLi>
  );
};

export default FeedbackItem;
