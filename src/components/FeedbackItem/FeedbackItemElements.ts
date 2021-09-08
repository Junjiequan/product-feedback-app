import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { COLORS, TRANSITION, FONT, DEVICE } from "../../utilities/constants";
import { motion } from "framer-motion";

export const FeedbackDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 3.2rem;
  background: ${COLORS.white};
  margin-bottom: 2rem;
  border-radius: 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 4px;
    height: 100%;
    opacity: 0;
    background: ${COLORS.blue};
    transition: all ${TRANSITION.ease};
  }
  &:hover {
    &::before {
      opacity: ${(props: any) => (props["data-clickable"] ? 1 : 0)};
    }
  }
  @media ${DEVICE.sm} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const Vote = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 0;
  width: 4rem;
  height: 5.3rem;
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
  @media ${DEVICE.sm} {
    flex-direction: row;
    height: fit-content;
    width: 7rem;
    padding: 0.5rem 1.5rem;
  }
`;
export const VoteIcon = styled.img`
  filter: ${(props: any) => (props["data-voted"] ? "brightness(5)" : "0")};
`;
export const SuggestionTitle = styled.p`
  ${FONT.suggestionTitle};
  color: ${COLORS.darkBlue};
  margin-bottom: 0.4rem;
  transition: color ${TRANSITION.ease};
  word-break: break-all;
`;
export const SuggestionWrapper = styled(LinkR)`
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
  margin: 0 4rem;
  max-width: 60rem;
  pointer-events: ${(props: any) => (props["data-clickable"] ? "" : "none")};
  cursor: pointer;

  &:hover ${SuggestionTitle} {
    color: ${COLORS.blue};
  }
  @media ${DEVICE.sm} {
    margin: 0 0 2rem;
    order: -1;
    flex: 1 1 100%;
    max-width: 26.8rem;
  }
`;

export const SuggestionText = styled.p`
  ${FONT.regular};
  color: ${COLORS.darkBlueLight};
  margin-bottom: 1.2rem;
  word-break: break-all;
`;
export const Feature = styled.span`
  background: ${COLORS.grayDark};
  border-radius: 10px;
  color: ${COLORS.blue};
  padding: 0.5rem 1.6rem;
  width: fit-content;
  height: fit-content;
  margin-right: 0.8rem;
  margin-bottom: ${(props: any) => (props["data-no-space"] ? "" : "1.2rem")};
  pointer-events: ${(props: any) =>
    props["data-no-pointer"] ? "none" : "auto"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${FONT.semiBold};
  transition: all ${TRANSITION.ease};
  &:hover {
    background: ${COLORS.blueHoverLight};
  }
  &:focus {
    background: ${COLORS.blue};
    color: ${COLORS.white};
  }
  &:before {
    content: attr(data-text);
  }
`;
export const CommentCounter = styled(LinkR)`
  display: flex;
  align-items: center;
  align-self: center;
  font-weight: 700;
  cursor: pointer;
  height: fit-content;
  pointer-events: ${(props: any) => (props["data-clickable"] ? "" : "none")};
  @media ${DEVICE.sm} {
    order: 1;
  }
`;
export const CommentIcon = styled.img`
  margin-right: 0.8rem;
  width: 1.8rem;
  height: 1.6rem;
`;
