import Main from "../components/Main";
import SideNav from "../components/SideNav";
import { HomeContainer, HomeWrapper } from "./pagesElements";
import { pageVariants, pageTransition } from "../utilities/framerMotion";

const Home = () => {
  return (
    <HomeContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HomeWrapper>
        <SideNav />
        <Main />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
