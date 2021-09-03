// import useWindowWidth from "../../hooks/useWindowWidth";
import * as R from "./RoadMapElements";
import CategoryItem from "./CategoryItem";

const RoadCategories = () => {
  // const SIZE = useWindowWidth();
  // const isMobile = SIZE.width! < 380;

  return (
    <R.CategoryContainer>
      <R.CategoryItemWrapper>
        <R.CategoryItemTitle>
          <R.CategoryItemTitleH2>Planned (2)</R.CategoryItemTitleH2>
          <R.CategoryItemTitleDesc>
            Ideas priortized for research
          </R.CategoryItemTitleDesc>
        </R.CategoryItemTitle>
        <R.CategoryItemUl>
          <CategoryItem />
        </R.CategoryItemUl>
      </R.CategoryItemWrapper>
      <R.CategoryItemWrapper>
        <R.CategoryItemTitle>
          <R.CategoryItemTitleH2>In-Progress (3)</R.CategoryItemTitleH2>
          <R.CategoryItemTitleDesc>
            Ideas priortized for research
          </R.CategoryItemTitleDesc>
        </R.CategoryItemTitle>
        <R.CategoryItemUl>
          <CategoryItem />
        </R.CategoryItemUl>
      </R.CategoryItemWrapper>
      <R.CategoryItemWrapper>
        <R.CategoryItemTitle>
          <R.CategoryItemTitleH2>Live (1)</R.CategoryItemTitleH2>
          <R.CategoryItemTitleDesc>
            Ideas priortized for research
          </R.CategoryItemTitleDesc>
        </R.CategoryItemTitle>
        <R.CategoryItemUl>
          <CategoryItem />
        </R.CategoryItemUl>
      </R.CategoryItemWrapper>
    </R.CategoryContainer>
  );
};

export default RoadCategories;
