import React from 'react'
import * as S from './SideNavElements'
import * as GLOBAL from '../../utilities/buttons';


const SideNav = () => {
    const FilterIDs = ['All','UI','UX','Enhancement','Bug','Feature'];
    const FilterBtn = (item:any,index:any)=>{
        return (<GLOBAL.FilterBtn key={index} id={item}>{item}</GLOBAL.FilterBtn>)
    }
    return (
        <S.Wrapper>
            <S.TitleWrapper>
                <S.H1>Frontend Mentor</S.H1>
                <S.P>Feedback Board</S.P>
            </S.TitleWrapper>
            <S.FilterWrapper>
                { FilterIDs.map(FilterBtn) }
            </S.FilterWrapper>
            <S.RoadMap>
                <S.RoadTitleRow>
                    <S.RoadH2>Roadmap</S.RoadH2>
                    <S.RoadView to="/">View</S.RoadView>
                </S.RoadTitleRow>
                <S.RoadListWrapper>
                    <S.RoadList color="Orange" data-count="2">Planned</S.RoadList>
                    <S.RoadList color="DarkViolet" data-count="3">In-Progress</S.RoadList>
                    <S.RoadList color="LightSkyBlue" data-count="1">Live</S.RoadList>
                </S.RoadListWrapper>
            </S.RoadMap>
        </S.Wrapper>
    )
}

export default SideNav
