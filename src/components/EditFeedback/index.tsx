import React, { useState } from "react";
import { Redirect } from "react-router";
import { useLocation, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { editFeedback, delFeedback } from "../../actions";
import type { RootState, Item } from "../../Types";
import * as E from "./EditFeedbackElements";
import {
  FeedBackBtnPurple,
  FeedBackLinkDarkBlue,
  FeedBackBtnRed,
} from "../../utilities/buttons";
import { removed, edited } from "../../utilities/notifications";

const EditFeedback = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const feedbackParam = location.pathname.trim().split("/")[2];
  const currentItem: Item = useSelector((state: RootState) =>
    state.feedbacks.items.find((item: Item) => item.link === feedbackParam)
  )!;

  const [openCategoModal, setOpenCategoModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState(
    currentItem && currentItem.detail
  );
  const [sortBy, setSortBy] = useState("Feature");
  const [status, setStatus] = useState("Suggestion");
  const categoryOptions = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const statusOptions = ["Suggestion", "Planned", "In-Progress", "Live"];
  const handleCategory = (e: React.MouseEvent<HTMLInputElement>) => {
    const isRadio = e.currentTarget.type === "radio";
    if (isRadio) setSortBy(e.currentTarget.value);
    setOpenCategoModal(!openCategoModal);
    setOpenStatusModal(false);
  };
  const handleStatus = (e: React.MouseEvent<HTMLInputElement>) => {
    const isRadio = e.currentTarget.type === "radio";
    if (isRadio) setStatus(e.currentTarget.value);
    setOpenStatusModal(!openStatusModal);
    setOpenCategoModal(false);
  };
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (currentItem) {
      dispatch(
        editFeedback({
          id: currentItem.id,
          title: currentItem.title,
          vote: currentItem.vote,
          voted: currentItem.voted,
          link: feedbackParam,
          category: sortBy,
          status: status.toLowerCase(),
          detail: feedbackText,
        })
      );
      history.push("/");
      edited();
    }
  };
  const handleDelete = () => {
    dispatch(delFeedback(currentItem.id));
    removed();
  };

  const RadioBox = (value: string, index: number) => {
    const isStatus = statusOptions.includes(value);
    return (
      <E.OptionLabel key={index}>
        <E.Option
          type="radio"
          onClick={isStatus ? handleStatus : handleCategory}
          defaultChecked={index === 0}
          name={isStatus ? "status" : "sort"}
          id={value}
          value={value}
        />
      </E.OptionLabel>
    );
  };
  if (!currentItem) {
    return <Redirect to="/" />;
  }
  return (
    <E.Wrapper>
      <E.Title>Editing ‘{currentItem.title}’</E.Title>
      <E.Form id="edit-feedback" onSubmit={handleSubmit}>
        <E.InputWrapper>
          <E.Label data-title="Feedback Title">
            <br />
            Feedback title cannot be changed.
          </E.Label>
          <E.Input
            name="title"
            maxLength={50}
            placeholder="Max 50 characters"
            disabled
            value={currentItem.title}
          />
        </E.InputWrapper>

        <E.InputWrapper>
          <E.Label data-title="Category">
            <br />
            Choose a category for your feedback
          </E.Label>
          <E.OptionButton
            type="button"
            onClick={(e: any) => handleCategory(e)}
            aria-expanded={openCategoModal}
            aria-controls="category-options"
          >
            {sortBy}
            <E.SelectIcon data-icon-rotate={openCategoModal}>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 6l4-4 4 4"
                  stroke="#3442c7"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </E.SelectIcon>
          </E.OptionButton>
          <E.OptionModal aria-hidden={openCategoModal} id="category-options">
            {categoryOptions.map(RadioBox)}
          </E.OptionModal>
        </E.InputWrapper>

        <E.InputWrapper>
          <E.Label data-title="Status">
            <br />
            Choose a category for your feedback
          </E.Label>
          <E.OptionButton
            type="button"
            onClick={(e: any) => handleStatus(e)}
            aria-expanded={openStatusModal}
            aria-controls="status-options"
          >
            {status}
            <E.SelectIcon data-icon-rotate={openStatusModal}>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 6l4-4 4 4"
                  stroke="#3442c7"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </E.SelectIcon>
          </E.OptionButton>
          <E.OptionModal aria-hidden={openStatusModal} id="status-options">
            {statusOptions.map(RadioBox)}
          </E.OptionModal>
        </E.InputWrapper>
        <E.InputWrapper>
          <E.Label data-title="Feedback Detail">
            <br />
            Include any specific comments on what should be improved, added,
            etc.
          </E.Label>
          <E.Textarea
            name="detail"
            maxLength={225}
            rows={3}
            placeholder="Max 225 characters"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          />
        </E.InputWrapper>
        <E.ButtonWrapper>
          <FeedBackLinkDarkBlue
            to="/"
            data-space-right={true}
            data-text="Cancel"
            aria-label="cancel and back to homepage"
          />
          <FeedBackBtnPurple
            data-text="Save Changes"
            aria-label="Save Changes"
            form="edit-feedback"
          />
          <FeedBackBtnRed
            type="button"
            data-text="Delete"
            aria-label="delete feedback"
            onClick={handleDelete}
          />
        </E.ButtonWrapper>
      </E.Form>
    </E.Wrapper>
  );
};

export default EditFeedback;
