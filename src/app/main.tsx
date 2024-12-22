import { createRoot } from "react-dom/client";
import Routing from "@app/providers/Routing";
import { ThemeProvider } from "styled-components";
import theme from "@app/styles/theme";
import GlobalStyles from "@app/styles/globalStyles";
import GlobalFonts from "@app/styles/globalFonts";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <GlobalFonts />
                <Routing />
            </ThemeProvider>
        </RecoilRoot>
    </QueryClientProvider>
);
