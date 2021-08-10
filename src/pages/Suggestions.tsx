import React from 'react';
import Main from '../components/Main'
import SideNav from '../components/SideNav';
import {
    SuggestionContainer,
    SuggestionWrapper
} from './pagesElements';


const Suggestions = () => {
    return (
        <SuggestionContainer>
            <SuggestionWrapper>
                <SideNav />
                <Main />
            </SuggestionWrapper>
        </SuggestionContainer> 
    )
}

export default Suggestions
