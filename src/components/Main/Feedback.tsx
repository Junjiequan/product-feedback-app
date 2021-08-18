import { useSelector } from "react-redux";
import * as F from "./MainElements";
import Empty from "../../assets/suggestions/illustration-empty.svg";
import { FeedBackLink } from "../../utilities/buttons";
import FeedbackItem from "../FeedbackItem";

const Feedback = () => {
  const DATA_REDUX = useSelector((state: any) => state.feedbacks.items);
  const EmptyItem = () => {
    return (
      <F.Empty>
        <F.EmptyIcon src={Empty} alt="empty icon" />
        <F.EmptyTitle>There is no feedback yet.</F.EmptyTitle>
        <F.EmptyText>
          Got a suggestion? Found a bug that needs to be squashed?
          <br />
          We love hearing about new ideas to improve our app.
        </F.EmptyText>
        <FeedBackLink
          data-text="+ Add Feedback"
          to="/feedback-detail"
          aria-label="link to feedback detail page"
        />
      </F.Empty>
    );
  };

  return (
    <F.FeedbackWrapper>
      {DATA_REDUX.length === 0
        ? EmptyItem()
        : DATA_REDUX.map((item: any, index: any) =>
            FeedbackItem(item, index, true)
          )}
    </F.FeedbackWrapper>
  );
};

export default Feedback;
