import * as C from './CommentsElements';
import DirectComment from './DirectComment';
import {DATA2} from '../../data/Data-test';


const Comments = () => {

    return (
        <C.Wrapper>
            <C.Title>4 Comments</C.Title>
            {
                DATA2.map(DirectComment)
            }
        </C.Wrapper>
    )
}

export default Comments
