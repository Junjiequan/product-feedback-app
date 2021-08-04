import styled from 'styled-components';
import { COLORS,FONT,TRANSITION,DEVICE } from './constants'; 

export const FilterBtn = styled.button`
    background:${COLORS.grayDark};
    border-radius:10px;
    color:${COLORS.blue};
    padding:.5rem 1.6rem;
    height:fit-content;
    margin-right:.8rem;
    margin-bottom:1.4rem;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    ${FONT.semiBold};
    transition:all ${TRANSITION.ease};
    &:hover{
        background:${COLORS.blueHoverLight};
    }
    &:focus{
        background:${COLORS.blue};
        color:${COLORS.white};
    }
`