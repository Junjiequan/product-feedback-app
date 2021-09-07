import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Item, RootState } from "../../Types";
import { addFeedback } from "../../actions";
import { success, fail } from "../../utilities/notifications";
import { nanoid } from "nanoid";
import * as A from "./AddFeedbackElements";
import {
  FeedBackBtnPurple,
  FeedBackLinkDarkBlue,
} from "../../utilities/buttons";

const AddFeedback = () => {
  const randomId = nanoid(10);
  const DATA_REDUX_STORE = useSelector(
    (state: RootState) => state.feedbacks.items
  );

  const [openModal, setOpenModal] = useState(false);
  const [sortBy, setSortBy] = useState("Feature");
  const history = useHistory();
  const dispatch = useDispatch();

  const categoryOptions = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isTitleExisted = !!DATA_REDUX_STORE.find(
      (item: Item) => item.title === e.target.title.value
    );
    if (isTitleExisted) {
      fail();
    } else {
      dispatch(
        addFeedback({
          id: randomId,
          link: e.target.title.value.toLowerCase().replace(/ /g, "_"),
          title: e.target.title.value,
          category: e.target.sort.value,
          detail: e.target.detail.value,
          comments: [],
          vote: 0,
          voted: false,
          status: "suggestion",
        })
      );
      history.push("/");
      success();
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.currentTarget as HTMLInputElement;
    const value = event.value;
    setSortBy(value);
    setOpenModal(!openModal);
  };
  const RadioBox = (value: string, index: number) => {
    return (
      <A.OptionLabel key={index}>
        <A.Option
          type="radio"
          onClick={handleClick}
          defaultChecked={value === "Feature"}
          name="sort"
          id={value}
          value={value}
        />
      </A.OptionLabel>
    );
  };
  return (
    <A.Wrapper>
      <A.Title>Create New Feedback</A.Title>
      <A.Form id="new-feedback" onSubmit={handleSubmit}>
        <A.InputWrapper>
          <A.Label data-title="Feedback Title">
            <br />
            Add a short, descriptive headline
          </A.Label>
          <A.Input
            name="title"
            maxLength={50}
            placeholder="Max 50 characters"
            required
          />
        </A.InputWrapper>
        <A.InputWrapper>
          <A.Label data-title="Category">
            <br />
            Choose a category for your feedback
          </A.Label>
          <A.OptionButton
            type="button"
            onClick={() => setOpenModal(!openModal)}
            aria-expanded={openModal}
            aria-controls="feature-options"
          >
            {sortBy}
            <A.SelectIcon data-icon-rotate={openModal}>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 6l4-4 4 4"
                  stroke="#3442c7"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </A.SelectIcon>
          </A.OptionButton>
          <A.OptionModal aria-hidden={openModal} id="category-options">
            {categoryOptions.map(RadioBox)}
          </A.OptionModal>
        </A.InputWrapper>
        <A.InputWrapper>
          <A.Label data-title="Feedback Detail">
            <br />
            Include any specific comments on what should be improved, added,
            etc.
          </A.Label>
          <A.Textarea
            name="detail"
            maxLength={225}
            rows={3}
            placeholder="Max 225 characters"
            required
          />
        </A.InputWrapper>
        <A.ButtonWrapper>
          <FeedBackLinkDarkBlue
            to="/"
            data-space-right={true}
            data-text="Cancel"
            aria-label="cancel and back to homepage"
          />
          <FeedBackBtnPurple
            data-text="Add Feedback"
            aria-label="create new feedback"
            form="new-feedback"
          />
        </A.ButtonWrapper>
      </A.Form>
    </A.Wrapper>
  );
};

export default AddFeedback;
