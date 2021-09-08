import styled from "styled-components";
import { COLORS, DEVICE, TRANSITION, FONT } from "../../utilities/constants";
import { ANIM } from "../../utilities/animation";
import CheckMark from "../../assets/shared/icon-check.svg";
import { motion } from "framer-motion";

export const Wrapper = styled.section`
  max-width: 82.5rem;
  width: 100%;
  display: block;
  height: fit-content;
  margin-left: 1rem;
  @media ${DEVICE.md} {
    margin: 4rem 0 0;
  }
  @media ${DEVICE.sm} {
    margin: 0;
  }
`;
export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem 0 2.4rem;
  height: 7.2rem;
  border-radius: 10px;
  background: ${COLORS.darkBlueDark};
  color: ${COLORS.white};
  @media ${DEVICE.sm} {
    position: sticky;
    top: 0;
    z-index: 999;
    height: 5.6rem;
    border-radius: 0;
    padding: 0 2.4rem;
  }
`;
export const Title = styled.div`
  display: flex;
  min-width: 15.6rem;
  margin-right: 2.5rem;
  @media ${DEVICE.spec} {
    display: none;
  }
`;
export const TitleIcon = styled.img`
  width: 2.3rem;
  height: 2.4rem;
`;
export const H2 = styled.h2`
  display: flex;
  margin-left: 1.6rem;
  width: 100%;
`;
export const SuggetionCount = styled.span`
  min-width: 2rem;
`;
export const FilterWrapper = styled.div`
  flex: 1 1 30%;
  margin-right: 1rem;
  display: flex;
  justify-content: flex-start;
  position: relative;
`;
export const Filter = styled.button`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  align-items: center;
  color: ${COLORS.grayDark};
  transition: opacity ${TRANSITION.ease};
  user-select: none;
  &:hover {
    opacity: 0.7;
  }
  @media ${DEVICE.sm} {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;
export const Select = styled.span`
  display: flex;
  font-weight: 700;
  pointer-events: none;
`;
export const SelectIcon = styled.span`
  margin-left: 1rem;
  transition: all ${TRANSITION.ease};
  pointer-events: none;
  transform: ${(props: any) =>
    props["data-icon-rotate"] ? "rotate(180deg)" : ""};
`;
export const OptionModal = styled.div`
  z-index: 9999;
  position: absolute;
  top: 5.8rem;
  display: ${(props) => (props["aria-hidden"] ? "none" : "block")};
  width: 25.5rem;
  height: fit-content;
  background: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 0 10px 40px -7px hsla(0, 0%, 0%, 0.1);
  animation: ${ANIM.fadeIn} 0.2s linear;
`;
export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.7rem;
  font-size: 1.6rem;
  position: relative;
  color: ${COLORS.darkBlueLight};
  transition: color ${TRANSITION.ease};
  &:hover {
    color: ${COLORS.purple};
  }
  &:not(:first-of-type):after {
    content: "";
    position: absolute;
    display: flex;
    top: 0;
    width: 100%;
    height: 1px;
    background: ${COLORS.darkBlueDark};
    opacity: 0.12;
  }
`;
export const Option = styled.input`
  appearance: none;
  cursor: pointer;
  display: flex;
  position: relative;
  width: 100%;
  margin: 0 2.4rem;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  &:before {
    content: attr(value);
  }
  &:after {
    content: "";
    background: url(${CheckMark});
    width: 1.3rem;
    height: 1.1rem;
    opacity: 0;
    transition: opacity ${TRANSITION.easeFast};
  }
  &:checked {
    &:after {
      opacity: 1;
    }
  }
`;

///////////////////////////////////////////
//                 Feedback
///////////////////////////////////////////

export const FeedbackWrapper = styled(motion.ul)`
  display: block;
  height: fit-content;
  margin-top: 2.4rem;
  @media ${DEVICE.sm} {
    margin-top: 3.2rem;
    padding: 0 2.4rem;
  }
`;

export const Empty = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60rem;
  text-align: center;
  color: white;
  background: ${COLORS.white};
  border-radius: 10px;
`;
export const EmptyIcon = styled.img`
  width: 13rem;
  height: 13.6rem;
`;
export const EmptyTitle = styled.p`
  ${FONT.Title};
  color: ${COLORS.darkBlue};
  margin-bottom: 1.6rem;
  margin-top: 5.3rem;
  font-size: clamp(1.8rem, 5vw, 2.4rem);
`;
export const EmptyText = styled.p`
  color: ${COLORS.darkBlueLight};
  margin-bottom: 4.8rem;
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  max-width: 41rem;
  @media ${DEVICE.sm} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
