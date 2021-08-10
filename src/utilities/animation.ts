import { keyframes } from "styled-components";

export const ANIM = {
    fadeIn:keyframes`
        from{
            opacity:0;
            transform:translateY(-2rem);
        }
        to{
            opacity:1;
        }
    `,
    fade:keyframes`
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    `,
}