import styled from 'styled-components'
import { SPACE,WIDTH,DEVICE } from '../utilities/constants';


//////////////////////////
//suggestion
//////////////////////////

export const SuggestionContainer = styled.div`
    display:flex;
    padding:${SPACE.container};
    justify-content:center;
    @media ${DEVICE.sm}{
        padding:0;
    }
`
export const SuggestionWrapper = styled.div`
    margin-top:${SPACE.top};
    max-width:${WIDTH.desktop};
    width:100%;
    display:flex;
    justify-content: space-between;
    @media ${DEVICE.md}{
        flex-direction:column;
    }
    @media ${DEVICE.sm}{
        margin:0;
    }
`


//////////////////////////
//detail
//////////////////////////

export const DetailContainer = styled.div`
    display:flex;
    padding:${SPACE.container};
    justify-content:center;
    @media ${DEVICE.sm}{
        padding:0 2.4rem;
    }
`
export const DetailWrapper = styled.div`
    margin-top:${SPACE.top};
    max-width:${WIDTH.feedback};
    width:100%;
    display:flex;
    flex-direction:column;
    @media ${DEVICE.sm}{
        margin-top:${SPACE.topMob};
    }
`
export const DetailNav = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    margin-bottom:2.4rem;
`
export const DetailTopic = styled.div`
    display:block;
    height:fit-content;
`


//////////////////////////
//feedback-new
//////////////////////////

export const FeedbackNewContainer = styled.div`
    display:flex;
    padding:${SPACE.container};
    justify-content:center;
    @media ${DEVICE.sm}{
        padding:0 2.4rem;
    }
`
export const FeedbackNewWrapper = styled.div`
    margin-top:${SPACE.top};
    max-width:${WIDTH.feedback};
    width:100%;
    display:flex;
    flex-direction:column;
    @media ${DEVICE.sm}{
        margin-top:${SPACE.topMob};
    }
`
export const FeedbackNewNav = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    margin-bottom:2.4rem;
`