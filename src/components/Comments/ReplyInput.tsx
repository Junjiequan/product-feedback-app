import React from 'react'
import * as R from './CommentsElements'
import { FeedBackBtnPurple } from '../../utilities/buttons'
import AnimateHeight from 'react-animate-height';

const ReplyInput = (props:any) => {
    return (
        <AnimateHeight duration={300} height={props.height}>
            <R.ReplyInputWrapper data-reply-open={props.open} >
                <R.TextArea rows={3} />
                <FeedBackBtnPurple data-text="Post Reply"/>
            </R.ReplyInputWrapper>
        </AnimateHeight>
    )
}

export default ReplyInput
