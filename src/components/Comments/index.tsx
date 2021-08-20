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
  const countReplies: number = targetDataComments.reduce(
    (sum: number, cur: Comments_type) => (sum += cur.replies.length),
    0
  );
  return (
    <C.Container>
      <C.Title>
        {targetDataComments.length + countReplies} &nbsp; Comments
      </C.Title>
      <C.Wrapper>
        {targetDataComments.map((props: Comments_type) => (
          <DirectComment {...props} key={props.id} />
        ))}
      </C.Wrapper>
    </C.Container>
  );
};

export default Comments;
