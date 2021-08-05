import React,{useState} from 'react';
import * as M from './MainElements';
import * as Global from '../../utilities/buttons';
import ICON from '../../assets/shared/icon-bulb.svg';
import Feedback from './Feedback';

const Main = () => {
    const [openModal,setOpenModal] = useState(false);
    const [sortBy, setSortBy] = useState('Most Upvotes');
    const ModalOptions = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];
    const handleClick = (e:any)=>{
        setSortBy(e.target.value)
    }
    const RadioBox = (value:string,index:number)=>{
        if(index===0)
            return(
                <M.OptionLabel key={index}>
                    <M.Option type="radio" onClick={handleClick} defaultChecked name="sort" id={value} value={value} />
                </M.OptionLabel>
                )
        return(
            <M.OptionLabel key={index}>
                <M.Option type="radio" onClick={handleClick}  name="sort" id={value} value={value} />
            </M.OptionLabel>
            )
    }

    return (
        <M.Wrapper>
            <M.TitleBar>
                <M.Title>
                    <M.TitleIcon src={ICON} />
                     <M.H2>6 Suggetions</M.H2>
                </M.Title>
                <M.FilterWrapper>
                    <M.Filter onClick={()=>setOpenModal(!openModal)}>
                        Sort by&nbsp;:&nbsp;
                        <M.Select> 
                            {sortBy}
                            <M.SelectIcon data-icon-rotate={openModal}>
                                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6l4-4 4 4" stroke="#fff" strokeWidth="2" fill="none" fillRule="evenodd"/>
                                </svg>
                            </M.SelectIcon>
                        </M.Select>
                    </M.Filter>
                    <M.OptionModal aria-hidden={openModal} onClick={()=>setOpenModal(!openModal)}>
                        {ModalOptions.map(RadioBox)}
                    </M.OptionModal>
                </M.FilterWrapper>
                <Global.FeedBackBtn data-text="+ Add Feedback"/>
            </M.TitleBar>
            
            <Feedback />
        </M.Wrapper>
    )
}

export default Main
