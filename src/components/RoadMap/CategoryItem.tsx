import * as C from "./RoadMapElements";
import ArrowUp from "../../assets/shared/icon-arrow-up.svg";
import CommentIcon from "../../assets/shared/icon-comments.svg";

const CategoryItem = () => {
  return (
    <C.CategoryItem>
      <C.CategoryItemSpan>Planned</C.CategoryItemSpan>
      <C.CategoryItemH3>More comprehensive</C.CategoryItemH3>
      <C.CategoryItemDesc>
        It would be great... asdajsdasij sdasij sdasij
      </C.CategoryItemDesc>
      <C.Feature> Feature </C.Feature>
      <C.VoteAndCommentedWrapper>
        <C.Vote data-voted={true}>
          <C.VoteIcon src={ArrowUp} data-voted={true} />
          15
        </C.Vote>
        <C.CommentCounter
          // to={"/feedback-detail/" + props.link}
          to="/"
        >
          <C.CommentIcon src={CommentIcon} />
          {/* {props.comments.length + countReplies} */}2
        </C.CommentCounter>
      </C.VoteAndCommentedWrapper>
    </C.CategoryItem>
  );
};

export default CategoryItem;
