import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import * as C from "./CommentsElements";
import DirectComment from "./DirectComment";
import { RootState, Item, Comments_type } from "../../Types";

const Comments = () => {
  const target = useLocation()
    .pathname.replace("/feedback-detail/", "")
    .toLowerCase();
  const DATA_REDUX_STORE = useSelector(
    (state: RootState) => state.feedbacks.items
  );
  const targetData = DATA_REDUX_STORE.find(
    (item: Item) => item.link.toLowerCase() === target
  );
  const targetDataComments: Comments_type[] = targetData?.comments;

  return (
    <C.Wrapper>
      <C.Title>4 Comments</C.Title>
      {targetDataComments.map(DirectComment)}
    </C.Wrapper>
  );
};

export default Comments;
