import {useState} from 'react'
import * as C from './AddCommentElements'
import { FeedBackBtnPurple } from '../../utilities/buttons'

const AddComment = () => {
    const [textCount, setTextCount] = useState<number>(0)
    const CharacterRemain = 225 - textCount
    const HandleTextCount = (e:any) => setTextCount(e.target.value.length)
    return (
        <C.Wrapper>
            <C.Title>Add Comment</C.Title>
            <C.AddCommentWrapper data-text={CharacterRemain + ' characters left'}>
                <C.TextArea rows={3} maxLength={225} onChange={(e)=>HandleTextCount(e)} />
                <FeedBackBtnPurple data-text="Post Comment"/>
            </C.AddCommentWrapper>
        </C.Wrapper>
    )
}

export default AddComment
