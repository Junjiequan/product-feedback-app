import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailWrapper,
  DetailNav,
  DetailTopic,
} from "./pagesElements";
import GoBack from "../components/GoBack";
import { FeedBackLinkBlue } from "../utilities/buttons";
import FeedbackItem from "../components/FeedbackItem";
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";

const FeedbackDetail = () => {
  const DATA_REDUX = useSelector((state: any) => state.feedbacks.items);
  const location = useLocation();
  const path = location.pathname.replace("/feedback-detail/", "");
  const CURRENT_PAGE = DATA_REDUX.find((item: any) => item.link === path);

  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailNav>
          <GoBack />
          <FeedBackLinkBlue
            data-text="Edit Feedback"
            to="/"
            aria-label="link to edit feedback page"
          />
        </DetailNav>
        <DetailTopic>
          <FeedbackItem
            {...CURRENT_PAGE}
            key={CURRENT_PAGE.id}
            clickable={false}
          />
        </DetailTopic>
        <Comments />
        <AddComment />
      </DetailWrapper>
    </DetailContainer>
  );
};

export default FeedbackDetail;
