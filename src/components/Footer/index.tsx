import * as F from "./FooterElements";

const Footer = () => {
  return (
    <F.FooterContainer>
      <div>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/solutions"
          style={F.InlineStyle.challenge}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          Frontend mentor
        </a>{" "}
        Coded By{" "}
        <a
          href="https://www.frontendmentor.io/profile/a331998513"
          style={F.InlineStyle.codedBy}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          Jay
        </a>
      </div>
    </F.FooterContainer>
  );
};

export default Footer;
