import Main from "../components/Main";
import SideNav from "../components/SideNav";
import { HomeContainer, HomeWrapper } from "./pagesElements";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <SideNav />
        <Main />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
