import * as S from "./SideNavElements";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../actions";
import { FilterBtn } from "../../utilities/buttons";
import { RootState, Item } from "../../Types";

const SideNav = () => {
  const DATA_REDUX_STORE = useSelector(
    (state: RootState) => state.feedbacks.items
  );
  const PlannedCount = DATA_REDUX_STORE.filter(
    (item: Item) => item.status === "planned"
  ).length;
  const inProgressCount = DATA_REDUX_STORE.filter(
    (item: Item) => item.status === "in-progress"
  ).length;
  const liveCount = DATA_REDUX_STORE.filter(
    (item: Item) => item.status === "live"
  ).length;
  const dispatch = useDispatch();
  const categoryFilter = useSelector((state: any) => state.filters);
  const FilterIDs = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const FilterBtns = (item: string, index: number) => {
    return (
      <FilterBtn
        key={index}
        id={item}
        data-focus={item.toLowerCase() === categoryFilter}
        data-text={item}
        onClick={() => dispatch(setFilter(item.toLowerCase()))}
      />
    );
  };
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.H1>Frontend Mentor</S.H1>
        <S.P>Feedback Board</S.P>
      </S.TitleWrapper>
      <S.Menu>
        <S.FilterWrapper>{FilterIDs.map(FilterBtns)}</S.FilterWrapper>
        <S.RoadMap>
          <S.RoadTitleRow>
            <S.RoadH2>Roadmap</S.RoadH2>
            <S.RoadView to="/roadmap">View</S.RoadView>
          </S.RoadTitleRow>
          <S.RoadListWrapper>
            <S.RoadList color="Orange" data-count={PlannedCount}>
              Planned
            </S.RoadList>
            <S.RoadList color="DarkViolet" data-count={inProgressCount}>
              In-Progress
            </S.RoadList>
            <S.RoadList color="LightSkyBlue" data-count={liveCount}>
              Live
            </S.RoadList>
          </S.RoadListWrapper>
        </S.RoadMap>
      </S.Menu>
    </S.Wrapper>
  );
};

export default SideNav;
