import styled from "styled-components";
import { motion } from "framer-motion";
import { SPACE, WIDTH, DEVICE } from "../utilities/constants";

//////////////////////////
//Home
//////////////////////////

export const HomeContainer = styled(motion.div)`
  display: flex;
  padding: ${SPACE.container};
  justify-content: center;
  @media ${DEVICE.sm} {
    padding: 0;
  }
`;
export const HomeWrapper = styled.div`
  margin-top: ${SPACE.top};
  max-width: ${WIDTH.desktop};
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;

  @media ${DEVICE.md} {
    flex-direction: column;
  }
  @media ${DEVICE.sm} {
    margin: 0;
  }
`;

//////////////////////////
//Home
//////////////////////////

export const RoadmapContainer = styled(motion.div)`
  display: flex;
  padding: ${SPACE.container};
  justify-content: center;
  @media ${DEVICE.sm} {
    padding: 0;
  }
`;
export const RoadmapWrapper = styled.div`
  margin-top: ${SPACE.topRoadMap};
  max-width: ${WIDTH.desktop};
  width: 100%;
  display: block;
  height: fit-content;
  @media ${DEVICE.sm} {
    margin: 0;
  }
`;

//////////////////////////
//feedback-Detail
//////////////////////////

export const DetailContainer = styled(motion.div)`
  display: flex;
  padding: ${SPACE.container};
  justify-content: center;

  @media ${DEVICE.sm} {
    padding: 0 2.4rem;
  }
`;
export const DetailWrapper = styled.div`
  margin-top: ${SPACE.top};
  max-width: ${WIDTH.feedback};
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${DEVICE.sm} {
    margin-top: ${SPACE.topMob};
  }
`;
export const DetailNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;
export const DetailTopic = styled.div`
  display: block;
  height: auto;
`;

//////////////////////////
//feedback-new
//////////////////////////

export const FeedbackNewContainer = styled(motion.div)`
  display: flex;
  padding: ${SPACE.container};
  justify-content: center;
  @media ${DEVICE.sm} {
    padding: 0 2.4rem;
  }
`;
export const FeedbackNewWrapper = styled.div`
  margin-top: ${SPACE.top};
  max-width: ${WIDTH.newFeedback};
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${DEVICE.sm} {
    margin-top: ${SPACE.topMob};
  }
`;
export const FeedbackNewNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

//////////////////////////
//feedback-Edit
//////////////////////////

export const FeedbackEditContainer = styled(motion.div)`
  display: flex;
  padding: ${SPACE.container};
  justify-content: center;
  @media ${DEVICE.sm} {
    padding: 0 2.4rem;
  }
`;
export const FeedbackEditWrapper = styled.div`
  margin-top: ${SPACE.top};
  max-width: ${WIDTH.newFeedback};
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${DEVICE.sm} {
    margin-top: ${SPACE.topMob};
  }
`;
export const FeedbackEditNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;
