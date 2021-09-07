import styled from "styled-components";
import { SPACE, COLORS, TRANSITION, DEVICE } from "../../utilities/constants";

export const Wrapper = styled.div`
  display: block;
  margin: 2.4rem 0;
  padding: ${SPACE.comments};
  background: ${COLORS.white};
  border-radius: 10px;
  height: auto;
`;

export const Title = styled.h2`
  color: ${COLORS.darkBlue};
  margin-bottom: 2.8rem;
`;
export const AddCommentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  &:after {
    color: ${COLORS.darkBlueLight};
    position: absolute;
    content: attr(data-text);
    left: 0;
    bottom: 1rem;
  }
  @media ${DEVICE.sm} {
    align-items: flex-start;
    &:after {
      margin-top: 2rem;
      position: relative;
    }
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  margin-bottom: 1.6rem;
  border-radius: 5px;
  padding: 1.6rem 2.4rem;
  border: 0;
  box-shadow: 0 0 0 1px hsla(230, 76%, 19%, 0.1);
  background: ${COLORS.grayLight};
  transition: box-shadow ${TRANSITION.ease};
  color: ${COLORS.darkBlue};
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${COLORS.blue};
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
