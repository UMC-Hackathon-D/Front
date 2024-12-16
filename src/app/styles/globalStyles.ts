import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    
    #root {
        font-family: 'NeoDunggeunmo', sans-serif !important; /* 우선순위 강제 적용 */
    }
`;

export default GlobalStyles;
