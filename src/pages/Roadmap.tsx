import { RoadmapContainer, RoadmapWrapper } from "./pagesElements";
import TitileBar from "../components/RoadMap/TitleBar";
import RoadCategories from "../components/RoadMap/RoadCategories";

const Roadmap = () => {
  return (
    <RoadmapContainer>
      <RoadmapWrapper>
        <TitileBar />
        <RoadCategories />
      </RoadmapWrapper>
    </RoadmapContainer>
  );
};

export default Roadmap;
