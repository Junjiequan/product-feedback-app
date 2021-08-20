import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import * as C from "./AddCommentElements";
import { FeedBackBtnPurple } from "../../utilities/buttons";
import { addComment } from "../../actions";
import { nanoid } from "nanoid";

const AddComment = () => {
  const [saveComment, setSaveComment] = useState("");
  const [textCount, setTextCount] = useState<number>(0);
  const randomId = nanoid(10);

  const dispatch = useDispatch();
  const CharacterRemain = 225 - textCount;
  const target: string = useLocation()
    .pathname.replace("/feedback-detail/", "")
    .toLowerCase();

  const handleTextCount = (e: React.ChangeEvent<HTMLElement>) => {
    const event = e.currentTarget as HTMLInputElement;
    const value = event.value;
    setTextCount(value.length);
    setSaveComment(value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSaveComment("");
    dispatch(
      addComment(
        {
          id: randomId,
          user_name: "Jay Smith Machine",
          avatar: "image-jay.jpg",
          user_id: "@machine.handsome",
          comment: e.target.comment.value,
          replies: [],
        },
        target
      )
    );
  };

  return (
    <C.Wrapper>
      <C.Title>Add Comment</C.Title>
      <C.AddCommentWrapper
        id="add-comment"
        data-text={CharacterRemain + " characters left"}
        onSubmit={handleSubmit}
      >
        <C.TextArea
          name="comment"
          rows={3}
          maxLength={225}
          onChange={handleTextCount}
          value={saveComment}
          required
        />
        <FeedBackBtnPurple data-text="Post Comment" form="add-comment" />
      </C.AddCommentWrapper>
    </C.Wrapper>
  );
};

export default AddComment;
