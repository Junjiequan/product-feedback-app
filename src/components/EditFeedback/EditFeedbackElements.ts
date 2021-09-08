import styled from "styled-components";
import {
  SPACE,
  COLORS,
  FONT,
  TRANSITION,
  DEVICE,
} from "../../utilities/constants";
import icon_edit from "../../assets/shared/icon-edit-feedback.svg";
import CheckMark from "../../assets/shared/icon-check.svg";
import { ANIM } from "../../utilities/animation";

export const Wrapper = styled.div`
  display: block;
  padding: ${SPACE.newFeedback};
  background: ${COLORS.white};
  border-radius: 10px;
  height: auto;
  margin: 4.6rem 0;
  position: relative;
  &:before {
    position: absolute;
    content: url(${icon_edit});
    top: -2rem;
    left: 5rem;
    width: 4rem;
    height: 4rem;
    transform: scale(1.4);
  }
  @media ${DEVICE.sm} {
    margin: 3.5rem 0;
    padding: 4.4rem 2.3rem;
    &:before {
      left: 2.3rem;
      transform: none;
    }
  }
`;
export const Title = styled.p`
  color: ${COLORS.darkBlue};
  margin-bottom: 7.5rem;
  ${FONT.Title};
  word-break: break-all;

  font-size: clamp(1.8rem, 4vw, 2.4rem);
  @media ${DEVICE.sm} {
    margin-bottom: 2.4rem;
  }
`;
export const Form = styled.form``;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Label = styled.label`
  font-size: clamp(1.3rem, 2.5vw, 1.4rem);
  color: ${COLORS.darkBlueLight};
  &:before {
    position: relative;
    content: attr(data-title);
    letter-spacing: -0.01rem;
    font-weight: 700;
    color: ${COLORS.darkBlue};
  }
`;
export const Input = styled.input`
  margin: 1.6rem 0 2.4rem;
  padding: 1.6rem 2.4rem;
  border: 0;
  border-radius: 5px;
  background: ${COLORS.grayLight};
  color: ${COLORS.darkBlue};
  transition: all ${TRANSITION.ease};
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${COLORS.blue};
  }
  &::placeholder {
    opacity: 0.5;
  }
`;

export const OptionButton = styled.button`
  background: ${COLORS.grayLight};
  cursor: pointer;
  color: ${COLORS.darkBlue};
  transition: all ${TRANSITION.ease};
  padding: 1.6rem 2.4rem;
  margin: 1.6rem 0 2.4rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${COLORS.blue};
  }
`;
export const SelectIcon = styled.span`
  margin-left: 1rem;
  transition: all ${TRANSITION.ease};
  transform: ${(props: any) =>
    props["data-icon-rotate"] ? "rotate(180deg)" : ""};
`;
export const OptionModal = styled.div`
  z-index: 9999;
  position: absolute;
  top: 14rem;
  display: ${(props) => (props["aria-hidden"] ? "block" : "none")};
  width: 100%;
  height: fit-content;
  background: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 0 10px 40px -7px hsla(0, 0%, 0%, 0.3);
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
export const Textarea = styled.textarea`
  margin: 1.6rem 0 2.4rem;
  padding: 1.6rem 2.4rem;
  border: 0;
  border-radius: 5px;
  background: ${COLORS.grayLight};
  color: ${COLORS.darkBlue};
  transition: all ${TRANSITION.ease};
  resize: none;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${COLORS.blue};
  }
  &::placeholder {
    opacity: 0.5;
  }
  ::-webkit-scrollbar {
    width: 7px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 0%, 0.1);
    border-radius: 5px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: hsla(231, 33%, 34%, 0.5);
    opacity: 0.2;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media ${DEVICE.sm} {
    flex-direction: column;
  }
`;
