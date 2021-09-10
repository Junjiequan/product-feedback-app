import * as S from "./SideNavElements";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowWidth from "../../hooks/useWindowWidth";
import Footer from "../Footer";
import { setFilter } from "../../actions";
import { FilterBtn } from "../../utilities/buttons";
import { RootState, Item } from "../../Types";
import { Twirl as Hamburger } from "hamburger-react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

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
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowWidth();
  const isMobile = windowSize <= 767;
  isOpen ? disableBodyScroll(document) : enableBodyScroll(document);
  const dispatch = useDispatch();
  const categoryFilter = useSelector((state: any) => state.filters);
  const FilterIDs = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const FilterBtns = (item: string, index: number) => {
    return (
      <FilterBtn
        aria-label={item}
        key={index}
        id={item}
        data-focus={item.toLowerCase() === categoryFilter}
        data-text={item}
        onClick={() => dispatch(setFilter(item.toLowerCase()))}
      />
    );
  };
  if (isMobile) {
    return (
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>
            <S.H1>Frontend Mentor</S.H1>
            <S.P>Feedback Board</S.P>
          </S.Title>
          <Hamburger
            size={28}
            toggled={isOpen}
            toggle={() => setIsOpen((prev: any) => !prev)}
            aria-label="open the menu"
            aria-expanded={isOpen}
            aria-controls="menu"
          />
        </S.TitleWrapper>
        <S.MobileMenu data-mobile-nav={isOpen} id="menu">
          <S.Overlay
            data-mobile-nav={isOpen}
            onClick={() => setIsOpen((prev: any) => !prev)}
          />
          <S.MobileWrapper data-mobile-nav={isOpen}>
            <S.FilterWrapper>{FilterIDs.map(FilterBtns)}</S.FilterWrapper>
            <S.RoadMap>
              <S.RoadTitleRow>
                <S.RoadH2>Roadmap</S.RoadH2>
                <S.RoadView
                  to="/roadmap"
                  onClick={() => setIsOpen((prev: any) => !prev)}
                >
                  View
                </S.RoadView>
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
            <Footer />
          </S.MobileWrapper>
        </S.MobileMenu>
      </S.Wrapper>
    );
  }
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>
          <S.H1>Frontend Mentor</S.H1>
          <S.P>Feedback Board</S.P>
        </S.Title>
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
        <Footer />
      </S.Menu>
    </S.Wrapper>
  );
};

export default SideNav;
