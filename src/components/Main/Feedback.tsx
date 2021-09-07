import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as F from "./MainElements";
import Empty from "../../assets/suggestions/illustration-empty.svg";
import { FeedBackLink } from "../../utilities/buttons";
import FeedbackItem from "../FeedbackItem";
import { Item, RootState, SetState } from "../../Types";
import { AnimatePresence } from "framer-motion";
import { Transition } from "framer-motion";

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
        return FilteredData.sort(
          (a, b) => a.comments.length - b.comments.length
        ).map((props) => <FeedbackItem {...props} key={props.id} />);

      case "Most Comments":
        return FilteredData.sort(
          (a, b) => b.comments.length - a.comments.length
        ).map((props) => <FeedbackItem {...props} key={props.id} />);
    }
  };

  const EmptyFeedbacks = () => {
    return (
      <F.Empty>
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
    <F.FeedbackWrapper transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}>
      <AnimatePresence>
        {DATA_REDUX_STORE.length === 0
          ? EmptyFeedbacks()
          : renderSortedFeedbacks(sortByFilter)}
      </AnimatePresence>
    </F.FeedbackWrapper>
  );
};

export default Feedback;
