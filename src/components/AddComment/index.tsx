import { useState } from "react";
import * as C from "./AddCommentElements";
import { FeedBackBtnPurple } from "../../utilities/buttons";

const AddComment = () => {
  const [saveComment, setSaveComment] = useState<any>("");
  const [textCount, setTextCount] = useState<number>(0);
  const CharacterRemain = 225 - textCount;
  const HandleTextCount = (e: any) => {
    setTextCount(e.target.value.length);
    setSaveComment(e.target.value);
  };
  const HandleSubmit = (e: any) => {
    e.preventDefault();
    setSaveComment("");
    alert(saveComment);
  };

  return (
    <C.Wrapper>
      <C.Title>Add Comment</C.Title>
      <C.AddCommentWrapper
        id="add-comment"
        data-text={CharacterRemain + " characters left"}
      >
        <C.TextArea
          name="comment"
          rows={3}
          maxLength={225}
          onChange={(e) => HandleTextCount(e)}
          value={saveComment}
          required
        />
        <FeedBackBtnPurple
          data-text="Post Comment"
          form="add-comment"
          onClick={(e) => HandleSubmit(e)}
        />
      </C.AddCommentWrapper>
    </C.Wrapper>
  );
};

export default AddComment;
