import React from 'react'
import * as C from './CommentsElements'
import user from '../../assets/user-images/image-anne.jpg'


const Comments = () => {
    return (
        <C.Wrapper>
            <C.Title>4 Comments</C.Title>
            <C.DirectComments>
                <C.Avatar src={user}/>
                <C.CommentWrapper>
                    <C.ReplyWrapper>
                        <C.Name>
                            Elijah Moss<br/>
                            <C.Id>
                                @hexagon.bestagon
                            </C.Id>
                        </C.Name>
                        <C.Reply data-text="Reply" />
                    </C.ReplyWrapper>
                    <C.CommentText>
                        Also, please allow styles to be applied based on system preferences. 
                        I would love to be able to browse Frontend Mentor in the evening after my device’s 
                        dark mode turns on without the bright background it currently has.
                    </C.CommentText>
                </C.CommentWrapper>
            </C.DirectComments>
        </C.Wrapper>
    )
}

export default Comments
