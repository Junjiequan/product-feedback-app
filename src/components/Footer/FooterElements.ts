import styled from "styled-components";

export const inlineStyle: any = {
  challenge: {
    fontWeight: "bold",
    color: "blue",
    opacity: "0.6",
  },
  codedBy: {
    fontWeight: "bold",
    color: "red",
    opacity: "0.6",
  },
};

export const Container = styled.div`
  opacity: 0.9;
  font-size: 1.2rem;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 3rem auto;
  justify-content: center;
`;
