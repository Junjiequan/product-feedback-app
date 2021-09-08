import { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import * as R from "./RoadMapElements";
import { useSelector } from "react-redux";
import { RootState, Item } from "../../Types";
import CategoryItem from "./CategoryItem";
import { AnimatePresence } from "framer-motion";

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

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [onMobileData, setOnMobileData] = useState(PlannedFeedbacks);
  const windowSize = useWindowWidth();
  const isMobile = windowSize <= 767;
  const category = [
    { tag: "Planned", desc: "Ideas priortized for research" },
    { tag: "In-Progress", desc: "Currently being developed" },
    { tag: "Live", desc: "Released features" },
  ];
  const handleClick = (index, data) => {
    setCategoryIndex(index);
    setOnMobileData(data);
  };
  if (isMobile) {
    return (
      <>
        <R.CategoryNavUl>
          <R.CategoryNavLi data-underline={categoryIndex}>
            <R.CategoryNavBtn
              onClick={() => handleClick(0, PlannedFeedbacks)}
              data-btn-opacity={categoryIndex === 0}
            >
              Planned ({PlannedFeedbacks.length})
            </R.CategoryNavBtn>
          </R.CategoryNavLi>
          <R.CategoryNavLi>
            <R.CategoryNavBtn
              onClick={() => handleClick(1, inProgressFeedbacks)}
              data-btn-opacity={categoryIndex === 1}
            >
              In-Progress ({inProgressFeedbacks.length})
            </R.CategoryNavBtn>
          </R.CategoryNavLi>
          <R.CategoryNavLi>
            <R.CategoryNavBtn
              onClick={() => handleClick(2, liveFeedbacks)}
              data-btn-opacity={categoryIndex === 2}
            >
              Live ({liveFeedbacks.length})
            </R.CategoryNavBtn>
          </R.CategoryNavLi>
        </R.CategoryNavUl>
        <R.CategoryContainer>
          <R.CategoryItemWrapper>
            <R.CategoryItemTitle>
              <R.CategoryItemTitleH2>
                {category[categoryIndex].tag} ({onMobileData.length})
              </R.CategoryItemTitleH2>
              <R.CategoryItemTitleDesc>
                {category[categoryIndex].desc}
              </R.CategoryItemTitleDesc>
            </R.CategoryItemTitle>
            <AnimatePresence exitBeforeEnter>
              <R.CategoryItemUl>
                {onMobileData.map((props, index) => (
                  <CategoryItem {...props} key={index} />
                ))}
              </R.CategoryItemUl>
            </AnimatePresence>
          </R.CategoryItemWrapper>
        </R.CategoryContainer>
      </>
    );
  }
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
