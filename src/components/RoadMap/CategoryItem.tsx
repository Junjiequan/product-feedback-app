import * as C from "./RoadMapElements";
import ArrowUp from "../../assets/shared/icon-arrow-up.svg";
import CommentIcon from "../../assets/shared/icon-comments.svg";
import { Item, Comments_type } from "../../Types";
import { upVote, downVote } from "../../actions";
import { useDispatch } from "react-redux";
import { roadMapVariants } from "../../utilities/framerMotion";

const CategoryItem = (props: Item) => {
  const dispatch = useDispatch();
  const repliesLength = props.comments.reduce(
    (sum: number, cur: Comments_type) => (sum += cur.replies.length),
    0
  );
  const borderColor = () => {
    if (props.status === "planned") return "Orange";
    if (props.status === "in-progress") return "DarkViolet";
    if (props.status === "live") return "LightSkyBlue";
  };

  const handleVote = () => {
    if (!props.voted) {
      dispatch(upVote(props));
    } else {
      dispatch(downVote(props));
    }
  };

  return (
    <C.CategoryItem
      data-border-color={borderColor()}
      variants={roadMapVariants.list}
      initial="initial"
      animate="in"
      exit="out"
      key={props.id}
    >
      <C.CategoryItemSpan data-border-color={borderColor()}>
        {props.status}
      </C.CategoryItemSpan>
      <C.CategoryItemLink to={"/feedback-detail/" + props.link}>
        {props.title}
      </C.CategoryItemLink>
      <C.CategoryItemDesc>{props.detail}</C.CategoryItemDesc>
      <C.Feature> {props.category} </C.Feature>
      <C.VoteAndCommentedWrapper>
        <C.Vote data-voted={props.voted} onClick={handleVote}>
          <C.VoteIcon src={ArrowUp} data-voted={props.voted} />
          {props.vote}
        </C.Vote>
        <C.CommentCounter to={"/feedback-detail/" + props.link}>
          <C.CommentIcon src={CommentIcon} />
          {props.comments.length + repliesLength}
        </C.CommentCounter>
      </C.VoteAndCommentedWrapper>
    </C.CategoryItem>
  );
};

export default CategoryItem;
