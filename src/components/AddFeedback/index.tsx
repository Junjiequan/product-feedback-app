import {useState} from 'react';
import {useDispatch } from 'react-redux';
import { addFeedback } from '../../actions';
import * as A from './AddFeedbackElements';
import { FeedBackBtnPurple,FeedBackLinkDarkBlue } from '../../utilities/buttons';

const AddFeedback = () => {
    const [openModal,setOpenModal] = useState(false);
    const [sortBy, setSortBy] = useState('Feature');

    const dispatch = useDispatch();

    const CategoryOptions = ['Feature', 'UI', 'UX', 'Enhancement','Bug'];
    const handleSubmit = (e:any)=>{
        e.preventDefault()

        dispatch(addFeedback({
            link:e.target.title.value.replace(/ /g,'_'),
            title:e.target.title.value,
            category:e.target.sort.value,
            detail:e.target.detail.value,
            comments:[],
            vote:0
        }))
    }
    const handleClick = (e:any)=>{
        setSortBy(e.target.value);
        setOpenModal(!openModal);
    }
    const RadioBox = (value:string,index:number)=>{
        if(index===0)
            return(
                <A.OptionLabel key={index}>
                    <A.Option type="radio" onClick={handleClick} defaultChecked name="sort" id={value} value={value} />
                </A.OptionLabel>
                )
        return(
            <A.OptionLabel key={index}>
                <A.Option type="radio" onClick={handleClick}  name="sort" id={value} value={value} />
            </A.OptionLabel>
            )
    }
    return (
        <A.Wrapper>
            <A.Title>
                Create New Feedback
            </A.Title>
            <A.Form id="new-feedback" onSubmit={handleSubmit}>
                <A.InputWrapper>
                    <A.Label data-title="Feedback Title">
                        <br/>Add a short, descriptive headline
                    </A.Label>
                    <A.Input name="title" maxLength={50} placeholder="Max 50 characters" required/>
                </A.InputWrapper>
                <A.InputWrapper>
                    <A.Label data-title="Category">
                        <br/>Add a short, descriptive headline
                    </A.Label>
                    <A.OptionButton type="button" onClick={()=>setOpenModal(!openModal)} aria-expanded={openModal} aria-controls="feature-options">
                        {sortBy}
                        <A.SelectIcon data-icon-rotate={openModal}>
                            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6l4-4 4 4" stroke="#3442c7" strokeWidth="2" fill="none" fillRule="evenodd"/>
                            </svg>
                        </A.SelectIcon>
                    </A.OptionButton>
                    <A.OptionModal aria-hidden={openModal} id="category-options">
                        {
                            CategoryOptions.map(RadioBox)
                        }
                    </A.OptionModal>
                </A.InputWrapper>
                <A.InputWrapper>
                    <A.Label data-title="Feedback Detail" >
                        <br/>Include any specific comments on what should be improved, added, etc.
                    </A.Label>
                    <A.Textarea name="detail" maxLength={225} rows={3} placeholder="Max 225 characters" required/>
                </A.InputWrapper>
                <A.ButtonWrapper>
                    <FeedBackLinkDarkBlue to="/" data-space-right={true} data-text="Cancel" aria-label="back to homepage"/>
                    <FeedBackBtnPurple data-text="Add Feedback" aria-label="create new feedback" form="new-feedback"/>
                </A.ButtonWrapper>
            </A.Form>
        </A.Wrapper>
    )
}

export default AddFeedback
