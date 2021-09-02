import {
  FeedbackNewContainer,
  FeedbackNewWrapper,
  FeedbackNewNav,
} from "./pagesElements";
import GoBack from "../components/GoBack";
import AddFeedback from "../components/AddFeedback";

const FeedbackNew = () => {
  return (
    <FeedbackNewContainer>
      <FeedbackNewWrapper>
        <FeedbackNewNav>
          <GoBack isWhite={false} />
        </FeedbackNewNav>
        <AddFeedback />
      </FeedbackNewWrapper>
    </FeedbackNewContainer>
  );
};

export default FeedbackNew;
