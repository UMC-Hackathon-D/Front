import { createRoot } from "react-dom/client";
import Routing from "@app/providers/Routing";
import { ThemeProvider } from "styled-components";
import theme from "@app/styles/theme";
import GlobalStyles from "@app/styles/globalStyles";
import GlobalFonts from "@app/styles/globalFonts";
import styled from "styled-components";

const Example = styled.div`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h1};
`;

createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalFonts />
        <Example>초기 세팅 화면입니다.</Example>
        <Routing />
    </ThemeProvider>
);
