import {
  FeedbackEditContainer,
  FeedbackEditWrapper,
  FeedbackEditNav,
} from "./pagesElements";
import GoBack from "../components/GoBack";
import EditFeedback from "../components/EditFeedback";
import { feedbackEditVariants } from "../utilities/framerMotion";

const FeedbackEdit = () => {
  return (
    <FeedbackEditContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={feedbackEditVariants}
    >
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
