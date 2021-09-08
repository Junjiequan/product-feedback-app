import { RoadmapContainer, RoadmapWrapper } from "./pagesElements";
import TitileBar from "../components/RoadMap/TitleBar";
import RoadCategories from "../components/RoadMap/RoadCategories";
import { pageVariants, pageTransition } from "../utilities/framerMotion";

const Roadmap = () => {
  return (
    <RoadmapContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <RoadmapWrapper>
        <TitileBar />
        <RoadCategories />
      </RoadmapWrapper>
    </RoadmapContainer>
  );
};

export default Roadmap;
