import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as F from "./MainElements";
import Empty from "../../assets/suggestions/illustration-empty.svg";
import { FeedBackLink } from "../../utilities/buttons";
import FeedbackItem from "../FeedbackItem";
import { Item, RootState, SetState } from "../../Types";

const Feedback = ({ setCountSuggetions }: SetState) => {
  const categoryFilter = useSelector((state: RootState) => state.filters);
  const sortByFilter = useSelector((state: RootState) => state.sorts);
  const DATA_REDUX_STORE = useSelector((state: RootState) => {
    const ITEMS = state.feedbacks.items;
    if (categoryFilter !== "all") {
      return ITEMS.filter(
        (items: Item) => items.category.toLowerCase() === categoryFilter
      );
    } else return ITEMS;
  });
  useEffect(() => {
    setCountSuggetions(DATA_REDUX_STORE.length);
  }, [DATA_REDUX_STORE.length, setCountSuggetions]);

  const renderSortedFeedbacks = (sort: string) => {
    switch (sort) {
      case "Least Upvotes":
        return DATA_REDUX_STORE.sort((a: Item, b: Item) => a.vote - b.vote).map(
          (item: Item, index: number) => FeedbackItem(item, index, true)
        );
      case "Most Upvotes":
        return DATA_REDUX_STORE.sort((a: Item, b: Item) => b.vote - a.vote).map(
          (item: Item, index: number) => FeedbackItem(item, index, true)
        );
      case "Least Comments":
        return DATA_REDUX_STORE.sort(
          (a: Item, b: Item) => a.comments.length - b.comments.length
        ).map((item: Item, index: number) => FeedbackItem(item, index, true));

      case "Most Comments":
        return DATA_REDUX_STORE.sort(
          (a: Item, b: Item) => b.comments.length - a.comments.length
        ).map((item: Item, index: number) => FeedbackItem(item, index, true));
    }
  };

  const EmptyFeedbacks = () => {
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
          to="/feedback-new"
          aria-label="link to feedback detail page"
        />
      </F.Empty>
    );
  };

  return (
    <F.FeedbackWrapper>
      {DATA_REDUX_STORE.length === 0
        ? EmptyFeedbacks()
        : renderSortedFeedbacks(sortByFilter)}
    </F.FeedbackWrapper>
  );
};

export default Feedback;
