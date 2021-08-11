import {useState} from 'react'
import * as C from './CommentsElements';
import ReplyComment from './ReplyComment'


const DirectComment = (item:any,index:number) => {
    const [openReply, setOpenReply] = useState(false);
    const [height, setHeight ] = useState<number|string>(0);
    const handleClick = ()=>{
        setOpenReply(!openReply);
        setHeight(height === 0 ? 'auto': 0);
    }

    return (
        <C.DirectComments key={index} >
            <C.Avatar src={require(`../../assets/user-images/${item.avatar}`).default}/>
            <C.CommentWrapper>
                <C.ReplyWrapper>
                    <C.Name>
                        {item.user_name}<br/>
                        <C.Id>
                            {item.user_id}
                        </C.Id>
                    </C.Name>
                    <C.Reply data-text={openReply?'Cancel':'Reply'} onClick={handleClick}/>
                </C.ReplyWrapper>
                <C.CommentTextWrapper>
                    <C.CommentText>
                        {item.comment}
                    </C.CommentText>
                    
                    {/* REPLY TO CURRENT COMMENT */}
                    <ReplyComment open={openReply} height={height} />

                </C.CommentTextWrapper>
            </C.CommentWrapper>
        </C.DirectComments>
    )
}

export default DirectComment
