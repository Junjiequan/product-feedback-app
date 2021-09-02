import {
  FeedbackEditContainer,
  FeedbackEditWrapper,
  FeedbackEditNav,
} from "./pagesElements";
import GoBack from "../components/GoBack";
import EditFeedback from "../components/EditFeedback";

const FeedbackEdit = () => {
  return (
    <FeedbackEditContainer>
      <FeedbackEditWrapper>
        <FeedbackEditNav>
          <GoBack isWhite={false} />
        </FeedbackEditNav>
        <EditFeedback />
      </FeedbackEditWrapper>
    </FeedbackEditContainer>
  );
};

export default FeedbackEdit;
