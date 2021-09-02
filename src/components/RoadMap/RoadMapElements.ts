import styled from "styled-components";
import { COLORS, DEVICE, WIDTH } from "../../utilities/constants";

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
  @media ${DEVICE} {
    border-radius: 0;
    padding: 2.4rem;
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
