import React from 'react';
import {
    DetailContainer,
    DetailWrapper,
    DetailNav,
    DetailTopic,
} from './pagesElements'
import GoBack from '../components/GoBack'
import { FeedBackBtnBlue } from '../utilities/buttons';
import FeedbackItem from '../components/FeedbackItem';
import Comments from '../components/Comments';
import AddComment from '../components/AddComment';
import DATA from '../data/Data-test'

const FeedbackDetail = () => {
    return (
        <DetailContainer>
            <DetailWrapper>
                <DetailNav>
                    <GoBack />
                    <FeedBackBtnBlue data-text="Edit Feedback" to="/" />
                </DetailNav>
                <DetailTopic>
                {
                    FeedbackItem(DATA[0],0,false)
                }
                </DetailTopic>
                <Comments />
                <AddComment />
            </DetailWrapper>
        </DetailContainer>
    )
}

export default FeedbackDetail
