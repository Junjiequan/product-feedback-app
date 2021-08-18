import * as R from "./CommentsElements";
import { FeedBackBtnPurple } from "../../utilities/buttons";
import AnimateHeight from "react-animate-height";

interface Props {
  height: number | string;
  open: boolean;
}
const ReplyComment = (props: Props) => {
  return (
    <AnimateHeight duration={300} height={props.height}>
      <R.ReplyCommentWrapper data-reply-open={props.open}>
        <R.TextArea rows={3} maxLength={170} />
        <FeedBackBtnPurple data-text="Post Reply" />
      </R.ReplyCommentWrapper>
    </AnimateHeight>
  );
};

export default ReplyComment;
