import * as R from "./RoadMapElements";
import GoBack from "../GoBack";
import { FeedBackLink } from "../../utilities/buttons";

const TitileBar = () => {
  return (
    <R.TitleBarWrapper>
      <R.LeftBlock>
        <GoBack isWhite={true} />
        <R.H1>Roadmap</R.H1>
      </R.LeftBlock>
      <FeedBackLink data-text="+ Add Feedback" to="/feedback-new" />
    </R.TitleBarWrapper>
  );
};

export default TitileBar;
