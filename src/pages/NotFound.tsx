import { Link } from "react-router-dom";
import styled from "styled-components";

const RedirectLink = styled(Link)`
  background: black;
  padding: 1rem;
  color: white;
  margin-top: 4rem;
  position: relative;
  font-weight: bold;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    background: gray;
    transition: all 0.2s ease;
    filter: blur(2px);
  }
  &:hover {
    &:after {
      top: 5px;
      left: 5px;
    }
  }
`;

const Styled = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column" as "column",
  },
  h1: {
    fontSize: "5rem",
    color: "red",
  },
};

const NotFound = () => {
  return (
    <div style={Styled.container}>
      <h1 style={Styled.h1}>404 - PAGE NOT FOUND</h1>
      <RedirectLink to="/">Back to home</RedirectLink>
    </div>
  );
};

export default NotFound;
