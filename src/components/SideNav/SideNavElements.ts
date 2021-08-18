import styled from "styled-components";
import TitleBG from "../../assets/suggestions/desktop/background-header.png";
import { COLORS, DEVICE, FONT, TRANSITION } from "../../utilities/constants";
import { Link as LinkR } from "react-router-dom";

export const Wrapper = styled.section`
  max-width: 25.5rem;
  width: 100%;
  display: flex;
  position: sticky;
  top: 1rem;
  flex-direction: column;
  @media ${DEVICE.md} {
    position: relative;
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${DEVICE.sm} {
    top: 0;
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  min-height: 13.7rem;
  display: flex;
  border-radius: 10px;
  background-image: url(${TitleBG});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  color: ${COLORS.white};
  padding: 0 0 2.4rem 2.4rem;
  @media ${DEVICE.md} {
    max-width: 22.3rem;
  }
  @media ${DEVICE.sm} {
    max-width: 100%;
    border-radius: 0;
    min-height: 0;
    height: 7.2rem;
    align-items: flex-start;
    justify-content: center;
    padding: 0 0 0 2.4rem;
  }
`;
export const H1 = styled.h1``;
export const P = styled.p`
  font-weight: 500;
  opacity: 0.75;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${DEVICE.md} {
    flex-direction: row;
  }
  @media ${DEVICE.sm} {
    display: none;
  }
`;
export const FilterWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  padding: 2.4rem;
  background: ${COLORS.white};
  margin: 2.4rem 0;
  @media ${DEVICE.md} {
    margin: 0 2.4rem;
    max-width: 22.3rem;
  }
`;
export const RoadMap = styled.div`
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.9rem 2.4rem 2.4rem;
  background: ${COLORS.white};
  @media ${DEVICE.md} {
    max-width: 22.3rem;
  }
`;
export const RoadTitleRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.9rem;
`;
export const RoadH2 = styled.h2`
  color: ${COLORS.darkBlue};
`;
export const RoadView = styled(LinkR)`
  text-decoration: underline;
  color: ${COLORS.blue};
  ${FONT.semiBold};
  transition: all ${TRANSITION.ease};
  &:hover {
    opacity: 0.6;
  }
`;
export const RoadListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const RoadList = styled.li`
  ${FONT.regular};
  display: flex;
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }
  color: ${COLORS.darkBlueLight};
  position: relative;
  align-items: center;
  &:before {
    position: relative;
    content: "";
    display: flex;
    margin-right: 2rem;
    background: ${(props) => props.color};
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
  }
  &:after {
    position: absolute;
    content: attr(data-count);
    right: 0;
    display: flex;
    font-weight: 700;
  }
`;
