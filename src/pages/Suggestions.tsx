import React from 'react';
import Main from '../components/Main'
import SideNav from '../components/SideNav';
import styled from 'styled-components';
import { SPACE,WIDTH } from '../utilities/constants';

const Container = styled.div`
    display:flex;
    padding:${SPACE.container};
    justify-content:center;

`
const Wrapper = styled.div`
    margin-top:${SPACE.top};
    max-width:${WIDTH.desktop};
    width:100%;
    display:flex;
    justify-content: space-between;
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
