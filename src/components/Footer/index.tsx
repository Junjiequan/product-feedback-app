import React from "react";
import * as F from "./FooterElements";

const Footer = () => {
  return (
    <F.Container>
      <div>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/solutions"
          style={F.inlineStyle.challenge}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          Frontend mentor
        </a>{" "}
        Coded By{" "}
        <a
          href="https://www.frontendmentor.io/profile/a331998513"
          style={F.inlineStyle.codedBy}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          Jay
        </a>
      </div>
    </F.Container>
  );
};

export default Footer;
