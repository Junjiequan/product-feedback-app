import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router";
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
import { pageVariants, pageTransition } from "../utilities/framerMotion";

const FeedbackDetail = () => {
  const DATA_REDUX = useSelector((state: any) => state.feedbacks.items);
  const location = useLocation();
  const path = location.pathname.replace("/feedback-detail/", "");
  const CURRENT_PAGE = DATA_REDUX.find((item: any) => item.link === path);

  if (CURRENT_PAGE === undefined) {
    return <Redirect to="/error" />;
  }
  return (
    <DetailContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <DetailWrapper>
        <DetailNav>
          <GoBack isWhite={false} />
          <FeedBackLinkBlue
            data-text="Edit Feedback"
            to={location.pathname + "/edit"}
            aria-label="link to edit feedback page"
          />
        </DetailNav>
        <DetailTopic>
          <FeedbackItem {...CURRENT_PAGE} key={CURRENT_PAGE.id} />
        </DetailTopic>
        <Comments />
        <AddComment />
      </DetailWrapper>
    </DetailContainer>
  );
};

export default FeedbackDetail;
