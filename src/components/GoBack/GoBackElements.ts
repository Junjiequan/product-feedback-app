import styled from "styled-components";
import { COLORS, TRANSITION } from "../../utilities/constants";

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: ${(props: any) =>
    props["data-white"] ? `${COLORS.white}` : `${COLORS.darkBlueLight}`};
  cursor: pointer;
`;
export const Txt = styled.span`
  position: relative;
  pointer-events: none;
  &:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${(props: any) =>
      props["data-white"] ? `${COLORS.white}` : `${COLORS.darkBlueLight}`};
    transition: width ${TRANSITION.ease};
  }
  ${Button}:hover &:after {
    width: 100%;
  }
`;
export const LeftIcon = styled.img`
  width: 0.7rem;
  height: 1rem;
  margin-right: 1.5rem;
  pointer-events: none;
  filter: ${(props: any) => (props["data-white"] ? `brightness(4)` : ` `)};
`;
