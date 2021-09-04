// import useWindowWidth from "../../hooks/useWindowWidth";
import * as R from "./RoadMapElements";
import { useSelector } from "react-redux";
import { RootState, Item } from "../../Types";
import CategoryItem from "./CategoryItem";

const RoadCategories = () => {
  const DATA_REDUX_STORE = useSelector(
    (state: RootState) => state.feedbacks.items
  );
  const PlannedFeedbacks = DATA_REDUX_STORE.filter(
    (item: Item) => item.status === "planned"
  );
  const inProgressFeedbacks = DATA_REDUX_STORE.filter(
    (item: Item) => item.status === "in-progress"
  );
  const liveFeedbacks = DATA_REDUX_STORE.filter(
    (item: Item) => item.status === "live"
  );
  return (
    <R.CategoryContainer>
      <R.CategoryItemWrapper>
        <R.CategoryItemTitle>
          <R.CategoryItemTitleH2>
            Planned ({PlannedFeedbacks.length})
          </R.CategoryItemTitleH2>
          <R.CategoryItemTitleDesc>
            Ideas priortized for research
          </R.CategoryItemTitleDesc>
        </R.CategoryItemTitle>
        <R.CategoryItemUl>
          {PlannedFeedbacks.map((props, index) => (
            <CategoryItem {...props} key={index} />
          ))}
        </R.CategoryItemUl>
      </R.CategoryItemWrapper>
      <R.CategoryItemWrapper>
        <R.CategoryItemTitle>
          <R.CategoryItemTitleH2>
            In-Progress ({inProgressFeedbacks.length})
          </R.CategoryItemTitleH2>
          <R.CategoryItemTitleDesc>
            Currently being developed
          </R.CategoryItemTitleDesc>
        </R.CategoryItemTitle>
        <R.CategoryItemUl>
          {inProgressFeedbacks.map((props, index) => (
            <CategoryItem {...props} key={index} />
          ))}
        </R.CategoryItemUl>
      </R.CategoryItemWrapper>
      <R.CategoryItemWrapper>
        <R.CategoryItemTitle>
          <R.CategoryItemTitleH2>
            Live ({liveFeedbacks.length})
          </R.CategoryItemTitleH2>
          <R.CategoryItemTitleDesc>Released features</R.CategoryItemTitleDesc>
        </R.CategoryItemTitle>
        <R.CategoryItemUl>
          {liveFeedbacks.map((props, index) => (
            <CategoryItem {...props} key={index} />
          ))}
        </R.CategoryItemUl>
      </R.CategoryItemWrapper>
    </R.CategoryContainer>
  );
};

export default RoadCategories;
