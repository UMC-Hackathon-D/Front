import { createGlobalStyle } from "styled-components";
import NeoDunggeunmo from "@shared/assets/fonts/NeoDunggeunmo.woff2";

const GlobalFonts = createGlobalStyle`
    @font-face{
        font-family: 'NeoDunggeunmo';
        src: local("NeoDunggeunmo"), url(${NeoDunggeunmo}) format('woff2');
        font-weight: normal;
    }
`;

export default GlobalFonts;
