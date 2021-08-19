import { useState } from "react";
import * as C from "./AddCommentElements";
import { FeedBackBtnPurple } from "../../utilities/buttons";

const AddComment = () => {
  const [saveComment, setSaveComment] = useState("");
  const [textCount, setTextCount] = useState<number>(0);
  const CharacterRemain = 225 - textCount;
  const HandleTextCount = (e: React.ChangeEvent<HTMLElement>) => {
    const event = e.currentTarget as HTMLInputElement;
    const value = event.value;
    setTextCount(value.length);
    setSaveComment(value);
  };
  const HandleSubmit = (e: React.MouseEvent<HTMLElement>) => {
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
          onChange={HandleTextCount}
          value={saveComment}
          required
        />
        <FeedBackBtnPurple
          data-text="Post Comment"
          form="add-comment"
          onClick={HandleSubmit}
        />
      </C.AddCommentWrapper>
    </C.Wrapper>
  );
};

export default AddComment;
