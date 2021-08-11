import {useState} from 'react';
import * as I from './CommentsElements';
import ReplyComment from './ReplyComment';


const InnerComment = (item:any,index:number) => {
    const [openReply, setOpenReply] = useState(false);
    const [height, setHeight ] = useState<number|string>(0);
    const handleClick = ()=>{
        setOpenReply(!openReply);
        setHeight(height === 0 ? 'auto': 0);
    }
    return (
        <I.InnerComments key={index}>
            <I.Avatar src={require(`../../assets/user-images/${item.avatar}`).default}/>
            <I.CommentWrapper>
                <I.ReplyWrapper>
                    <I.Name>
                        {item.user_name}<br/>
                        <I.Id>
                            {item.user_id}
                        </I.Id>
                    </I.Name>
                    <I.Reply data-text={openReply?'Cancel':'Reply'} onClick={handleClick}/>
                </I.ReplyWrapper>
                <I.CommentTextWrapper >
                    <I.CommentText>
                        {item.comment}
                    </I.CommentText>
                    {/* REPLY TO CURRENT COMMENT */}
                    <ReplyComment open={openReply} height={height} />

                </I.CommentTextWrapper>
            </I.CommentWrapper>
        </I.InnerComments>
    )
}

export default InnerComment
