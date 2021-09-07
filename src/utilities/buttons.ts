import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { COLORS, FONT, TRANSITION, DEVICE } from "./constants";

export const FilterBtn = styled.button`
  border-radius: 10px;
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
  background: ${(props: any) =>
    props["data-focus"] ? `${COLORS.blue}` : `${COLORS.grayDark}`};
  color: ${(props: any) =>
    props["data-focus"] ? `${COLORS.white}` : `${COLORS.blue}`};
  &:hover {
    background: ${(props: any) =>
      props["data-focus"] ? `${COLORS.blueMid}` : `${COLORS.blueHoverLight}`};
  }
  &:before {
    content: attr(data-text);
  }
`;
export const FeedBackLink = styled(LinkR)`
  background: ${COLORS.purple};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 700;
  padding: 1.05rem 2.5rem;
  transition: box-shadow ${TRANSITION.ease};
  &:before {
    opacity: 0.9;
    content: attr(data-text);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: inset 0 0 0 100px hsla(0, 0%, 100%, 0.2);
  }
  &:active {
    transform: translateY(2px);
  }
  @media ${DEVICE.sm} {
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding: 1.05rem 1.6rem;
  }
`;
export const FeedBackLinkBlue = styled(LinkR)`
  background: ${COLORS.blue};
  color: ${COLORS.white};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 700;
  padding: 1.05rem 2.5rem;
  transition: box-shadow ${TRANSITION.ease};
  &:before {
    opacity: 0.9;
    content: attr(data-text);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: inset 0 0 0 100px hsla(0, 0%, 100%, 0.2);
  }
  &:active {
    transform: translateY(2px);
  }
  @media ${DEVICE.sm} {
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding: 1.05rem 1.6rem;
  }
`;
export const FeedBackBtnPurple = styled.button`
  background: ${COLORS.purple};
  color: ${COLORS.white};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 4.4rem;
  width: fit-content;
  padding: 0 2.4rem;
  font-size: 1.4rem;
  position: relative;
  white-space: nowrap;
  font-weight: 700;
  transition: box-shadow ${TRANSITION.ease};
  &:before {
    opacity: 0.9;
    content: attr(data-text);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: inset 0 0 0 100px hsla(0, 0%, 100%, 0.2);
  }
  &:active {
    transform: translateY(2px);
  }
  @media ${DEVICE.sm} {
    width: 100%;
    justify-content: center;
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding: 1.05rem 1.6rem;
    margin: 0.6rem 0;
  }
`;
export const FeedBackBtnRed = styled.button`
  background: ${COLORS.red};
  color: ${COLORS.white};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 4.4rem;
  width: fit-content;
  padding: 0 2.4rem;
  font-size: 1.4rem;
  position: absolute;
  left: 0;
  white-space: nowrap;
  font-weight: 700;
  transition: box-shadow ${TRANSITION.ease};
  &:before {
    opacity: 0.9;
    content: attr(data-text);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: inset 0 0 0 100px hsla(0, 0%, 100%, 0.2);
  }
  &:active {
    transform: translateY(2px);
  }
  @media ${DEVICE.sm} {
    position: relative;
    width: 100%;
    justify-content: center;
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding: 1.05rem 1.6rem;
    margin: 0.6rem 0;
  }
`;
export const FeedBackLinkDarkBlue = styled(LinkR)`
  background: ${COLORS.darkBlueDark};
  color: ${COLORS.white};
  border-radius: 10px;
  cursor: pointer;
  height: 4.4rem;
  display: flex;
  align-items: center;
  margin-right: ${(props: any) => (props["data-space-right"] ? "1.6rem" : "")};
  width: fit-content;
  padding: 0 2.4rem;
  font-size: 1.4rem;
  position: relative;
  white-space: nowrap;
  font-weight: 700;
  transition: box-shadow ${TRANSITION.ease};
  &:before {
    opacity: 0.9;
    content: attr(data-text);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: inset 0 0 0 100px hsla(0, 0%, 100%, 0.2);
  }
  &:active {
    transform: translateY(2px);
  }
  @media ${DEVICE.sm} {
    width: 100%;
    justify-content: center;
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding: 1.05rem 1.6rem;
    margin: 0.6rem 0;
  }
`;
