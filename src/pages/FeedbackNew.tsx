import {
  FeedbackNewContainer,
  FeedbackNewWrapper,
  FeedbackNewNav,
} from "./pagesElements";
import GoBack from "../components/GoBack";
import AddFeedback from "../components/AddFeedback";
import { pageVariants, pageTransition } from "../utilities/framerMotion";

const FeedbackNew = () => {
  return (
    <FeedbackNewContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
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
