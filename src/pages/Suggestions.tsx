import React from 'react';
import Main from '../components/Main'
import SideNav from '../components/SideNav';
import styled from 'styled-components';
import { SPACE,WIDTH,DEVICE } from '../utilities/constants';

const Container = styled.div`
    display:flex;
    padding:${SPACE.container};
    justify-content:center;
    @media ${DEVICE.sm}{
        padding:0;
    }
`
const Wrapper = styled.div`
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

const Suggestions = () => {
    return (
        <Container>
            <Wrapper>
                <SideNav />
                <Main />
            </Wrapper>
        </Container> 
    )
}

export default Suggestions
