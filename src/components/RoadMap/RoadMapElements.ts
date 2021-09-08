import styled from "styled-components";
import { COLORS, DEVICE, FONT, TRANSITION } from "../../utilities/constants";
import { Link as LinkR } from "react-router-dom";
import { motion } from "framer-motion";

/////////////////////////
//TitleBar
/////////////////////////

export const TitleBarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${COLORS.darkBlueDark};
  height: 11.3rem;
  border-radius: 10px;
  justify-content: space-between;
  padding: 0 3.2rem;
  color: ${COLORS.white};
  margin-bottom: 4.8rem;
  @media ${DEVICE.sm} {
    border-radius: 0;
    padding: 2.4rem;
    margin-bottom: 0;
  }
`;
export const LeftBlock = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
`;
export const H1 = styled.h1`
  color: ${COLORS.white};
  font-size: 2.4rem;
`;

/////////////////////////
//RoadCategories
/////////////////////////

export const CategoryContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media ${DEVICE.sm} {
    padding: 0 2rem;
  }
`;
export const CategoryItemWrapper = styled.div`
  display: flex;
  flex: 0 1 36rem;
  flex-direction: column;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
  @media ${DEVICE.sm} {
    flex: 0 1 100%;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;
export const CategoryItemTitle = styled.div`
  display: block;
  margin-bottom: 3.2rem;
`;
export const CategoryItemTitleH2 = styled.h2`
  color: ${COLORS.darkBlue};
`;
export const CategoryItemTitleDesc = styled.p`
  color: ${COLORS.darkBlueLight};
  font-size: 1.6rem;
`;
export const CategoryItemUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const CategoryNavUl = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
  font-weight: bold;
  font-size: 1.3rem;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${COLORS.graySuperLight};
    opacity: 0.2;
  }
`;
export const CategoryNavLi = styled.li`
  padding: 2rem 1.8rem;
  flex: 33%;
  position: relative;
  &:first-of-type :after {
    content: "";
    position: absolute;
    display: flex;
    width: 100%;
    left: ${(props: any) => 100 * props["data-underline"] + `%`};
    bottom: 0;
    height: 5px;
    background: ${(props: any) => {
      if (props["data-underline"] === 0) return "Orange";
      else if (props["data-underline"] === 1) return "DarkViolet";
      else return "LightSkyBlue";
    }};
    transition: all ${TRANSITION.ease};
  }
`;
export const CategoryNavBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: all ${TRANSITION.ease};
  color: ${(props: any) =>
    props["data-btn-opacity"]
      ? `${COLORS.darkBlue};`
      : `${COLORS.darkBlueOpacity}`};
`;

/////////////////////////
//RoadCategory -- Item
/////////////////////////

export const CategoryItem = styled(motion.li)`
  display: flex;
  min-height: 27.2rem;
  max-height: fit-content;
  margin-bottom: 2rem;
  background: ${COLORS.white};
  padding: 3.2rem;
  border-radius: 10px;
  overflow: hidden;
  flex-direction: column;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 0.6rem;
    background: red;
    background: ${(props: any) => props["data-border-color"]};
  }
`;

export const CategoryItemSpan = styled.span`
  position: relative;
  padding-left: 2.4rem;
  text-transform: capitalize;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    margin: auto;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background: ${(props: any) => props["data-border-color"]};
  }
`;

export const CategoryItemLink = styled(LinkR)`
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 700;
  color: ${COLORS.darkBlue};
  margin: 0.8rem 0 0.6rem;
  transition: color ${TRANSITION.ease};
  &:hover {
    color: ${COLORS.blue};
  }
`;

export const CategoryItemDesc = styled.p`
  font-size: 1.6rem;
  min-height: 4.6rem;
  color: ${COLORS.darkBlueLight};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Feature = styled.span`
  background: ${COLORS.grayDark};
  border-radius: 10px;
  color: ${COLORS.blue};
  padding: 0.5rem 1.6rem;
  margin: 1.6rem 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  ${FONT.semiBold};
  transition: all ${TRANSITION.ease};

  &:before {
    content: attr(data-text);
  }
`;
export const VoteAndCommentedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Vote = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  width: 6.9rem;
  height: 4rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: -0.02rem;
  cursor: pointer;
  transition: all ${TRANSITION.ease};
  background: ${(props: any) =>
    props["data-voted"] ? `${COLORS.blue}` : `${COLORS.grayMid}`};
  color: ${(props: any) =>
    props["data-voted"] ? `${COLORS.white}` : `${COLORS.darkBlueDark}`};
  &:hover {
    background: ${(props: any) =>
      props["data-voted"] ? `${COLORS.blueMid}` : `${COLORS.blueHoverLight}`};
  }
`;
export const VoteIcon = styled.img`
  filter: ${(props: any) => (props["data-voted"] ? "brightness(5)" : "0")};
`;

export const CommentCounter = styled(LinkR)`
  display: flex;
  align-items: center;
  align-self: center;
  font-weight: 700;
  cursor: pointer;
  height: fit-content;
`;
export const CommentIcon = styled.img`
  margin-right: 0.8rem;
  width: 1.8rem;
  height: 1.6rem;
`;
