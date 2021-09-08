import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import ArrowUp from "../../assets/shared/icon-arrow-up.svg";
import CommentIcon from "../../assets/shared/icon-comments.svg";
import * as F from "./FeedbackItemElements";
import { useDispatch } from "react-redux";
import { upVote, downVote } from "../../actions";
import { Comments_type, Item } from "../../Types";
import { feedbackVariants } from "../../utilities/framerMotion";
import { motion } from "framer-motion";

const FeedbackItem = (props: Item) => {
  const controls = useAnimation();
  const location = useLocation();
  const path = location.pathname.replace("/feedback-detail/", "");
  const clickable = props.link.toLowerCase() !== path;
  clickable === true ? controls.start(feedbackVariants.in) : controls.stop();
  const dispatch = useDispatch();
  const skipTab = useRef<any>();
  const skipTab2 = useRef<any>();
  const countReplies: number = props.comments.reduce(
    (sum: number, cur: Comments_type) => (sum += cur.replies.length),
    0
  );
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
    <motion.div data-clickable={clickable} key={props.id} layout>
      <F.FeedbackLi
        initial={clickable === true ? "initial" : "stop"}
        animate={controls}
        variants={feedbackVariants}
      >
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
          {props.comments.length + countReplies}
        </F.CommentCounter>
      </F.FeedbackLi>
    </motion.div>
  );
};

export default FeedbackItem;
