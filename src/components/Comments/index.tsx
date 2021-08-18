import * as C from "./CommentsElements";
import DirectComment from "./DirectComment";
import DATA from "../../data/Data-test";

const Comments = () => {
  const COMMENTS = DATA.map((item: any) => item.comments);
  return (
    <C.Wrapper>
      <C.Title>4 Comments</C.Title>
      {COMMENTS[0].map(DirectComment)}
    </C.Wrapper>
  );
};

export default Comments;
