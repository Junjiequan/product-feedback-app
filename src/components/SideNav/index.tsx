import React from "react";
import * as S from "./SideNavElements";
import { FilterBtn } from "../../utilities/buttons";

const SideNav = () => {
  const FilterIDs = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const FilterBtns = (item: string, index: number) => {
    return <FilterBtn key={index} id={item} data-text={item} />;
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
            <S.RoadView to="/">View</S.RoadView>
          </S.RoadTitleRow>
          <S.RoadListWrapper>
            <S.RoadList color="Orange" data-count="2">
              Planned
            </S.RoadList>
            <S.RoadList color="DarkViolet" data-count="3">
              In-Progress
            </S.RoadList>
            <S.RoadList color="LightSkyBlue" data-count="1">
              Live
            </S.RoadList>
          </S.RoadListWrapper>
        </S.RoadMap>
      </S.Menu>
    </S.Wrapper>
  );
};

export default SideNav;
