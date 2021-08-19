import { createGlobalStyle } from "styled-components";
import { COLORS } from "./utilities/constants";

const GlobalStyle = createGlobalStyle`
    /* Set default font size */
    html{
        font-size:62.5%;
    }
    /* Remove all the default spacing gap */
    *,
    *::before,
    *::after {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    /* For keyboard user*/
    *:focus-visible
    {
        outline: 2px dashed ${COLORS.red} ;
        outline-offset: 5px ;
        transition:all .3s ease;
    }
    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'],
    li {
        list-style: none;
    }
    /* Remove anchor decoration*/
    a{
        text-decoration:none ;
    }
    /* Reset button */
    button{
        padding:0;
        border:0;
        background:transparent;
    }
    /* Set core root defaults */
    html,
    html:focus-within {
        scroll-behavior: smooth;
    }
    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 2.2rem;
        font-size:1.5rem;
        background: ${COLORS.background};
        overflow-x: hidden;
        font-family: 'Jost', sans-serif;
    }
    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }
    /* Reset chrome input autofil background change */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        box-shadow: 0 0 0 30px white inset !important;
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select,
    a {
        font: inherit;
        color:inherit;
    }
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    /* h1{
        font-size:2.4rem;
        line-height:3.5rem;
        letter-spacing:-.33rem;
    } */
    h1{
        font-size:2rem;
        line-height:2.9rem;
        letter-spacing:-.025rem;
    }
    h2{
        font-size:1.8rem;
        line-height:2.6rem;
        letter-spacing:-.025rem;
    }
    h3{
        font-size:1.4rem;
        line-height:2rem;
        letter-spacing:-.02rem;
    }
`;
export default GlobalStyle;
