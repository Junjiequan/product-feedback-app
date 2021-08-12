import {
    DetailContainer,
    DetailWrapper,
    DetailNav,
    DetailTopic,
} from './pagesElements'
import GoBack from '../components/GoBack'
import { FeedBackLinkBlue } from '../utilities/buttons';
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
                    <FeedBackLinkBlue data-text="Edit Feedback" to="/" aria-label="link to edit feedback page"/>
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
