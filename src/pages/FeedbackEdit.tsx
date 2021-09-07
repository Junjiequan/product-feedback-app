import {
  FeedbackEditContainer,
  FeedbackEditWrapper,
  FeedbackEditNav,
} from "./pagesElements";
import GoBack from "../components/GoBack";
import EditFeedback from "../components/EditFeedback";
import { pageVariants, pageTransition } from "../utilities/framerMotion";

const FeedbackEdit = () => {
  return (
    <FeedbackEditContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
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
