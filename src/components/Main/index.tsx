import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../actions";
import * as M from "./MainElements";
import { FeedBackLink } from "../../utilities/buttons";
import ICON from "../../assets/shared/icon-bulb.svg";
import Feedback from "./Feedback";
import { RootState } from "../../Types";

const Main = () => {
  const SORT_REDUX = useSelector((state: RootState) => state.sorts);
  const [modal, setModal] = useState(false);
  const [countSuggestions, setCountSuggetions] = useState<number>(0);
  const [sorted, setSorted] = useState(SORT_REDUX);
  const dispatch = useDispatch();
  const ModalOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const handleSortBy = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.currentTarget as HTMLInputElement;
    const value = event.value;
    dispatch(setSort(value));
    setSorted(value);
    setModal(!modal);
  };
  const handleSortClick = () => {
    setModal(false);
  };
  useEffect(() => {
    document.addEventListener("mouseup", handleSortClick);
    return () => document.removeEventListener("mouseup", handleSortClick);
  }, [modal]);
  const RadioBox = (value: string, index: number) => {
    return (
      <M.OptionLabel key={index}>
        <M.Option
          type="radio"
          name="sort"
          defaultChecked={value === "Most Upvotes"}
          id={value}
          value={value}
          onClick={handleSortBy}
        />
      </M.OptionLabel>
    );
  };

  return (
    <M.Wrapper>
      <M.TitleBar>
        <M.Title>
          <M.TitleIcon src={ICON} alt="" />
          <M.H2>
            <M.SuggetionCount>{countSuggestions}</M.SuggetionCount> Suggetions
          </M.H2>
        </M.Title>
        <M.FilterWrapper>
          <M.Filter
            onClick={() => setModal(!modal)}
            aria-controls="filter-options"
          >
            Sort by&nbsp;:&nbsp;
            <M.Select>
              {sorted}
              <M.SelectIcon data-icon-rotate={modal}>
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 6l4-4 4 4"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </M.SelectIcon>
            </M.Select>
          </M.Filter>
          <M.OptionModal
            aria-hidden={!modal}
            id="filter-options"
            onClick={handleSortClick}
          >
            {ModalOptions.map(RadioBox)}
          </M.OptionModal>
        </M.FilterWrapper>
        <FeedBackLink
          data-text="+ Add Feedback"
          to="/feedback-new"
          aria-label="link to create feedback page"
        />
      </M.TitleBar>

      <Feedback setCountSuggetions={setCountSuggetions} />
    </M.Wrapper>
  );
};

export default Main;
