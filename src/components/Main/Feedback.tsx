import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as F from "./MainElements";
import Empty from "../../assets/suggestions/illustration-empty.svg";
import { FeedBackLink } from "../../utilities/buttons";
import FeedbackItem from "../FeedbackItem";
import { Item, RootState, SetState } from "../../Types";
import { AnimateSharedLayout } from "framer-motion";
import { emptyVariants } from "../../utilities/framerMotion";

const Feedback = ({ setCountSuggetions }: SetState) => {
  const DATA_REDUX_STORE = useSelector((state: RootState) =>
    state.feedbacks.items.filter((item) => item.status === "suggestion")
  );
  const categoryFilter = useSelector((state: RootState) => state.filters);
  const sortByFilter = useSelector((state: RootState) => state.sorts);
  const FilteredData = DATA_REDUX_STORE.filter((item: Item) =>
    categoryFilter !== "all"
      ? item.category.toLowerCase() === categoryFilter
      : item
  );

  useEffect(() => {
    setCountSuggetions(FilteredData.length);
  }, [FilteredData.length, setCountSuggetions]);

  const renderSortedFeedbacks = (sort: string) => {
    switch (sort) {
      case "Least Upvotes":
        return FilteredData.sort((a, b) => a.vote - b.vote).map((props) => (
          <FeedbackItem {...props} key={props.id} />
        ));
      case "Most Upvotes":
        return FilteredData.sort((a, b) => b.vote - a.vote).map((props) => (
          <FeedbackItem {...props} key={props.id} />
        ));
      case "Least Comments":
        //Comments calculation
        //Number of comments  + number of replies for each comment
        return FilteredData.sort(
          (a, b) =>
            a.comments.length +
            a.comments.reduce((sum, cur) => (sum += cur.replies.length), 0) -
            (b.comments.length +
              b.comments.reduce((sum, cur) => (sum += cur.replies.length), 0))
        ).map((props) => <FeedbackItem {...props} key={props.id} />);

      case "Most Comments":
        return FilteredData.sort(
          (a, b) =>
            b.comments.length +
            b.comments.reduce((sum, cur) => (sum += cur.replies.length), 0) -
            (a.comments.length +
              a.comments.reduce((sum, cur) => (sum += cur.replies.length), 0))
        ).map((props) => <FeedbackItem {...props} key={props.id} />);
    }
  };

  const EmptyFeedbacks = () => {
    return (
      <F.Empty variants={emptyVariants} initial="hidden" animate="visible">
        <F.EmptyIcon src={Empty} alt="empty icon" />
        <F.EmptyTitle>There is no feedback yet.</F.EmptyTitle>
        <F.EmptyText>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </F.EmptyText>
        <FeedBackLink
          data-text="+ Add Feedback"
          to="/feedback-new"
          aria-label="link to feedback detail page"
        />
      </F.Empty>
    );
  };

  return (
    <AnimateSharedLayout>
      <F.FeedbackWrapper layout>
        {FilteredData.length === 0
          ? EmptyFeedbacks()
          : renderSortedFeedbacks(sortByFilter)}
      </F.FeedbackWrapper>
    </AnimateSharedLayout>
  );
};

export default Feedback;
