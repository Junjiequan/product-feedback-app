import { useState } from "react";
import * as I from "./CommentsElements";
import * as R from "./CommentsElements";
import { useDispatch } from "react-redux";
import { addInnerReply } from "../../actions";
import { FeedBackBtnPurple } from "../../utilities/buttons";
import { nanoid } from "nanoid";
import AnimateHeight from "react-animate-height";
import { empty } from "../../utilities/notifications";

const InnerComment = (item: any, index: number) => {
  const [openReply, setOpenReply] = useState(false);
  const [height, setHeight] = useState<number | string>(0);
  const randomId = nanoid(10);
  const dispatch = useDispatch();
  const [textAreaTxt, setTextAreaTxt] = useState<any>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (textAreaTxt === "") {
      empty();
    } else {
      dispatch(
        addInnerReply(
          {
            id: randomId,
            user_name: "Jay Smith Machine",
            avatar: "image-jay.jpg",
            user_id: "@machine.handsome",
            comment: textAreaTxt,
            replies: [],
          },
          item.id
        )
      );
      setOpenReply(!openReply);
      setHeight(!openReply ? "auto" : 0);
      setTextAreaTxt("");
    }
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    setOpenReply(!openReply);
    setHeight(height === 0 ? "auto" : 0);
  };
  return (
    <I.InnerComments key={index}>
      <I.Avatar
        src={require(`../../assets/user-images/${item.avatar}`).default}
      />
      <I.CommentWrapper>
        <I.ReplyWrapper>
          <I.Name>
            {item.user_name}
            <br />
            <I.Id>{item.user_id}</I.Id>
          </I.Name>
          <I.Reply
            data-text={openReply ? "Cancel" : "Reply"}
            onClick={handleClick}
          />
        </I.ReplyWrapper>
        <I.CommentTextWrapper>
          <I.CommentText>{item.comment}</I.CommentText>
          {/* REPLY TO CURRENT COMMENT */}
          {/* <ReplyComment open={openReply} height={height} itemId={item.id} /> */}
          <AnimateHeight duration={300} height={height}>
            <R.ReplyCommentWrapper data-reply-open={openReply} id="reply-txt">
              <R.TextArea
                rows={3}
                maxLength={170}
                name="reply"
                value={textAreaTxt}
                onChange={(e) => setTextAreaTxt(e.target.value)}
              />
              <FeedBackBtnPurple
                data-text="Post Reply"
                form="reply-txt"
                onClick={handleSubmit}
              />
            </R.ReplyCommentWrapper>
          </AnimateHeight>
        </I.CommentTextWrapper>
      </I.CommentWrapper>
    </I.InnerComments>
  );
};

export default InnerComment;
